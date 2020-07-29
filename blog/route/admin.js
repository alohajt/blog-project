//import express framework
const express = require('express')
const { model, models } = require('mongoose')
// create blog admin route
const admin = express.Router()

admin.get('/', (req, res) => {
    res.send('welcome to admin page')
})

//export route object as a module
module.exports = admin;