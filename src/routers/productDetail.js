const express = require('express');
const path = require('path');
const publicFolderPath = path.resolve(__dirname,'./public');
const router = express.Router();
const productsController = require('../controllers/productsController');

/*
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/images/products'))
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
}) 
*/


router.use(express.static(publicFolderPath));

router.get('/detalle',(req,res)=>{
    res.sendFile(__dirname + '/views/productdetail.html')
});


// ************ Controller Require ************


// /products
/*** GET ALL PRODUCTS ***/ 

// /
// /productos
// /
// /productos/create

// REST -> REst compliant
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create);

var upload = multer({ storage: storage })
router.post('/', upload.single('imagen'), productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', productsController.update); 

// put -> modificar tooooodo el recurso
// patch -> solo modificas una parte del recurso


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 






module.exports = router;