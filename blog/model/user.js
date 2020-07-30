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

// User.create({
//     username: 'JT',
//     email: 'alohajt94@gmail.com',
//     password: '123456',
//     role: 'admin',
//     state: 0
// })
//     .then(() => {
//         console.log('user created success');
//     })
//     .catch(() => {
//         console.log('user create fail');
//     })
 
// export User group as module
module.exports = {
    User: User
}