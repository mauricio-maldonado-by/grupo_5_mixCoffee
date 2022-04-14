const express = require('express');
const path = require('path');
const publicFolderPath = path.resolve(__dirname, './public');
const mainController = require('../controllers/mainController');
const router = express.Router();
const {body} = require('express-validator');
const {check} = require('express-validator');



     /*  check('psw-repeat').matches({isStrongPassword: psw}).withMessage('Contraseña no es igual') */

 
router.use(express.static(publicFolderPath));
router.get('/', mainController.main);
router.get ('/home', mainController.main);
router.get('/carrito', mainController.carrito);
router.get('/login', mainController.login);

router.get('/carrito2', mainController.carrito2);

//router.post('/login', validation, mainController.login);


router.get('/register', mainController.create);
router.post('/register', (check('firstName').notEmpty().withMessage('Debes completar el nombre')
.isLength({min: 5}).withMessage('Debe ingresar un nombre más largo').bail(),

check('lastName').notEmpty().withMessage('Debes completar el nombre').bail()
.isLength({min: 5}).withMessage('Debe ingresar un nombre más largo').bail(),

check('email')
.notEmpty().withMessage('Debes completar el email').bail()
.isEmail().withMessage('Debes ingresar un email válido').bail(),

check('psw').isStrongPassword({minLength:8, minUpperCase:1, minNumbers:1, minSymbols:1, minLowerCase:1 })
.withMessage('Password debe contener al menos 8 caracteres con mayúsculas, minúsculas, numeros y al menos un carácter especial')
.bail()
), mainController.newRecord);

module.exports = router;