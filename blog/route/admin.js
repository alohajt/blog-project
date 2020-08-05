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
admin.get('/logout', require('./admin/logout'))

// create route for user edit page
admin.get('/user-edit', require('./admin/user-edit'))

// create route to realize user add
admin.post('/user-edit', require('./admin/user-edit-fn'))

admin.post('/user-modify', require('./admin/user-modify'))

//export route object as a module
module.exports = admin;