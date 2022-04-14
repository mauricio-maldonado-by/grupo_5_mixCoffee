const path = require('path');
const fs=require('fs');
const {validationResult} = require('express-validator');
const { name } = require('ejs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



const controller = {
   
    main: (req, res) => {  
        if (req.session.name) {
            let data = req.session
            return res.render('home', {data});
        }
        res.render('home', products);
    },
    carrito: (req, res) => {  
        let prod2 = [
            'Producto 1',
            'Producto 2',
            'Producto 3',
            'Producto 4',
            'Producto 4',
            'Producto 4',
        ]
        res.render('productCart', {'prod2': prod2});
    },
     login: (req, res) => {  
        
        res.render(path.join(__dirname, '../views/login.ejs'));
        check('name').inLenght({min: 1}).withMessage('Debe ingresar un nombre');
        check('name').inLenght({min: 1}).withMessage('Debe ingresar un nombre');
        
    },
    registro: (req, res) => {  
        res.sendFile(path.join(__dirname, '../views/register.ejs'));
    },

    create: (req, res) => {
		res.render('/register')
	},

	newRecord:  (req, res) => {
        const {body} = req;
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('/register', {errors: errors.array() });
        }else {
            req.session.firstName = req.body.firstName;
            req.session.lastName = req.body.lastName;
            req.session.email = req.body.email;
            req.session.psw = req.body.psw;
            req.session.psw_repeat = req.body.psw_repeat;
            req.session.category = req.body.category;
            if (req.body.remember){
                res.cookie('record', req.body, {maxAge: 60 * 1000})
            }
            let newUser = {
		 	    id: users[users.length - 1].id + 1,
		 	    ...req.body,
/* 		 	    image: req.file.filename
 */            }
        }
		users.push(newUser);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
		return res.redirect('/login/');
/* 
            let user = req.body;
            userId = userModel.create(user);
            res.redirect('/');np
 */       
	},

};

module.exports = controller;