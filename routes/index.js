const express = require('express');
const userData = require('./users');
const router = express.Router();

router.get('/', (req, res, next) => {
  const users = userData.users;
  res.render('index', {
    userss: users,
    pageTitle: 'Add - User',
  });
});
module.exports = router;
