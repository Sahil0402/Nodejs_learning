const fs = require('fs');
const path = require('path');
const rootPath = require('../util/path');

module.exports = class Product {
    constructor(t = "product-a") {
        this.title = t;
    }

    save() {
        const p = path.join(rootPath, 'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                if (fileContent) {
                    products = JSON.parse(fileContent);
                }
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err) {
                    console.error(err);
                }
            });
        });
    }

    static getAllProducts(cb) {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            } else {
                let products = [];
                if (fileContent) {
                    products = JSON.parse(fileContent);
                }
                cb(products);
            }
        });
    }
};
//