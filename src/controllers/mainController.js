const path = require('path');
const fs=require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
   
    main: (req, res) => {  
        res.render('home', products);
    },
    carrito: (req, res) => {  
        res.render('productCart', products);
    },
     login: (req, res) => {  
        res.sendFile(path.join(__dirname, '../views/login.html'));
    },
    registro: (req, res) => {  
        res.sendFile(path.join(__dirname, '../views/register.html'));
    },

};

module.exports = controller;