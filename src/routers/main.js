const express = require('express');
const path = require('path');
const publicFolderPath = path.resolve(__dirname, './public');
const mainController = require('../controllers/mainController');
const productsController = require('../controllers/productsController');
const router = express.Router();
 
//router.get('/search', mainController.search); 

router.use(express.static(publicFolderPath));
router.get('/', mainController.main);
router.get ('/home', mainController.main);
router.get ('/index', productsController.index);
router.get('/carrito', mainController.carrito);
//router.get('/detail', productsController.detalle);
router.get('/login', mainController.login);
router.get('/register', mainController.registro);

module.exports = router;