const propertyController = require("../controllers/propertyController")
const routes = require("express").Router()

routes.post("/add", propertyController.addProperty)

routes.get("/getall" , propertyController.getAllProperty)

routes.delete("/drop", propertyController.deleteProperty)

module.exports = routes