const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

//register view engine in app

app.set('view engine', 'ejs');
app.set('views', 'views');

const indexRoutes = require('./routes');
const userData = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(userData.routes);
app.use(indexRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(port, () => {
  console.log(`the server listen http://localhost:${port}`);
});
