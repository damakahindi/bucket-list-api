const express = require('express');

const router = express.Router();
const Bucket = require('../controllers/bucket');

router.route('/bucket')
  .post(Bucket.create);

router.route('/bucket/:id')
  .get(Bucket.get)
  .put(Bucket.update)
  .delete(Bucket.delete);

router.route('/user/:user_id/bucket')
  .get(Bucket.getByUser);

router.route('/section/:section_id/bucket')
  .get(Bucket.getByUser);

module.exports = router;
