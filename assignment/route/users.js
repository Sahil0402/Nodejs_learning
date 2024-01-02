const express = require('express');
const router = express.Router();
const userArray = []

router.get("/add-user", (req, res, next) => {
    // res.send("<h1>User</h1>");
    res.render('user.pug', { docTitle: "Add user" });
});

router.post("/add-user", (req, res, next)=>{
    console.log(req.body.name);
    userArray.push({name: req.body.name});
    res.redirect('/');
});
exports.routes = router; 
exports.users = userArray;