//import express framework
const express = require('express')
const { model, models } = require('mongoose')
// create blog homepage route
const home = express.Router()

home.get('/', (req, res) => {
    res.send('welcome to homepage')
})

//export route object as a module
module.exports = home;