const express = require('express');
const path = require('path');
const publicFolderPath = path.resolve(__dirname, './public');
const mainController = require('../controllers/mainController');
const router = express.Router();

 
//router.get('/search', mainController.search); 


router.use(express.static(publicFolderPath));
router.get('/', mainController.index);
router.get ('/home', mainController.main);
router.get ('/index', mainController.index);
router.get('/productcart', mainController.carrito);
router.get('/productdetail', mainController.detalle);
router.get('/login', mainController.login);
router.get('/register', mainController.registro);

module.exports = router;