
const programmationRoutes = require('express').Router();
const programmationController = require('../controllers/programmation_controller');
programmationRoutes.get('/', async (req, res) =>  programmationController.getAll(req, res))
programmationRoutes.post('/', async (req, res) =>  programmationController.add(req, res))
programmationRoutes.put('/:id', async (req, res) =>  programmationController.update(req, res))
programmationRoutes.delete('/:id', async (req, res) =>  programmationController.delete(req, res))
programmationRoutes.get('/:id', async (req, res) =>  programmationController.getById(req, res))
programmationRoutes.post('/getby', async (req, res) =>  programmationController.getBy(req, res))
module.exports = programmationRoutes
