const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const exp = require('constants');
const products = []
router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {docTitle:"Add product 📦"});
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    console.log(products);
    res.redirect('/');
});

exports.routes = router;
exports.productsData = products;