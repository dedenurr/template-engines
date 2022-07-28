const path = require('path');

const express = require('express');

const usernData = require('./users');

const router = express.Router();

router.get('/', (req, res, next) => {
  const users = usernData.users;
  res.render('index', {
    userss: users,
    pageTitle: 'Shop Zahra',
  });
});

module.exports = router;
