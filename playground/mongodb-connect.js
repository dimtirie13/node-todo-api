// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // same code as above

var obj = new ObjectID();
console.log(obj);

// var user = {name: 'Andrew', age: 21}; // es6 desctructuring
// var {name} =user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to Connect to MongoDB Server');//return stop function from continuing
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   // _id: 123,
  //   name: 'James',
  //   age: 25,
  //   location: 'Montreal'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert users', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp()); // print timestamp
  // })

  client.close();
}); //could be heroku url or AWS
