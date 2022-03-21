const express = require('express');
const path = require('path');
const publicFolderPath = path.resolve(__dirname, './public');
const app = express();
const mainRouter = require('./src/routers/main'); 
const productsRouter = require('./src/routers/products');
const methodOverride =  require('method-override'); 


app.use(express.static(publicFolderPath));
app.use('/', mainRouter);
app.use('/products', productsRouter);

app.use(methodOverride('_method')); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.listen(process.env.PORT || '3000', function(){
    console.log("Servidor iniciado en el puerto 3000")
});
