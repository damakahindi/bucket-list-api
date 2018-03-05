const express = require('express');

const router = express.Router();
const User = require('../controllers/users');

router.route('/user')
  .post(User.create);

module.exports = router;
