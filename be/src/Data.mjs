import * as fs from 'fs'
import { Client } from '@elastic/elasticsearch'

const INDEX = 'companies'
const SEARCHFIELDS = ["id^5", "Company Name^5", "Industry (Exiobase)^4"]

const elastic = new Client({
    node: process.env.ES_HOST,
    auth: {
        username: process.env.ES_USER,
        password: process.env.ES_PASS
    },
    tls: {
        ca: fs.readFileSync('es-config/config/certs/http_ca.crt'),
        rejectUnauthorized: false
    }
})

try {
    await elastic.indices.create({
        index: INDEX
    })
    console.log(`${INDEX} index created!`)
}
catch (e) {
    if (e?.meta?.body?.error?.type == 'resource_already_exists_exception')
        console.log(`${INDEX} initialized...`)
    else
        console.error(e)
}

export default class Data {

    /**
    * Attempts to create a document in an Elasticsearch index.
    * @param {any} obj The object to add as an ES document.
    */
    static async create(obj) {
        await elastic.index({
            index: INDEX,
            document: obj,
            id: obj['Company Name']
        })
    }

    /**
    * Attempts to read an existing document in an Elasticsearch index by its id.
    * @param {string} id The id of the object to read.
    * @param {Object} objClass The type of object to read.
    * @returns {Promise<any>} The object that is read.
    */
    static async read(company) {
        try {
            const result = await elastic.get({
                index: INDEX,
                id: company
            })
            return result
        }
        catch (e) {
            if (e?.meta?.body?.found === false)
                return false
            return e
        }
    }

    /**
    * Attempts to update an existing document in Elasticsearch.
    * @param {any} obj The object to update.
    */
    static async update(obj) {
        await elastic.update({
            index: INDEX,
            id: obj['Company Name'],
            doc: obj
        })
    }

    /**
    * Attempts to delete an object from its index in Elasticsearch.
    * @param {any} obj The object to delete.
    */
    static async delete(obj) {
        await elastic.delete({
            index: INDEX,
            id: obj['Company Name']
        })
    }

    /**
    * Attempts to search for an item with the given text and options.
    * @param {string} text The search text.
    * @param {string} [options] Any sorting options.
    * @param {number} [from=0] The number of matches to start returning results after ('from' in ES).
    * @param {string} [specificField] A specific field to search under (otherwise multiple fields will be searched).
    */
    static async search(text, options, from, specificField) {
        if (!text || !text?.length)
            throw new Error('text is required to search!')

        from ??= 0

        // sorting options
        const sortables = {
            rel: {
                '_score': {
                }
            },
            list: {
                'date': {
                }
            }
        }

        const sorting = []
        if (options?.length) {
            // split up the sorting options
            options = options.split(',')
            for (let option of options) {
                // make sure each one is valid
                option = option.split('-')
                if (option.length != 2 || !(option[0] in sortables))
                    continue

                const sortable = sortables[option[0]]
                const field = Object.keys(sortable)[0]
                const order = option[1] == 'a' ? 'asc' : 'desc'
                sortable[field].order = order
                sorting.push(sortable)
            }
        }

        const esRequest = {
            index: INDEX,
            query: {
                multi_match: undefined,
                match: undefined
            },
            sort: sorting,
            from: from
        }

        if (!specificField || !specificField.length) {
            esRequest.query.multi_match = {
                query: text,
                fuzziness: 1,
                fields: SEARCHFIELDS
            }
        }
        else {
            esRequest.query.match = {}
            esRequest.query.match[`${specificField}.keyword`] = {
                fuzziness: 0,
                query: text
            }
        }

        var esResult = await elastic.search(esRequest)

        // const hits = []
        // for (let hit of esResult.hits.hits)
        //     hits.push(new objClass(hit._source))
        return {
            hits: esResult.hits.hits,
            total: esResult.hits.total.value
        }
    }
}