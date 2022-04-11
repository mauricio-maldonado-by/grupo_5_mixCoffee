const path = require('path');
const fs=require('fs');
const {validationResult} = require('express-validator');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
   
    main: (req, res) => {  

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
        res.render('login', login);
        res.render(path.join(__dirname, '../views/login.ejs'));
    },
    registro: (req, res) => {  
        res.sendFile(path.join(__dirname, '../views/register.html'));
    },
    carrito2:(req,res)=>{
        let prod = [
            'Producto 1',
            'Producto 2',
            'Producto 3',
            'Producto 4',
        ]
        res.render('carrito2', {'prod': prod})
    },

    create: (req, res) => {
		res.render('addProduct')
	},

	store:  (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let user = req.body;
            userId = userModel.create(user);
            res.redirect('/users/detail/' + userId);np
        } else {
            res.render('users/create', {errors: errors.array() });
        }

        

     const {body} = req;
     let newProd = {
		 	id: products[products.length - 1].id + 1,
		 	...req.body,
		 	image: req.file.filename
		 };
		 products.push(newProd);
		 fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		 return res.redirect('/products/detail/' + newProd.id);
	},





};

module.exports = controller;