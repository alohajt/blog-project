// import bcrypt
const bcrypt = require('bcrypt')


async function run() {
    // generate random string
    // greater genSalt, the more complex
    const salt = await bcrypt.genSalt(10)
    // encode password
    // bcrypt.hash('your password', random string) return encoded password
    const result = await bcrypt.hash('123456', salt)
    console.log(salt);
    console.log(result)
}

run()