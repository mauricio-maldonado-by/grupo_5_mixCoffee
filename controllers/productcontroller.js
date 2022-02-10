///products (GET)

const { append } = require("express/lib/response");

//Listado de productos
router.get("/products", (req, res) => {
    res.render("products")
});

const controller = {
    todos: (req, res) => { res.render('products')}
};

router.get("/products", controller.todos);

append.get("/products", (req, res) => { res.render('products')});

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