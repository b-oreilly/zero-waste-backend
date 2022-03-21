//const res = require('express/lib/response')
const Location = require('../models/location_schema')

const getAllLocations = (req, res) => {
    Location.find()
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json("No locations not found")
        }
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json(err)
    })
}

const getSingleLocation = (req, res) => {
    
    Location.findById(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json(`location with id: ${req.params.id} not found`)
        }
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json(err)
    })
}

const addLocation = (req, res) => {
    let locationData = req.body

    Location.create(locationData)
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

const editLocation = (req, res) => {
    let locationData = req.body

    Location.findByIdAndUpdate(req.params.id, locationData, {
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

const deleteLocation = (req, res) => {

    Location.findByIdAndRemove(req.params.id)
    .then((data) => {
        if (data) {
            res.status(200).json(`Location deleted`)
        } else {
            res.status(404).json(`Location with id ${req.params.id} not found.`)
        }
    })
}

module.exports = {
    getAllLocations,
    getSingleLocation,
    addLocation,
    editLocation,
    deleteLocation
}