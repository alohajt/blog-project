const guard = (req, res, next) => {
    //determine if user visits login page
    // determine if user is logged in
    //if user logged in, pass request
     //if user not logged in, redirect request to login page
    if (req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login')
    } else {
        // if user logged in, pass request to next
        next()
    }
}

module.exports = guard