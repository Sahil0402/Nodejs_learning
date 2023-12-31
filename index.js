const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const shopRouter = require('./routes/shop');
const adminRouter = require('./routes/admin');
// Express automatically includes body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use('/admin', adminRouter.routes);
app.use(shopRouter);

app.use((req, res, next)=>{
    res.status(404).send("<h1>Page not found!!</h1>");
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
