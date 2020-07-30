// create user
// import mongoose
const mongoose = require('mongoose')
// create user schema rules
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        // no repeat email
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    // 0 start
    // 1 disable
    state: {
        type: Number,
        default: 0
    }
})

// create user 
const User = mongoose.model('User', userSchema)

// export User group as module
module.exports = {
    User: User
}