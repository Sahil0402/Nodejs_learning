const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const homeRouter = require('./routes/home');
const addUserRouter = require('./routes/add-user');
const userRouter = require('./routes/user');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(homeRouter);
app.use(addUserRouter);
app.use(userRouter);

app.listen(3000, () => { console.log('Running at 3000!') });