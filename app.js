const express = require('express');
const path = require('path');
const mainController = require('./controllers/mainController');
const publicFolderPath = path.resolve(__dirname, './public');
const app = express();
const routes = require('./routers/main');
app.set('view engine', 'ejs');
app.use(express.static(publicFolderPath));
app.use('/', routes);

app.listen(process.env.PORT || '3000', function(){
    console.log("Servidor iniciado en el puerto 3000")
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/home.html')
});

app.get('/detalle',(req,res)=>{
    res.sendFile(__dirname + '/views/productdetail.html')
});

app.get('/carrito',(req,res)=>{
    res.sendFile(__dirname + '/views/productcart.html')
});
