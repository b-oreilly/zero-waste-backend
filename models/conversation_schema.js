const { Schema, model} = require('mongoose')

const conversationSchema = new Schema({
    firstUserID: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'Conversation User field is required']
    },
    secondUserID: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'Conversation User field is required']
    },
    messageID: {
        type: Schema.Types.ObjectId,
        ref: "Message",
        required: [true, 'Item field is required']
    }
}, {
    timestamps: true
})

module.exports = model('Conversation', conversationSchema)
