const User = require('../models/user_schema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = (req, res) => {
    let newUser = new User(req.body)

    newUser.password = bcrypt.hashSync(req.body.password, 10)

    newUser.save((err, user) => {
        if (err) {
            return res.status(400).send({
                message: err
            })
        } else {
            user.password = undefined
            return res.json(user)
        }
    })
}

const login = (req, res) => {
    User.findOne({
            //$or: [{
            email: req.body.email,
            // }, {
            //     username: req.body.username
            // }]
        })
        .then(user => {
            if (!user || !user.comparePassword(req.body.password)) {
                return res.status(401).json({
                    messsage: 'Authentication failed - Invalid username/email or password.'
                })
            }
            // create token
            res.json({
                token: jwt.sign({
                        email: user.email,
                        username: user.username,
                        _id: user._id
                    },
                    // process.env.JWT_KEY
                    'zero_waste_app'
                )
            })
        })
        .catch(err => {
            throw err
        })
}

const loginRequired = (req, res, next) => {
    if(req.user) {
        next()
    }
    else {
        return res.status(401).json({
            message: 'Unauthorised user.'
        })
    }
}



module.exports = {
    register,
    login,
    loginRequired
}