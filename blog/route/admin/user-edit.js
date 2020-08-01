const { meta } = require("joi")

const { User } = require('../../model/user')

module.exports = async (req, res) => {
    // request id param form web address
    const { message, id } = req.query
    //if id, 
    if (id) {
        // edit user
        let user = await User.findOne({ _id: id })
        res.render('admin/user-edit', {
            message: message, 
            user: user,
            link: '/admin/user-modify?id=' + id,
            button: 'Edit'
        })
    } else {
        // add user
        res.render('admin/user-edit', {
            message: message,
            link: 'admin/user-edit',
            button: 'Add'

        })
    }
    
}