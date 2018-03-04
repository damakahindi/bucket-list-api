const express = require('express');

const router = express.Router();
const Section = require('../controllers/section');

router.route('/section')
  .post(Section.create);

router.route('/section/:id')
  .get(Section.get)
  .put(Section.update)
  .delete(Section.delete);

router.route('/user/:user_id/sections')
  .get(Section.getByUser);

module.exports = router;
