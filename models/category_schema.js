const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'name field is required']
    }
})

module.exports = model('Category', categorySchema)