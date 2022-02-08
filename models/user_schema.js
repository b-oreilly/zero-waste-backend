const {
    Schema,
    model
} = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    first_name: {
        type: String,
        trim: true,
        required: [true, 'First name is required.']
    },
    last_name: {
        type: String,
        trim: true,
        required: [true, 'Surname is required.']
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: [true, 'Username is required.']
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: [true, 'Email is required.']
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Password is required.']
    }
}, {
    timestamps: true
})

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password, function(result) {
        return result
    })
}

module.exports = model('User', userSchema)