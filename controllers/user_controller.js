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
                user,
                // user: user.id,
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

const getAllUsers = (req, res) => {
    User.find().populate('locationID')
        .then((data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json("No users found.")
            }
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json("None found.")
        })
}

const getSingleUser = (req, res) => {
    User.findById(req.params.id).populate('locationID')
    .then((data) => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json(`User with id ${req.params.id} not found.`)
        }
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

const editUser = (req, res) => {
    let userData = req.body

    User.findByIdAndUpdate(req.params.id, userData, {
        new: true
    })
    .then((data) => {
        if(data){
            res.status(201).json(data)
        }
    })
    .catch((err) => {
        if(err.name === "ValidationError"){
            res.status(422).json(err)
        }
        else {
            console.error(err)
            res.status(500).json(err)
        }
        
    })
}

const deleteUser = (req, res) => {

    User.findByIdAndRemove(req.params.id)
    .then((data) => {
        if (data) {
            res.status(200).json(`User deleted`)
        } else {
            res.status(404).json(`User of id ${req.params.id} not found.`)
        }
    })
}

module.exports = {
    register,
    login,
    loginRequired,
    getAllUsers,
    getSingleUser,
    editUser,
    deleteUser
}