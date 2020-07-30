//import express framework
const express = require('express')
// const { model, models } = require('mongoose')
const bcrypt = require('bcrypt')

//import user constructor
const { User } = require('../model/user')
// create blog admin route
const admin = express.Router()

// render login page
admin.get('/login', require('./admin/loginPage'))

// realize admin login
admin.post('/login', require('./admin/login'))

// create route for user list
admin.get('/user', require('./admin/userPage'))

// log out
admin.get('/logout', (req, res) => {})
//export route object as a module
module.exports = admin;