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
    const { email, password } = req.body
    // if user didn't enter email address
    if (email.trim().length == 0 || password.trim().length == 0) {
        // return res.status(400).send('<h4>Wrong email address or password</h4>')
        return res.status(400).render('admin/error', {msg:'Wrong email address or password'})

    }
   
})

// create route for user list
admin.get('/user', (req, res) => {
    res.render('admin/user')
})
//export route object as a module
module.exports = admin;