const PlaceController = require('../controllers/place');

module.exports = [
  {
    method: 'GET',
    path: '/places',
    handler: PlaceController.getPlace
  }
];
