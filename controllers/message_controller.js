const Message = require('../models/message_schema')

const getAllMessages = (req, res) => {
    Message.find().populate('senderUserID').populate('receiverUserID')
        .then((data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json("No messages found.")
            }
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json("None found.")
        })
}

const getSingleMessage = (req, res) => {
    Message.findById(req.params.id).populate('senderUserID').populate('receiverUserID')
    .then((data) => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json(`Message of id ${req.params.id} not found.`)
        }
    })
}

const addMessage = (req, res) => {
    let messageData = req.body

    Message.create(messageData)
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

const editMessage = (req, res) => {
    let messageData = req.body

    Message.findByIdAndUpdate(req.params.id, messageData, {
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

const deleteMessage = (req, res) => {

    Message.findByIdAndRemove(req.params.id)
    .then((data) => {
        if (data) {
            res.status(200).json(`Message deleted`)
        } else {
            res.status(404).json(`Message of id ${req.params.id} not found.`)
        }
    })
}

module.exports = {
    getAllMessages,
    getSingleMessage,
    addMessage,
    editMessage,
    deleteMessage
}