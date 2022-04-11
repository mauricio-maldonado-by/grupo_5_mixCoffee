const express = require('express');
const path = require('path');
const publicFolderPath = path.resolve(__dirname, './public');
const mainController = require('../controllers/mainController');
const router = express.Router();
const {body} = require('express-validator');
const {check} = require('express-validator');

// validaciones
const validations = [
    body('name').notEmpty().withMessage('El campo no puede estar vacío!').bail(),
   
    body('lasName').notEmpty().withMessage('El campo no puede estar vacío!').bail(),
   // .isLength({ min: 5 }).withMessage('El nombre debe ser más largo'),
    
    body('email')
    .notEmpty().withMessage('Debes completar el email').bail()
    .isEmail().withMessage('Debes completar un email válido'),
    body('password')
    .notEmpty().withMessage('Debes completar la contraseña').bail()
    .isLength({ min: 8 }).withMessage('La contraseña debe ser más larga')
   ]


const validateRegister = [
    check('name')
    .notEmpty().withMessage('Debes completar el nombre').bail()
    .isLength({ min: 5 }).withMessage('El nombre debe ser más largo'),
    check('email')
    .notEmpty().withMessage('Debes completar el email').bail()
    .isEmail().withMessage('Debes completar un email válido'),
    check('password')
    .notEmpty().withMessage('Debes completar la contraseña').bail()
    .isLength({ min: 8 }).withMessage('La contraseña debe ser más larga')
   ]
   





router.use(express.static(publicFolderPath));
router.get('/', mainController.main);
router.get ('/home', mainController.main);
router.get('/carrito', mainController.carrito);
router.get('/login', mainController.login);
//router.post('/login', validation, mainController.login);

router.get('/register', mainController.registro);
router.get('/carrito2', mainController.carrito2);

module.exports = router;