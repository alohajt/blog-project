//import express framework
const express = require('express')
const { model, models } = require('mongoose')
// create blog admin route
const admin = express.Router()

admin.get('/login', (req, res) => {
    res.render('admin/login')
})

// realize admin login
admin.post('/login', (req, res) => {
    // receive request param
})

// create route for user list
admin.get('/user', (req, res) => {
    res.render('admin/user')
})
//export route object as a module
module.exports = admin;