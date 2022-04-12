const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		res.render('index', {
			products,
			toThousand
		})
	},

	detalle: (req, res) => {
		const id = req.params.id
		let product = products.find(product => product.id == id)
		res.render('productDetail', {
			product,
			toThousand
		})
	},

	detalle2: (req, res) => {
		res.render('detalleProducto', {
			products,
			toThousand
		})
	},

	create: (req, res) => {
		res.render('addProduct')
	},

	store:  (req, res) => {
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

	edit: (req, res) => {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		console.log(productToEdit)
		res.render('editProduct', {productToEdit})
	},
	
	update: (req, res) => {
		let id = req.params.id;
    let idx = products.findIndex(product => product.id == id)
		console.log("sadfasd",req.body)
		console.log(products.imagen)
		console.log(req.file.filename)
		products[idx] = {
			id, 
			...req.body,
			imagen:  products.imagen
		};
		if (products.imagen == undefined){
			res.redirect('/products')
		}
    
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.redirect('/products');
    
	},

	destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
    products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.redirect('/products');
	}

};
module.exports = controller;