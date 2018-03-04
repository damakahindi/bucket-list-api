const express = require('express');

const router = express.Router();
const Section = require('../controllers/section');

router.route('/section')
  .post(Section.create);

module.exports = router;
