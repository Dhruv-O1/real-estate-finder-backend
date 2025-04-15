


const favoriteModel=require("../models/favouriteModel");

const addFavorite=async (req,res) => {
    try{
        const savedFavorite=await favoriteModel.create(req.body);
        res.status(201).json({
        message:"Favorite Saved Sucessfully",
        data: savedFavorite
    })
    }catch{
        res.status(500).json({message:err})
    }
};
// const getallFavorite =async (req,res) => {
//     try{
//         const favorite = await favoriteModel.find({userId: req.body.userId}).populate("propertyId")
//         res.status(201).json({
//             message:"getallFavorite",
//             data: favorite
//         });
//     }catch (err){
//         res.status(500).json({message:err});
//     }
// };

const getallFavorite = async (req, res) => {
    try {
      const userId = req.query.userId; // Changed from req.body to req.query
      
      if (!userId) {
        return res.status(400).json({ message: "userId is required" });
      }
  
      const favorite = await favoriteModel.find({ userId })
        .populate("propertyId");
  
      res.status(200).json({ // Changed status from 201 (Created) to 200 (OK)
        message: "Favorites retrieved successfully",
        data: favorite
      });
    } catch (err) {
      res.status(500).json({ 
        message: "Server error",
        error: err.message // Send only error message (avoid leaking stack traces)
      });
    }
  };


const getFavoriteFromPropertyId = async (req, res) => {
    try {
      const propertyId = req.query.propertyId; // Changed from req.body to req.query
      
      if (!propertyId) {
        return res.status(400).json({ message: "propertyId is required" });
      }
  
      const favorite = await favoriteModel.findOne({ propertyId });
  
      res.status(200).json({ // Changed status from 201 (Created) to 200 (OK)
        message: "Favorites retrieved successfully",
        data: favorite
      });
    } catch (err) {
      res.status(500).json({ 
        message: "Server error",
        error: err.message // Send only error message (avoid leaking stack traces)
      });
    }
  };

  const removeFavourite = async (req,res) => {
    try {
        const favouriteId = req.params.favid 
        const deletedProperty = await favoriteModel.findByIdAndDelete(favouriteId)
        res.status(200).json({
            message: "Deleted property",
            data: deletedProperty
        })
    } catch (error) {
        res.status(500).json({ 
            message: "Server error",
            error: error.message // Send only error message (avoid leaking stack traces)
          });
    }
  }

  


module.exports={
    addFavorite,getallFavorite,removeFavourite,getFavoriteFromPropertyId
}
