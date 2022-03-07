const {
    Schema,
    model
} = require('mongoose')
const bcrypt = require('bcrypt')

let validateEmail = function (email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

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
        required: [true, 'Email is required.'],
        validate: [validateEmail, 'Please enter a valid email address.']
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Password is required.']
    },
    latitude: {
        type: Number,
        trim: true,
        required: [true, 'Lat is required.']
    },
    longitude: {
        type: Number,
        trim: true,
        required: [true, 'Long is required.']
    },
    pfp: {
        type: String
    },
}, {
    timestamps: true
})

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password, function (result) {
        return result
    })
}

module.exports = model('User', userSchema)