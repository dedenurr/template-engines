const express = require('express');
const bodyParser = require('body-parser');
const port = 3001;
const app = express();

//setting template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//call router
const indexRouter = require('./routes/index');
const userData = require('./routes/users');

// use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// use router
app.use(userData.router);
app.use(indexRouter);
app.use((req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'page not found',
  });
});

app.listen(port, () => {
  console.log(`the server listen on http://localhost:${port}`);
});
