const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const areaSchema = new Schema({
    name:{
        type: String
    },
    stateId:{
        type:Schema.Types.ObjectId,
        ref:'State'
    },
    cityId:{
        type:Schema.Types.ObjectId,
        ref:'City'
    }
    
},{
    timestamps: true
})
module.exports = mongoose.model('area', areaSchema);