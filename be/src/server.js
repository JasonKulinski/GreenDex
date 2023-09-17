import './env.mjs'
import express from 'express'
import cors from 'cors'
import * as http from 'http'
import session from 'express-session'
import Data from './Data.mjs'

// set up express app
const app = express()
app.set('trust proxy', 1)
app.use(express.static('public', {
    setHeaders: (res, path) => {
        res.setHeader('Cache-Control', 'no-cache')
    }
}))
app.use(express.json())
app.use(cors())
const secret = process.env.COOKIE_SECRET
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.NODE_ENV == 'development' ? false : true,
        maxAge: +process.env.SESSION_EXPIRATION
    }
}))

// use express app to create http server
const server = http.createServer(app)

// listen on the port specified in .env
server.listen(Number(process.env.PORT), () => {
    console.log(`listening on *:${process.env.PORT}`)
})

app.post('/api/company', async (req, res) => {
    try {
        const response = await Data.read(req.body.company)
        response._source['Grade'] = grade(response._source)
        if (response._source['Industry (Exiobase)'].includes('('))
            response._source['Industry (Exiobase)'] = response._source['Industry (Exiobase)'].slice(0, response._source['Industry (Exiobase)'].indexOf('(') - 1)
        return res.status(200).send(response)
    }
    catch (e) {
        res.status(400).send({ message: e })
    }
})

app.post('/api/search', async (req, res) => {
    try {
        const response = await Data.search(req.body.search)
        for (let company of response.hits) {
            company._source['Grade'] = grade(company._source)
            if (company._source['Industry (Exiobase)'].includes('('))
                company._source['Industry (Exiobase)'] = company._source['Industry (Exiobase)'].slice(0, company._source['Industry (Exiobase)'].indexOf('(') - 1)
        }
        return res.status(200).send(response)
    }
    catch (e) {
        res.status(400).send({ message: e })
    }
})

function grade(company) {
    const grades = {
        'F': 100000000000000,
        'F': 30000000000,
        'D-': 25000000000,
        'D': 15000000000,
        'D+': 6000000000,
        'C-': 3500000000,
        'C': 1000000000,
        'C+': 700000000,
        'B-': 550000000,
        'B': 300000000,
        'B+': 120000000,
        'A-': 65000000,
        'A': 40000000,
        'A+': 25000000
    }

    function compare(a, b) {
        if (a['Year'] < b['Year']) {
            return -1
        }
        if (a['Year'] > b['Year']) {
            return 1
        }
        return 0
    }

    const sortedImpacts = company[' Total GHG Environmental Impact (Scope 1, 2, 3)'].sort(compare)
    const impact = +sortedImpacts[sortedImpacts.length - 1]['Value'].replaceAll(',', '')
    for (let i = 0; i < Object.keys(grades).length; i++) {
        if (grades[Object.keys(grades)[i]] >= impact)
            continue
        if (i == 0)
            return 'F'
        return Object.keys(grades)[i - 1]
    }
    return 'A+'
}