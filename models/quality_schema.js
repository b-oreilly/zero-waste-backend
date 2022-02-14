const { Schema, model } = require('mongoose')

const qualitySchema = new Schema({
    name: {
        type: String,
        required: [true, 'name field is required']
    }
})

module.exports = model('Quality', qualitySchema)