
const chaineRoutes = require('express').Router();
const chaineController = require('../controllers/chaine_controller');
chaineRoutes.get('/', async (req, res) =>  chaineController.getAll(req, res))
chaineRoutes.get('/bootstrap', async (req, res) =>  chaineController.bootstrap(req, res))
chaineRoutes.post('/', async (req, res) =>  chaineController.add(req, res))
chaineRoutes.put('/:id', async (req, res) =>  chaineController.update(req, res))
chaineRoutes.delete('/:id', async (req, res) =>  chaineController.delete(req, res))
chaineRoutes.get('/:id', async (req, res) =>  chaineController.getById(req, res))
chaineRoutes.post('/getby', async (req, res) =>  chaineController.getBy(req, res))
module.exports = chaineRoutes
