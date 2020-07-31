const { models } = require("mongoose");
// import Joi
const Joi = require('joi')
// import user constructor
const { User, validateUser } = require('../../model/user')
//import bcrypt
const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {
    try {
        await validateUser(req.body)
    } catch (e) {
    //    return res.redirect(`/admin/user-edit?message=${e.message}`)
        // e.message
        // console.log(e.message);
        // JSON.stringify() turns object into string
        return next(JSON.stringify({path: '/admin/user-edit', message: e.message}) )
    }
    // determine if email is unique
    let user = await User.findOne({ email: req.body.email })
    // if email exists, then user exists
    if (user) {
        // redirect
        // return res.redirect(`/admin/user-edit?message=This email is already taken`)
        return next(JSON.stringify({path: '/admin/user-edit', message: 'This email is already taken'}))
    }
    // encrypt password
    // generate random insert string
    const salt = await bcrypt.genSalt(10)
    // encrypt
    const password = await bcrypt.hash(req.body.password, salt)
    // replace password
    req.body.password = password
    // add user to database
    await User.create(req.body)
    // redirect to user list
    res.redirect('/admin/user')
}
