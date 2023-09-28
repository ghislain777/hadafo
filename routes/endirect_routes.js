
const endirectRoutes = require('express').Router();
const endirectController = require('../controllers/endirect_controller');
endirectRoutes.get('/', async (req, res) =>  endirectController.getAll(req, res))
endirectRoutes.post('/', async (req, res) =>  endirectController.add(req, res))
endirectRoutes.put('/:id', async (req, res) =>  endirectController.update(req, res))
endirectRoutes.delete('/:id', async (req, res) =>  endirectController.delete(req, res))
endirectRoutes.get('/:id', async (req, res) =>  endirectController.getById(req, res))
endirectRoutes.post('/getby', async (req, res) =>  endirectController.getBy(req, res))
module.exports = endirectRoutes
