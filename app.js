const express = require('express');
const path = require('path');
const publicFolderPath = path.resolve(__dirname, './public');
const app = express();
const mainRouter = require('./src/routers/main'); 
const productsRouter = require('./src/routers/products');

app.use(express.static(publicFolderPath));
app.use('/', mainRouter);
app.use('/products', productsRouter);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.listen(process.env.PORT || '3000', function(){
    console.log("Servidor iniciado en el puerto 3000")
});

/*
// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE


*/

//module.exports = app;