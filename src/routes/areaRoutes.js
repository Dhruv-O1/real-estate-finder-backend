const routes = require('express').Router();
const areaController = require('../controllers/areaController');

routes.post('/add', areaController.addArea);
routes.get('/get', areaController.getAreas);
module.exports = routes;