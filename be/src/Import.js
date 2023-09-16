import { v4 as uuidv4 } from "uuid"

async function importData(filePath) {
    const jsonArray = await csv().fromFile(filePath)
    return jsonArray
}

function organizeData(data) {
    let companies = []
    for (const c of data) {
        const search = companies.find(o => o['Company Name'] === c['Company Name'])
        const company = makeCompany(c)
        if (!search)
            companies.push(company)
        else {
            const merged = mergeRecords(company, search)
            companies[companies.indexOf(search)] = merged
        }
    }
    return companies
}

function makeCompany(raw) {
    const company = {}
    company['uuid'] = uuidv4()
    for (const key in raw) {
        if (key === 'Country' || key === 'Industry (Exiobase)' || key === 'Company Name') {
            company[key] = raw[key]
            continue
        }
        if (key.includes('Imputed') || key.includes('Set') || key === 'Year' || key === 'GHG Intensity (Sales)' || key === 'GHG Intensity (Op Income)')
            continue
        company[key] = []
        if (raw[key].slice(3, -1).length > 0) {
            let reported = true
            if (raw[`${key} Imputed`] === '1')
                reported = false
            company[key].push({
                'Year': raw['Year'],
                'Value': raw[key].slice(3, -1),
                'Reported': reported
            })
        }
    }

    return company
}

function mergeRecords(one, two) {
    for (const key in one) {
        if (key === 'Country' || key === 'Industry (Exiobase)' || key === 'Company Name')
            continue
        for (const point of one[key]) {
            const search = two[key].find(o => o['Year'] === point['Year'])
            if (!search) {
                two[key].push(point)
            }
        }
    }

    return two
}

import './env.mjs'
import csv from 'csvtojson'
import Data from './Data.mjs'

async function main() {
    let data = await importData('./src/data.csv')
    const companies = organizeData(data)
    for (const company of companies)
        await Data.create(company)
    const result = await Data.search('adidas')
    console.log(result.hits[0]._source)
}
main()