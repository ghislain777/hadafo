
const planningRoutes = require('express').Router();
const planningController = require('../controllers/planning_controller');
planningRoutes.get('/', async (req, res) =>  planningController.getAll(req, res))
planningRoutes.post('/', async (req, res) =>  planningController.add(req, res))
planningRoutes.put('/:id', async (req, res) =>  planningController.update(req, res))
planningRoutes.delete('/:id', async (req, res) =>  planningController.delete(req, res))
planningRoutes.get('/:id', async (req, res) =>  planningController.getById(req, res))
planningRoutes.post('/getby', async (req, res) =>  planningController.getBy(req, res))
module.exports = planningRoutes
