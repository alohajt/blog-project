// import user collection constructor
const { User } = require('../../model/user')

module.exports = async (req, res) => {
    // receive current page number from client
    let page = req.query.page || 1
    // data number displayed per page
    let pagesize = 10
    // search for total number of users
    let count = await User.countDocuments({})
    // total page number
    let total = Math.ceil(count / pagesize)

    // starting position of corresponding page number
    let start = (page - 1) * pagesize
    // search user data from database
    let users = await User.find({}).limit(pagesize).skip(start) //return an array
    
    // find all users
    // render and pass all users into admin/user
    res.render('admin/user', {
        users: users,
        page: page,
        total: total
    })
}