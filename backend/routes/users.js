const router = require('express').Router();
let User = require('../models/user.model');


// handles incoming http get requests
router.route('/').get((req, res) => {
  // find is a mongoose method
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// handles post requests
router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;