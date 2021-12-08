const express = require('express');
const path = require('path');


const publicFolderPath = path.resolve(__dirname,'./public');
const app = express();
app.use(express.static(publicFolderPath));

app.listen(process.env.PORT || '3000', function(){
    console.log("Servidor iniciado en el puerto 3000")
});


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/home.html')
});