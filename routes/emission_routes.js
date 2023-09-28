
const emissionRoutes = require('express').Router();
const emissionController = require('../controllers/emission_controller');
emissionRoutes.get('/', async (req, res) =>  emissionController.getAll(req, res))
emissionRoutes.post('/', async (req, res) =>  emissionController.add(req, res))
emissionRoutes.put('/:id', async (req, res) =>  emissionController.update(req, res))
emissionRoutes.delete('/:id', async (req, res) =>  emissionController.delete(req, res))
emissionRoutes.get('/:id', async (req, res) =>  emissionController.getById(req, res))
emissionRoutes.post('/getby', async (req, res) =>  emissionController.getBy(req, res))
module.exports = emissionRoutes
