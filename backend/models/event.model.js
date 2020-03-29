const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// deleting schema every time we run the server
//delete mongoose.connection.models['Event'];

const eventSchema = new Schema({
  username: { type: String, required: true },
  feelingDesc: { type: String, required: true },
  scale: { type: Number, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;