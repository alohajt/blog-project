// import joi
const Joi = require('joi')

// define object auth rules
const schema = Joi.object({
    username: Joi.string().min(2).max(5).required(),
    birth: Joi.number().min(1900).max(2020)

})

    
    // const validation = schema.validate(req.body);
    // res.send(validation);


async function run() {
    try {
        // validate
        // await schema.validate({ username: '' })
        // await Joi.validate({ username: 'a' }, schema)
    await Joi.assert({ username: 'a' }, schema);
        
    }
    catch (ex) {
        console.log(ex.message)
        return;
    }
    console.log('validation success');
}

run()

const validation = schema.validate({username: 'a'});
console.log(validation);