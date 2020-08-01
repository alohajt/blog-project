const {User} = require('../../model/user')
const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {
    // receive request params from client
    const {username, email, role, state} = req.body
    // id of user who will modify
    const id = req.query.id

    // res.send(body.password)
    let user = await User.findOne({ _id: id })
    const isValid = await bcrypt.compare(req.body.password, user.password)
    if (isValid) {
        // password compare pass
        //res.send('yes')
        // update user data into database
        await User.updateOne({ _id: id }, {
            username: username,
            email: email,
            role: role,
            state: state
        })
        // redirect to user list
        res.redirect('/admin/user')

    } else {
        // password compare fail
        let obj = {path:'/admin/user-edit', message: 'Wrong password, please enter again', id: id}
        next(JSON.stringify(obj))
    }
}