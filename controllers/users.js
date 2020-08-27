const db = require('../models');

const show = (req, res) => {
  db.User.findById(req.params.username, (err, foundUser) => {
    if (err) console.log('Error in users#show:', err);

    res.status(200).send(foundUser);
  });
};

const update = (req, res) => {
  db.User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => {
    if (err) console.log('Error in users#update:', err);

    if (!updatedUser) {
      res.status(400).json({message: `Could not find the User with id ${req.params.id}`});
    }

    res.json(updatedUser);
  });
};

const destroy = (req, res) => {
  db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    if (err) console.log('Error in user#destroy:', err);

    res.status(200).json(deletedUser);
  });
};


module.exports = {
    show,
    update,
    destroy,
};