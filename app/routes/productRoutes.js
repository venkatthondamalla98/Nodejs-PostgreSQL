module.exports = app => {
    const products = require('../controllers/productController')

    const router = require('express').Router();

    // create a new product
    router.post('/', products.create);

    // retrieve product with id
    router.get('/:id', products.findOne)

    // update a product with id
    router.put('/:id', products.update)

    app.use('/api/products', router)
}