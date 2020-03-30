const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const therapistSchema = new Schema({
  therapist: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Therapist = mongoose.model('Therapist', therapistSchema);

module.exports = Therapist;