const User = require('../models/user');

const UserCtrl = {
  create(req, res) {
    if (!req.body.googleId) {
      return res.status(400).send({ error: 'googleId required' });
    }

    const usr = new User();
    usr.googleId = req.body.googleId;

    usr.save((error, user) => {
      if (error) {
        if (error.code === 11000) {
          user = error.getOperation();
          user.doesExist = true;
          return res.status(200).send(user);
        }
        return res.status(500).send(error);
      }
      user.doesExist = false;
      return res.status(201).send(user);
    });
  },
};


module.exports = UserCtrl;
