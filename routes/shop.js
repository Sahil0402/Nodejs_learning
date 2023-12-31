const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const adminData = require('./admin');
router.get('/', (req, res, next) => {
    res.render('shop', { prods: adminData.productsData, docTitle: "Shop 🏪"});
    // console.log(adminData.productsData)
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});
module.exports = router;