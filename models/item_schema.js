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
    tags: {
        type: [String]
    },
    images:{
        type: [String]
    },
    date: {
        type: Date
    }
}

)

module.exports = model('Item', itemSchema)
