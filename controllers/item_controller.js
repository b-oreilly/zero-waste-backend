const Item = require('../models/item_schema')

const getAllItems = (req, res) => {
    Item.find().populate('categoryID').populate('qualityID').populate('userID')
        .then((data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json("No items found.")
            }
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json("None found.")
        })
}

const getSingleItem = (req, res) => {
    Item.findById(req.params.id).populate('categoryID').populate('qualityID').populate('userID')
    .then((data) => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json(`Item of id ${req.params.id} not found.`)
        }
    })
}

const addItem = (req, res) => {
    let itemData = req.body

    Item.create(itemData)
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

const editItem = (req, res) => {
    let itemData = req.body

    Item.findByIdAndUpdate(req.params.id, itemData, {
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

const deleteItem = (req, res) => {

    Item.findByIdAndRemove(req.params.id)
    .then((data) => {
        if (data) {
            res.status(200).json(`Item deleted`)
        } else {
            res.status(404).json(`Item of id ${req.params.id} not found.`)
        }
    })
}

module.exports = {
    getAllItems,
    getSingleItem,
    addItem,
    editItem,
    deleteItem
}