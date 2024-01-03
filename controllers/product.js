const Product = require("../models/Product");
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { docTitle: "Add product 📦" });
}

exports.postAddProduct = (req, res, next) => {
    // products.push({ title: req.body.title });
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.getAllProducts((products) => {
        res.render('shop', { prods: products, docTitle: "Shop 🏪" });
    });
}
