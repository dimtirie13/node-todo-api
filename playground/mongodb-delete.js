
const {MongoClient, ObjectID} = require('mongodb'); // same code as above

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => { //could be heroku url or AWS
  if (err) {
    return console.log('Unable to Connect to MongoDB Server');//return stop function from continuing
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp')

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });
  //
  // //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete it will only target the first ones it sees
  //db.collection('Todos').findOneAndDelete({completed: false}).then((result) => console.log(result));

  // delete all 'James'
  //db.collection('Users').deleteMany({name: 'James'}).then((result) => console.log(result));

  // delete Jen by ObjectID
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID ('5bbe34266d843a2d5866d17d')
  }).then((result) => console.log(result));

  //client.close();
});
