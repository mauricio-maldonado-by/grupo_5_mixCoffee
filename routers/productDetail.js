const express = require('express');
const path = require('path');
const publicFolderPath = path.resolve(__dirname,'./public');
const router = express.Router();

router.use(express.static(publicFolderPath));

router.get('/detalle',(req,res)=>{
    res.sendFile(__dirname + '/views/productdetail.html')
});

module.exports = router;