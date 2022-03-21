const { Schema, model } = require('mongoose')

const locationSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name field is required']
    },
    latitude: {
        type: Number,
        required: [true, 'latitude field is required']
    },
    longitude: {
        type: Number,
        required: [true, 'longitude field is required']
    }
})

module.exports = model('Location', locationSchema)