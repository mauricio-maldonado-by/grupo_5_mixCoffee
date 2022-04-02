const express = require('express');
const app = express();
const path = require('path');
const publicFolderPath = path.resolve(__dirname,'./public');
const router = express.Router();
const multer = require('multer');
const productsController = require('../controllers/productsController');
const methodOverride = require('method-override'); 
app.use(methodOverride('_method'));


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/img/'))
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  }) 

var upload = multer({ storage: storage })
router.post('/', upload.single('imagen'), productsController.store); 


router.use(express.static(publicFolderPath));
router.get('/', productsController.index); 
router.get('/detail/:id', productsController.detalle);

router.get('/create', upload.single('avatar'), productsController.create);
router.post('/', productsController.store);

router.get('/edit/:id', upload.single('imagen'), productsController.edit); 
router.put('/edit/:id', upload.single('imagen'), productsController.update);

router.delete('/delete/:id', productsController.destroy); 

router.get('/detalle', productsController.detalle2);

module.exports = router;