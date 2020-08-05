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

// create route to edit user
admin.post('/user-modify', require('./admin/user-modify'))

// 用户删除功能路由
admin.get('/delete', require('./admin/user-delete'));

// // 文章列表页面路由
// admin.get('/article', require('./admin/article'));

// // 文章编辑页面路由
// admin.get('/article-edit', require('./admin/article-edit'));

// // 实现文章添加功能的路由
// admin.post('/article-add', require('./admin/article-add'))

//export route object as a module
module.exports = admin;