const axios = require('axios')

const Instance = axios.create({

    baseURL: 'http://192.168.100.53:8080/',
    headers: {
        "Content-Type": 'application/json',
    }


})

module.exports = Instance