const path = require('path');
const fs=require('fs');
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
        res.render(path.join(__dirname, '../views/login.ejs'));
    },
    registro: (req, res) => {  
        res.render('register', products);
    },
    carrito2:(req,res)=>{
        let prod = [
            'Producto 1',
            'Producto 2',
            'Producto 3',
            'Producto 4',
        ]
        res.render('carrito2', {'prod': prod})
    }

};

module.exports = controller;