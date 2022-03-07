const { Schema, model } = require('mongoose')

const interactionSchema = new Schema({
    interactionName: {
        type: String,
        required: [true, 'interaction field is required']
    }
})

module.exports = model('Interaction', interactionSchema)