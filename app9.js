const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.once('open', async () => {
  console.log('database connect successed!');
  const Schema = mongoose.Schema;
  const PersonSchema = new Schema({
    name: String
  });

  PersonSchema.methods.sayHello = function() {
    console.log('hello world!');
  };

  const Person = mongoose.model('person', PersonSchema);

  const p = new Person();
  p.sayHello();
  p.name = 'nihaoit';
  /*  p.save().then(res => {
    console.log(res);
  }); */
  const r = await p.save();
  console.log(r);
});
db.on('error', () => {
  console.log(err);
});
console.log('Done!');
