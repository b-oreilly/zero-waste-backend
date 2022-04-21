const Item = require('../models/item_schema');

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

// const addItem = (req, res) => {
//     let itemData = req.body
//     let itemImage = req.file.path

//     Item.create(itemData, itemImage)
//         .then((data) => {
//             if (data) {
//                 res.status(201).json(data)
//             }
//         })
//         .catch((err) => {
//             if (err.name === "ValidationError") {
//                 res.status(422).json(err) //Unprocessable Entity
//             } else {
//                 console.error(err)
//                 res.status(500).json(err) //Internal Server Error 
//             }
//         })
// }

const addItem =  (req, res) => {
    let itemData = req.body
    let itemImage = req.file.path
   
    Item.create({
     title: itemData.title,
     description: itemData.description,
     itemImage: itemImage,
     userID: itemData.userID,
     categoryID: itemData.categoryID,
     qualityID: itemData.qualityID,
     price: itemData.price,
     claimed: itemData.claimed,

     //put all data that are required here...
    }, (err, data)=> {
     if (err) return handleError(err) //here you custom handleError of Just res.status(400).json(err);
   
     res.status(201).json(data)
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

const getUserItems = (req, res) => {

    Item.find({userID: req.params.userID}).populate('categoryID').populate('qualityID')
    .then((data) => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json(`Item from user id ${req.params.userID} not found.`)
        }
    })
}

const getCategoryItems = (req, res) => {

    Item.find({categoryID: req.params.categoryID}).populate('qualityID').populate('userID')
    .then((data) => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json(`No items in category ${req.params.categoryID} found.`)
        }
    })
}

const getQualityItems = (req, res) => {

    Item.find({qualityID: req.params.qualityID}).populate('categoryID').populate('userID')
    .then((data) => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json(`No items with quality ${req.params.qualityID} found.`)
        }
    })
}

module.exports = {
    getAllItems,
    getSingleItem,
    addItem,
    editItem,
    deleteItem,
    getUserItems,
    getCategoryItems,
    getQualityItems
}