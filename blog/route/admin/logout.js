module.exports = (req, res) => {
    // delete session
    req.session.destroy(function () {
        //delete cookie
        res.clearCookie('connect.sid')
        // redirect to user login page
        res.redirect('/admin/login')
    })
}