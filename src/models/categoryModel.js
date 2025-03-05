const mongoose = require("mongoose")

const Schema = mongoose.Schema

const categorySchema = new Schema({
    name:{
        enum:["apartment","house","villa","commercial","plot"],
        type: String,
        required: true
    },
    description:{
        type: String
    },
    isActive:{
        type: Boolean,
        default: true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("category",categorySchema)