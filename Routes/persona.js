const express = require('express');
const router = express.Router();
const personaController = require('../Controllers/persona');

//Rutas de mis controllers
router.post('/agregarPersona', personaController.postAgregarPersona);

router.get('/consultarPersona', personaController.getConsultarPersona);

module.exports = router;