const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: String,
  age: Number
});

PersonSchema.methods.sayHello = function() {
  console.log('Hello nihaoit!');
};

const Person = mongoose.model('person', PersonSchema);

module.exports = Person;
