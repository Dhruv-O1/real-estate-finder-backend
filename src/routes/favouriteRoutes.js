
const routes= require("express").Router();
const favoriteController=require("../controllers/favouriteController")

routes.post("/add",favoriteController.addFavorite);
routes.get("/get",favoriteController.getallFavorite);
routes.get("/getfavid",favoriteController.getFavoriteFromPropertyId);
routes.delete("/delete/:favid",favoriteController.removeFavourite);

module.exports=routes;