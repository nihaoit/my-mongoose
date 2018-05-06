const Boom = require('boom');
const PlaceModel = require('../models/place');

class Place {
  static async getPlace(request, h) {
    const res = await PlaceModel.aggregate([
      {
        $geoNear: {
          near: { type: 'Point', coordinates: [-73.99279, 40.719296] },
          distanceField: 'dist.calculated',
          maxDistance: 2,
          query: { category: 'Parks' },
          includeLocs: 'dist.location',
          num: 5,
          spherical: true
        }
      }
    ]);
    console.log(res);
    return res;
  }
}

module.exports = Place;
