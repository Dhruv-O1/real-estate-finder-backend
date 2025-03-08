const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const propertySchema=new Schema({

    propertyName:{
        type:String,
        required:true,
    },
    address:{
        type:String,

    },
    zipcode:{
        type:Number
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:"category"
    
    },
    areaId:{
        type:Schema.Types.ObjectId,
        ref:"area",
    },
    cityId:{
        type:Schema.Types.ObjectId,
        ref:"city",

    },
    stateId:{
        type:Schema.Types.ObjectId,
        ref:"state"
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user"
    
    },
    description:{
        type:String,
    },
    basePrice:{
        type:Number,
        required:true
    },
    bedrooms:{
        type:Number,
    },
    bathrooms:{
        type:Number
    },
    furnishingStatus:{
        type:String,
        enum:["Furnished","Semi-Furnished","Unfurnished"],
    },
    status:{
        type:String,
        enum:["Available","Sold","Rented"]
    }

},{
    timestamps:true
})

module.exports=mongoose.model("property",propertySchema);