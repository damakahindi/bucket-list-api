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
};


module.exports = SectionCtrl;
