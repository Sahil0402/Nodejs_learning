const express = require('express');
const router = express.Router();
const users = require('./users').users;

router.get("/", (req, res, next) => {
    // res.sendFile(path.join(root, 'views', 'home.html'));
    res.render('home.pug', { docTitle: "Home", users: users });
});
exports.routes = router; 