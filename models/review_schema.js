const { Schema, model} = require('mongoose')

const reviewSchema = new Schema({
    reviewerUserID: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'Reviewer User field is required']
    },
    reviewedUserID: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'Reviewed User field is required']
    },
    itemID: {
        type: Schema.Types.ObjectId,
        ref: "Item",
        required: [true, 'Item field is required']
    },
    score: {
        type: Number,
        required: [true, 'Score field is required']
    },
    message:{
        type: String
    }
}, {
    timestamps: true
})

module.exports = model('Review', reviewSchema)
