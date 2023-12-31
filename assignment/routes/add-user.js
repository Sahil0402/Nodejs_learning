const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../util/path');

router.get('/add-user', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'add-users.html'));
});


module.exports = router;