const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');

// var id = '5bc003d23cc44e36d057d91811';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not Valid...');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {ObjectId("5bbe96f71abd714c5467cec5")
//     return console.log('Id not found...');
//   }
//   console.log('Todo By id', todo);
// }).catch((e) => console.log(e));

var userId = '5bbe96f71abd714c5467cec5';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User not Found...');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
