const express = require('express');

const router = express.Router();

const users = [];

// /users => GET
router.get('/users', (req, res, next) => {
  res.render('users', {
    pageTitle: 'Add User',
    path: '/users',
  });
});

// /users => POST
router.post('/users', (req, res, next) => {
  users.push({ nama: req.body.nama });
  res.redirect('/');
});

exports.routes = router;
exports.users = users;
