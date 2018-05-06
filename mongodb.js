const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.once('open', async () => {
  console.log('database connect successed!');
});
db.on('error', () => {
  console.log(err);
});
console.log('Done!');

module.export = db;
