const db = require('../models');
const Product = db.products;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // create products
    const product = {
        id: req.body.id,
        region: req.body.region,
        item_description: req.body.item_description,
        sku_in_kgs: req.body.sku_in_kgs,
        pellet_size: req.body.pellet_size,
        packing: req.body.packing,
        product_price_per_pellet: req.body.product_price_per_pellet,
        product_price_per_mash: req.body.product_price_per_mash
    };

    Product.create(product)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured while creating a product"
        })
    })
}

exports.findOne = (req, res) => {
   const id = req.params.id;
    Product.findByPk(id)
    .then(data => {
        if(data){
            res.send(data);
        } else{
            res.status(404).send({
                message: "product with the given id not found"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error occured while retrieving a product with id=${id}`
        })
    })
}

exports.update = (req, res) => {
    const id = req.params.id;

    Product.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if(num >= 1){
            res.send({
                message: "product was updated successfully."
            })
        }else{
            res.send({
                message: "To update any product req.body should not be empty"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error in updating product with id=${id}`
        })
    })
}