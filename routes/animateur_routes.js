
const animateurRoutes = require('express').Router();
const animateurController = require('../controllers/animateur_controller');
animateurRoutes.get('/', async (req, res) =>  animateurController.getAll(req, res))
animateurRoutes.post('/', async (req, res) =>  animateurController.add(req, res))
animateurRoutes.put('/:id', async (req, res) =>  animateurController.update(req, res))
animateurRoutes.delete('/:id', async (req, res) =>  animateurController.delete(req, res))
animateurRoutes.get('/:id', async (req, res) =>  animateurController.getById(req, res))
animateurRoutes.post('/getby', async (req, res) =>  animateurController.getBy(req, res))
module.exports = animateurRoutes
