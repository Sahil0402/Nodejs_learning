const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../util/path');

router.post('/user', (req, res, next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
});


module.exports = router;