import { CapacitorHttp } from '@capacitor/core'

const API_URL = 'http://iristhrifting.com/api/'

export async function doGet(url) {
    const options = {
        url: `${API_URL}${url}`
    }

    const response = await CapacitorHttp.get(options)
    return response
}

export async function doPost(url, data) {
    const options = {
        url: url,
        headers: { 'Content-Type': 'application/json' },
        data: data
    }

    const response = await CapacitorHttp.post(options)
    return response
}

export function randRangeInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function randRange(min, max) {
    return Math.random() * (max - min) + min
}

export async function get(url) {
    const response = await fetch(`/api/${url}`, {
        mode: 'cors'
    })
    const body = await response.json()
    if (response.status !== 200)
        throw Error(`${response.status} ${body.message}`)
    return body
}

export async function post(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
    const body = await response.json()
    if (response.status !== 200)
        throw Error(`${response.status} ${body.message}`)
    return body
}

export async function del(url) {
    const response = await fetch(url, {
        method: 'DELETE',
        mode: 'cors'
    })
    const body = await response.json()
    if (response.status !== 200)
        throw Error(`${response.status} ${body.message}`)
    return body
}