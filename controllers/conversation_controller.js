const Conversation = require('../models/conversation_schema')

const getAllConversations = (req, res) => {
    Conversation.find().populate('firstUserID').populate('secondUserID').populate('messageID')
        .then((data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json("No conversation found.")
            }
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json("None found.")
        })
}

const getSingleConversation = (req, res) => {
    Conversation.findById(req.params.id).populate('firstUserID').populate('secondUserID').populate('messageID')
    .then((data) => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json(`Conversation of id ${req.params.id} not found.`)
        }
    })
}

const addConversation = (req, res) => {
    let conversationData = req.body

    Conversation.create(conversationData)
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

const editConversation = (req, res) => {
    let conversationData = req.body

    Conversation.findByIdAndUpdate(req.params.id, conversationData, {
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

const deleteConversation = (req, res) => {

    Conversation.findByIdAndRemove(req.params.id)
    .then((data) => {
        if (data) {
            res.status(200).json(`Conversation deleted`)
        } else {
            res.status(404).json(`Conversation of id ${req.params.id} not found.`)
        }
    })
}

module.exports = {
    getAllConversations,
    getSingleConversation,
    addConversation,
    editConversation,
    deleteConversation
}