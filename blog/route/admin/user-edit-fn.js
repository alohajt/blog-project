const { models } = require("mongoose");
// import Joi
const Joi = require('joi')
// import user constructor
const { User } = require('../../model/user')
//import bcrypt
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    // define object validation rules
    const schema = Joi.object({
        username: Joi.string().min(2).max(12).required().error(new Error('wrong username format')),
        email: Joi.string().email().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        role: Joi.string().valid('normal', 'admin').required(),
        state: Joi.number().valid(0, 1).required()
    })


    try {
        // await schema.validate(req.body);
        await Joi.assert(res.body, schema);

    } catch (e) {
       return res.redirect(`/admin/user-edit?message=${e.message}`)
        // e.message
        // console.log(e.message);
    }
    // determine if email is unique
    let user = await User.findOne({ email: req.body.email })
    // if email exists, then user exists
    if (user) {
        // redirect
        return res.redirect(`/admin/user-edit?message=This email is already taken`)

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
