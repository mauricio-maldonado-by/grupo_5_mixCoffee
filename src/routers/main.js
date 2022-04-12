const express = require('express');
const path = require('path');
const publicFolderPath = path.resolve(__dirname, './public');
const mainController = require('../controllers/mainController');
const router = express.Router();
 
router.use(express.static(publicFolderPath));
router.get('/', mainController.main);
router.get ('/home', mainController.main);
router.get('/carrito', mainController.carrito);
router.get('/login', mainController.login);
router.get('/register', mainController.registro);
router.get('/carrito2', mainController.carrito2);

module.exports = router;