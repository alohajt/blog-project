// import mongoose
const mongoose = require('mongoose')
// connect to database
mongoose.connect('mongodb://localhost/blog',{ useUnifiedTopology: true })
    .then(() => console.log('database connected'))
    .catch(()=>console.log('database didn\'t connect'))