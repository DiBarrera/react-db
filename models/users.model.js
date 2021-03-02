const mongoose = require ('mongoose');
const {model, Schema} = mongoose;

const userSchema = new Schema({
    avatar: {
        type: String,
        default: "../images/img-default.jpg"
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

const User = model ('Users', userSchema)

module.exports = User