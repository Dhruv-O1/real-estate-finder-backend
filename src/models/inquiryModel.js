const mongoose=require("mongoose");
 
const Schema=mongoose.Schema;

const inquirySchema=new Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        
        type: String,
        unique: true
    },
    phoneNumber:{
        required: true,
        type: Number
    },
    budget:{
        type: Number,
    },
    bathrooms:{
        type:Number,
    }, 
    bedrooms:{
        type:Number,
    },
    balconies:{
        type:Number
    },
    
    
    furnishingStatus:{
        type:String,
        enum:["Furnished","Semi-Furnished","Unfurnished"],
    },
    address:{
        type:String
    },
    parkingSlot:{
        type:Number,
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:"category"
    },
    propertyId:{
        type:Schema.Types.ObjectId,
        ref:"property"
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    stateId:{
        type:Schema.Types.ObjectId,
        ref:"state",
    },
    cityId:{
        type:Schema.Types.ObjectId,
        ref:"city",

    },
    areaId:{
        type:Schema.Types.ObjectId,
        ref:"area",
    },
    message:{
        type:String,
    
    },
    inquiryDate:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        enum:["Open","Resolved","Closed"],
        default:'Open'
    }

})
module.exports=mongoose.model("inquiry",inquirySchema);