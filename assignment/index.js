const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const homeRoute = require('./route/home');
const userRoute = require('./route/users');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(homeRoute.routes);
app.use(userRoute.routes);

app.listen(3000, () => { console.log("Server started on 3000") });