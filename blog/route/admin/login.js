const { User } = require('../../model/user')
const bcrypt = require('bcrypt')


module.exports = async (req, res) => {
    // receive request param
    const { email, password } = req.body
    // if user didn't enter email address
    if (email.trim().length == 0 || password.trim().length == 0) {
        // return res.status(400).send('<h4>Wrong email address or password</h4>')
        return res.status(400).render('admin/error', { msg: 'Wrong email address or password' })
    }

    //search for user info with its email
    // if user exits, user is an object
    // if no user, user = null
    let user = await User.findOne({ email: email })
    if (user) {
        // compare password from client with password from database
        let isValid = await bcrypt.compare(password, user.password)
        // if password compare is right
        if (isValid) {
            // login success
            // store username into username request
            req.session.username = user.username
            // res.send('login success')
            req.app.locals.userInfo = user
            // redirect to admin/user
            res.redirect('/admin/user')
        }
        // if (password == user.password) {
        //     res.send('yes')
        // }
    } else {
        // no user
        res.status(400).render('admin/error', { msg: 'Wrong email address or password' })
    }
}

// module.exports = login