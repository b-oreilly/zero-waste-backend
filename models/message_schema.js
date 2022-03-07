const { Schema, model} = require('mongoose')

const messageSchema = new Schema({
    senderUserID: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'Sending User field is required']
    },
    receiverUserID: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'Receiving User field is required']
    },
    message:{
        type: String,
        required: [true, 'Message field is required']
    },
    sent:{
        type: Boolean,
        required: [true, 'Sent field is required']
    },
    seen:{
        type: Boolean,
        required: [true, 'Seen field is required']
    }
}, {
    timestamps: true
})

module.exports = model('Message', messageSchema)
