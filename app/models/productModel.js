module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        region: {
            type: Sequelize.STRING
        },
        item_description: {
            type: Sequelize.STRING
        },
        sku_in_kgs: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        pellet_size: {
            type: Sequelize.STRING
        },
        packing: {
            type: Sequelize.STRING
        },
        product_price_per_pellet: {
            type: Sequelize.INTEGER
        },
        product_price_per_mash: {
            type: Sequelize.INTEGER
        }
    });
    return Product;
}