// import user collection constructor
const { User } = require('../../model/user')

module.exports = async (req, res) => {
    // find all users
    let users = await User.find({}) //return an array
    // search user data from database
    // render and pass all users into admin/user
    res.render('admin/user', {
        users: users
    })
}