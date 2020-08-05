//import express framework
const express = require('express')
// import path to deal with path
const path = require('path')
// import body-parser module to deal with POST request
const bodyParser = require('body-parser')
// import express-session
const session = require('express-session')
// import dataFormat module
// const dateFormat = require('dateformat');
// import art-template
const template = require('art-template')

//create web server
const app = express() 
// connect to database
require('./model/connect')
// deal with POST request  
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({ secret:'secret key'}))


// tell express the template location
app.set('views', path.join(__dirname, 'views'))
// tell express the template default suffix
app.set('view engine', 'art')
// template engine when render .art template
app.engine('art', require('express-art-template'))
// 向模板内部导入dateFormate变量
template.defaults.imports.dateFormat = dateFormat;


// open static files
app.use(express.static(path.join(__dirname, 'public')))

// import route module
const home = require('./route/home')
const admin = require('./route/admin')

// block request, see if user is logged in
app.use('/admin', require('./middleware/loginGuard'))

// match request with routes
app.use('/home', home)
app.use('/admin', admin)

app.use((err, req, res, next) => {
    // JSON.parse() turn string to object
    const result = JSON.parse(err)
    let params = []
    for (let attr in result) {
        if (attr != 'path') {
            params.push(attr + '=' + result[attr])
        }
    }
    res.redirect(`${result.path}?${params.join('&')}`)
})

//listen port
app.listen(80)
console.log('web server starts to work, please go to localhost');