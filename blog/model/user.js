// create user
// import mongoose
const mongoose = require('mongoose')
// import bcrypt
const bcrypt = require('bcrypt')
// import joi
const Joi = require('joi')

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

//validate user data
const validateUser = (user) => {
    // define object validation rules
    const schema = Joi.object({
        username: Joi.string().min(2).max(12).required().error(new Error('wrong username format')),
        email: Joi.string().email().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        role: Joi.string().valid('normal', 'admin').required(),
        state: Joi.number().valid(0, 1).required()
    })

     // await schema.validate(req.body);
     return Joi.assert(user, schema);
}
// export User group as module
module.exports = {
    User: User,
    validateUser: validateUser
}