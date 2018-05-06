const db = require('./mongodb');

const Person = require('./models/person');
const Place = require('./models/place');

const p = new Person();
p.sayHello();

p.name = 'luokai';
p.age = 25;

/* p.save().then(res => {
  console.log(res);
}); */
const app = async () => {
  const r = await p.save();
  console.log(r);
};

const app2 = async () => {
  const res = await Place.aggregate([
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
};

app2();
