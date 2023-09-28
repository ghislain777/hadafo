
const animateuremissionRoutes = require('express').Router();
const animateuremissionController = require('../controllers/animateuremission_controller');
animateuremissionRoutes.get('/', async (req, res) =>  animateuremissionController.getAll(req, res))
animateuremissionRoutes.post('/', async (req, res) =>  animateuremissionController.add(req, res))
animateuremissionRoutes.put('/:id', async (req, res) =>  animateuremissionController.update(req, res))
animateuremissionRoutes.delete('/:id', async (req, res) =>  animateuremissionController.delete(req, res))
animateuremissionRoutes.get('/:id', async (req, res) =>  animateuremissionController.getById(req, res))
animateuremissionRoutes.post('/getby', async (req, res) =>  animateuremissionController.getBy(req, res))
module.exports = animateuremissionRoutes
