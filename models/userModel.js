const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required:[true, "please enter your email!"],
        trim: true
    }
    ,
    password: {
        type: String,
        required:[true, "please enter your password!"],
    },
    name: {
        type: String,
        required:[true, "please enter your name!"],
    },
    role:{
        type: Number,
        default: 0
    },
    address: {
        type: String,
        default: ''
    },
    avatar:{
        type:String,
        default: ''
    },
    friends:{
        type:String,
        default:''
    },
    requested:{
        type:String,
        default:''
    }
}, {
    timestamps:true
});
module.exports = mongoose.model("Users", userSchema) 