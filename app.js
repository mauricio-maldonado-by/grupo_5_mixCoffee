const express = require('express');
const path = require('path');
const publicFolderPath = path.resolve(__dirname, './public');
const app = express();
const mainRouter = require('./src/routers/main'); 
const productsRouter = require('./src/routers/products');
const methodOverride = require('method-override'); 
const { Session } = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(methodOverride('_method'));
app.use(express.static(publicFolderPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', mainRouter);
app.use('/products', productsRouter);

app.listen(process.env.PORT || '3000', function(){
    console.log("Servidor iniciado en el puerto 3000")
});
