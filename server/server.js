var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');


var app = express();

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
  })
})


app.listen(3000, () =>{
  console.log('Start on port 3000');
});

module.exports = {app};
