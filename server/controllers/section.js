const Section = require('../models/section');

const SectionCtrl = {
  create(req, res) {
    if (!req.body.googleId) {
      return res.status(400).send({ error: 'googleId required' });
    }
    if (!req.body.title) {
      return res.status(400).send({ error: 'title required' });
    }

    const sec = new Section();
    sec.googleId = req.body.googleId;
    sec.title = req.body.title;

    if (req.body.description) {
      sec.description = req.body.description;
    }

    sec.save((error, section) => {
      if (error) {
        return res.status(500).send(error);
      }
      return res.status(201).send(section);
    });
  },
  get(req, res) {
    Section.findById(req.params.id, (error, section) => {
      if (error) {
        return res.status(500).send(error);
      }
      if (section) { return res.status(200).send(section); }
      return res.status(404).send(section);
    });
  },
  update(req, res) {
    Section.findById({ _id: req.params.id }, (error, section) => {
      if (error) {
        return res.status(500).send(error);
      }
      if (req.body.title) {
        section.title = req.body.title;
      }
      if (req.body.content) {
        section.description = req.body.description;
      }
      section.save((err) => {
        if (err) {
          return res.status(500).send(error);
        }
        return res.status(200).send(section);
      });
    });
  },
  getByUser(req, res) {
    Section.find({ googleId: req.params.user_id })
      .sort('-createdAt')
      .exec((error, section) => {
        if (error) {
          return res.status(500).send(error);
        }
        return res.status(200).send(section);
      });
  },
  delete(req, res) {
    Section.remove({ _id: req.params.id }, (error, section) => {
      if (error) {
        return res.status(500).send(error);
      }
      return res.status(200).send(section);
    });
  },
};


module.exports = SectionCtrl;
