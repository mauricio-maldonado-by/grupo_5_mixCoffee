///products (GET)

const { append } = require("express/lib/response");
const fs=require('fs');
//Listado de productos
router.get("/products", (req, res) => {
    res.render("products")
});

const controller = {
    fs(): (req, res) => { res.render('products')}
};

router.get("/products", controller.todos);

append.get("/products", (req, res) => { res.render('products')});

fs.writeFile('./archivo1.txt', 'línea 1\nLínea 2', error => {
    if (error)
      console.log(error);
    else
      console.log('El archivo fue creado');
  });
  
  console.log('última línea del programa');
  

//2. /products/create (GET)
//Formulario de creación de productos
//3. /products/:id (GET)
//Detalle de un producto particular
//4. /products (POST)
//Acción de creación (a donde se envía el formulario)
//5/. /products/:id/edit (GET)
//Formulario de edición de productos
//6//. /products/:id (PUT)
//Acción de edición (a donde se envía el formulario):
//7. /products/:id (DELETE)
//Acción de borrado
//Entregable: sección funcional con listado, detalle