//const res = require('express/lib/response')
const Interaction = require('../models/interaction_schema')

const getAllInteractions = (req, res) => {
    Interaction.find()
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json("No interactions not found")
        }
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json(err)
    })
}

const getSingleInteraction = (req, res) => {
    
    Interaction.findById(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json(`interaction with id: ${req.params.id} not found`)
        }
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json(err)
    })
}

const addInteraction = (req, res) => {
    let interactionData = req.body

    Interaction.create(interactionData)
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

const editInteraction = (req, res) => {
    let interactionData = req.body

    Interaction.findByIdAndUpdate(req.params.id, interactionData, {
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

const deleteInteraction = (req, res) => {

    Interaction.findByIdAndRemove(req.params.id)
    .then((data) => {
        if (data) {
            res.status(200).json(`Interaction deleted`)
        } else {
            res.status(404).json(`Interaction of id ${req.params.id} not found.`)
        }
    })
}

module.exports = {
    getAllInteractions,
    getSingleInteraction,
    addInteraction,
    editInteraction,
    deleteInteraction
}