const Bucket = require('../models/bucket');

const BucketCtrl = {
  create(req, res) {
    if (!req.body.googleId) {
      return res.status(400).send({ error: 'googleId required' });
    }
    if (!req.body.title) {
      return res.status(400).send({ error: 'title required' });
    }

    const bkt = new Bucket();
    bkt.googleId = req.body.googleId;
    bkt.title = req.body.title;

    if (req.body.description) {
      bkt.description = req.body.description;
    }
    if (req.body.url) {
      bkt.url = req.body.url;
    }
    if (req.body.sectionId) {
      bkt.sectionId = req.body.sectionId;
    }

    bkt.save((error, bucket) => {
      if (error) {
        return res.status(500).send(error);
      }
      return res.status(201).send(bucket);
    });
  },
  get(req, res) {
    Bucket.findById(req.params.id, (error, bucket) => {
      if (error) {
        return res.status(500).send(error);
      }
      if (bucket) { return res.status(200).send(bucket); }
      return res.status(404).send(bucket);
    });
  },
  update(req, res) {
    Bucket.findById({ _id: req.params.id }, (error, bucket) => {
      if (error) {
        return res.status(500).send(error);
      }
      if (req.body.title) {
        bucket.title = req.body.title;
      }
      if (req.body.description) {
        bucket.description = req.body.description;
      }
      bucket.save((err) => {
        if (err) {
          return res.status(500).send(error);
        }
        return res.status(200).send(bucket);
      });
    });
  },
  getByUser(req, res) {
    Bucket.find({ googleId: req.params.user_id })
      .sort('-createdAt')
      .exec((error, bucket) => {
        if (error) {
          return res.status(500).send(error);
        }
        return res.status(200).send(bucket);
      });
  },
  getBySection(req, res) {
    Bucket.find({ sectionId: req.params.user_id })
      .sort('-createdAt')
      .exec((error, bucket) => {
        if (error) {
          return res.status(500).send(error);
        }
        return res.status(200).send(bucket);
      });
  },
  delete(req, res) {
    Bucket.remove({ _id: req.params.id }, (error, bucket) => {
      if (error) {
        return res.status(500).send(error);
      }
      return res.status(200).send(bucket);
    });
  },
};


module.exports = BucketCtrl;
