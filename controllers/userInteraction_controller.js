const UserInteraction = require('../models/userInteraction_schema')

const getAllUserInteractions = (req, res) => {
    UserInteraction.find().populate('userID').populate('itemID').populate('interactionID')
        .then((data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json("No user interactions found.")
            }
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json("None found.")
        })
}

const getSingleUserInteraction = (req, res) => {
    UserInteraction.findById(req.params.id).populate('userID').populate('itemID').populate('interactionID')
    .then((data) => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json(`UserInteraction of id ${req.params.id} not found.`)
        }
    })
}

const addUserInteraction = (req, res) => {
    let userInteractionData = req.body

    UserInteraction.create(userInteractionData)
        .then((data) => {
            if (data) {
                res.status(201).json(data)
            }
        })
        .catch((err) => {
            if (err.name === "ValidationError") {
                res.status(422).json(err) //Unprocessable Entity
            } else {
                console.error(err)
                res.status(500).json(err) //Internal Server Error 
            }
        })
}

const editUserInteraction = (req, res) => {
    let userInteractionData = req.body

    UserInteraction.findByIdAndUpdate(req.params.id, userInteractionData, {
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

const deleteUserInteraction = (req, res) => {

    UserInteraction.findByIdAndRemove(req.params.id)
    .then((data) => {
        if (data) {
            res.status(200).json(`UserInteraction deleted`)
        } else {
            res.status(404).json(`UserInteraction of id ${req.params.id} not found.`)
        }
    })
}

module.exports = {
    getAllUserInteractions,
    getSingleUserInteraction,
    addUserInteraction,
    editUserInteraction,
    deleteUserInteraction
}