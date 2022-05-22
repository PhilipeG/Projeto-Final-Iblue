const express = require('express');
const routes = express.Router();

const opController = require('./controllers/opController');

// Rotas
routes.post('/soma', opController.soma);
routes.post('/subtracao', opController.subtracao);
routes.post('/multiplicacao', opController.multiplicacao);
routes.post('/divisao', opController.divisao);
routes.post('/raizQuadrada', opController.raizQuadrada);
routes.post('/porcentagem', opController.porcentagem);

module.exports = routes;