// create user
// import mongoose
const mongoose = require('mongoose')
// import bcrypt
const bcrypt = require('bcrypt')

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
    // admin
    // normal user
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

async function createUser() {
    const salt = await bcrypt.genSalt(10)
    const pass = await bcrypt.hash('123456', salt)
    const user = await User.create({
        username: 'JT',
        email: 'alohajt94@gmail.com',
        password: pass,
        role: 'admin',
        state: 0
    })
}

// createUser()
// export User group as module
module.exports = {
    User: User
}