//import express framework
const express = require('express')
//create web server
const app = express()

// import route module
const home = require('./route/home')
const admin = require('./route/admin')

// match request with routes
app.use('/home', home)
app.use('/admin', admin)

//listen port
app.listen(80)
console.log('web server starts to work, please go to localhost');