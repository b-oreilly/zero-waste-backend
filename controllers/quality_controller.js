//const res = require('express/lib/response')
const Quality = require('../models/quality_schema')

const getAllQualities = (req, res) => {
    Quality.find()
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json("No qualities not found")
        }
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json(err)
    })
}

const getSingleQuality = (req, res) => {
    
    Quality.findById(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json(`quality with id: ${req.params.id} not found`)
        }
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json(err)
    })
}

const addQuality = (req, res) => {
    let qualityData = req.body

    Quality.create(qualityData)
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

const editQuality = (req, res) => {
    let qualityData = req.body

    Quality.findByIdAndUpdate(req.params.id, qualityData, {
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

const deleteQuality = (req, res) => {

    Quality.findByIdAndRemove(req.params.id)
    .then((data) => {
        if (data) {
            res.status(200).json(`Quality deleted`)
        } else {
            res.status(404).json(`Quality of id ${req.params.id} not found.`)
        }
    })
}

module.exports = {
    getAllQualities,
    getSingleQuality,
    addQuality,
    editQuality,
    deleteQuality
}