const express = require('express');
const router = express.Router();

//menampung data inputan user
const users = [];

// /users => get
router.get('/users', (req, res, next) => {
  // read/render ejs file
  res.render('users', {
    pageTitle: 'User Data Page',
  });
});

// /users => post
router.post('/users', (req, res, next) => {
  users.push({ nama: req.body.nama });
  res.redirect('/');
});

exports.router = router;
exports.users = users;
