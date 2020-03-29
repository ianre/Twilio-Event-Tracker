const router = require('express').Router();
// require the exercise model
//let Exercise = require('../models/exercise.model');


/*
const clientSchema = mongoose.Schema({
  ...
});

export default mongoose.model('client', clientSchema);
*/


let Event = require('../models/event.model');


// route get request
router.route('/').get((req, res) => {
  Event.find()
    .then(Event => res.json(Event))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*
  username: { type: String, required: true },
  feelingDesc: { type: String, required: true },
  scale: { type: Number, required: true },
  location: { type: Number, required: true },
  date: { type: Date, required: true },
  */

// route post request
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const feelingDesc = req.body.feelingDesc;
  const scale = Number(req.body.scale);
  const location = req.body.location;  
  const date = Date.parse(req.body.date);

  const newEvent = new Event({
    username,
    feelingDesc,
    scale,
    location,
    date,
  });


  newEvent.save()
  .then(() => res.json('Event added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Event.findById(req.params.id)
    .then(event => {

      /*
      event.username = req.body.username;
      event.description = req.body.description;
      event.duration = Number(req.body.duration);
      event.date = Date.parse(req.body.date);
      */
      event.username = req.body.username;
      event.feelingDesc = req.body.feelingDesc;
      event.scale = Number(req.body.scale);
      event.location = req.body.location;
      event.date = Date.parse(req.body.date);
  
      event.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;