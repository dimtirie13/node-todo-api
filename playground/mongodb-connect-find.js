
const {MongoClient, ObjectID} = require('mongodb'); // same code as above

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => { //could be heroku url or AWS
  if (err) {
    return console.log('Unable to Connect to MongoDB Server');//return stop function from continuing
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp')


  // QUERY arguments inside find({completed: false})
  // db.collection('Todos').find({
  //   _id: new ObjectID('5bbe1bb8d714bf208c0b5df3')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

    db.collection('Users').find({name: 'James'}).toArray().then((users) =>{
      console.log('Users');
      console.log(JSON.stringify(users, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch User(s)', err);
   });
  //client.close();
});
