const Review = require('../models/review_schema')

const getAllReviews = (req, res) => {
    Review.find().populate('reviewerUserID').populate('reviewedUserID').populate('itemID')
        .then((data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json("No reviews found.")
            }
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json("None found.")
        })
}

const getSingleReview = (req, res) => {
    Review.findById(req.params.id).populate('reviewerUserID').populate('reviewedUserID').populate('itemID')
    .then((data) => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json(`Review of id ${req.params.id} not found.`)
        }
    })
}

const addReview = (req, res) => {
    let reviewData = req.body

    Review.create(reviewData)
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

const editReview = (req, res) => {
    let reviewData = req.body

    Review.findByIdAndUpdate(req.params.id, reviewData, {
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

const deleteReview = (req, res) => {

    Review.findByIdAndRemove(req.params.id)
    .then((data) => {
        if (data) {
            res.status(200).json(`Review deleted`)
        } else {
            res.status(404).json(`Review of id ${req.params.id} not found.`)
        }
    })
}

const getUserReviews = (req, res) => {

    Review.find({reviewerUserID: req.params.reviewerUserID}).populate('reviewedUserID').populate('itemID')
    .then((data) => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json(`No reviews by ${req.params.reviewerUserID} found.`)
        }
    })
}

const getUserReviewed = (req, res) => {

    Review.find({reviewedUserID: req.params.reviewedUserID}).populate('reviewedUserID').populate('itemID')
    .then((data) => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json(`No reviews of ${req.params.reviewedUserID} found.`)
        }
    })
}

module.exports = {
    getAllReviews,
    getSingleReview,
    addReview,
    editReview,
    deleteReview,
    getUserReviews,
    getUserReviewed
}