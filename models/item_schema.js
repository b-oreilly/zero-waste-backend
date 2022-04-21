const { Schema, model} = require('mongoose')

const itemSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title field is required.']
    },
    description: {
        type: String,
        required: [true, 'Description field is required.']
    },
    itemImage: {
        type: String,
        required: [true, 'Image field is required.']
    },
    userID: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'User field is required']
    },
    categoryID: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: [true, 'Category field is required']
    },
    qualityID: {
        type: Schema.Types.ObjectId,
        ref: "Quality",
        required: [true, 'Quality field is required']
    },
    price: {
        type: Number
    },
    claimed:{
        type: Boolean
    }
}, {
    timestamps: true
})

module.exports = model('Item', itemSchema)
