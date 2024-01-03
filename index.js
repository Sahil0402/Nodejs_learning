const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRouter = require('./routes/shop');
const adminRouter = require('./routes/admin');

const errorController = require('./controllers/error');
// Express automatically includes body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use('/admin', adminRouter.routes);
app.use(shopRouter);

app.use(errorController.get404Page);

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
