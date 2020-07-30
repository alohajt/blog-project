//import express framework
const express = require('express')
// import path to deal with path
const path = require('path')
// import body-parser module to deal with POST request
const bodyParser = require('body-parser')
//create web server
const app = express()
// connect to database
require('./model/connect')
// deal with POST request  
app.use(bodyParser.urlencoded({extended: false}))

// tell express the template location
app.set('views', path.join(__dirname, 'views'))
// tell express the template default suffix
app.set('view engine', 'art')
// template engine when render .art template
app.engine('art', require('express-art-template'))

// open static files
app.use(express.static(path.join(__dirname, 'public')))

// import route module
const home = require('./route/home')
const admin = require('./route/admin')

// match request with routes
app.use('/home', home)
app.use('/admin', admin)

//listen port
app.listen(80)
console.log('web server starts to work, please go to localhost');