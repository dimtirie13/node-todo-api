var express = require('express');
var bodyparser = require('body-parser');


var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');


var app = express();

app.use(bodyparser.json()); // middlewear, send json to express app

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




app.listen(3000, () =>{
  console.log('Start on port 3000');
})
