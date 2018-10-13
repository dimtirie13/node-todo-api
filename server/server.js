var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');


var app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json()); // middlewear, send json to express app

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e); // send error to user
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos}) //create object to allow me to add properties later on
  }, (e) => {
      res.status(400).send(e);
  });
});

// GET /todos/id
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
   Todo.findById(id).then((todo) => {
      if(!todo)  {
        return res.status(404).send();
      }
       res.send({todo});
      }).catch(() => res.status(404).send());
});
app.listen(port, () =>{
  console.log(`Start on port ${port}`);
});

module.exports = {app};
