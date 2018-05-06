const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PointSchema = new Schema({
  coordinates: { type: [Number], index: '2dsphere' },
  type: { type: String, default: 'Point' }
});

const PlaceSchema = new Schema({
  name: String,
  location: PointSchema,
  category: String
});

const Place = mongoose.model('place', PlaceSchema);

module.exports = Place;
