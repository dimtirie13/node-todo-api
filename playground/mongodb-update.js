
const {MongoClient, ObjectID} = require('mongodb'); // same code as above

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => { //could be heroku url or AWS
  if (err) {
    return console.log('Unable to Connect to MongoDB Server');//return stop function from continuing
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bbe732c53bb8221b225d14b')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => console.log(result));

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bbe35ba82e66d3c98c0defe')
  }, {
    $set: {name: 'Dimitri'},
    $inc: {age: 1}
  }, {
    returnOriginal: false
  }).then((result) => console.log(result));


  //client.close();
});
