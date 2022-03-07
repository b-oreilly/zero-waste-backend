const { Schema, model} = require('mongoose')

const userInteractionSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'User field is required']
    },
    itemID: {
        type: Schema.Types.ObjectId,
        ref: "Item",
        required: [true, 'Item field is required']
    },
    interactionID: {
        type: Schema.Types.ObjectId,
        ref: "Interaction",
        required: [true, 'Interaction field is required']
    }
}, {
    timestamps: true
})

module.exports = model('UserInteraction', userInteractionSchema)
