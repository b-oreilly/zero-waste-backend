//const res = require('express/lib/response')
const Category = require('../models/category_schema')

const getAllCategories = (req, res) => {
    Category.find()
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json("No categories not found")
        }
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json(err)
    })
}

const getSingleCategory = (req, res) => {
    
    Category.findById(req.params.id)
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }
        else {
            res.status(404).json(`Category with id: ${req.params.id} not found`)
        }
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json(err)
    })
}

const addCategory = (req, res) => {
    let categoryData = req.body

    Category.create(categoryData)
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

const editCategory = (req, res) => {
    let categoryData = req.body

    Category.findByIdAndUpdate(req.params.id, categoryData, {
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

const deleteCategory = (req, res) => {

    Category.findByIdAndRemove(req.params.id)
    .then((data) => {
        if (data) {
            res.status(200).json(`Category deleted`)
        } else {
            res.status(404).json(`Category of id ${req.params.id} not found.`)
        }
    })
}

module.exports = {
    getAllCategories,
    getSingleCategory,
    addCategory,
    editCategory,
    deleteCategory
}