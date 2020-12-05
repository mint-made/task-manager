const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const { ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/users', (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((error) => {
      res.status(500).send();
    });
});

app.get('/users/:id', (req, res) => {
  const _id = req.params.id; // Access the id provided

  if (!ObjectId.isValid(_id)) {
    return res.status(404).send();
  }

  User.findById(_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post('/tasks', (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/tasks', (req, res) => {
  Task.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/tasks/:id', (req, res) => {
  const _id = req.params.id;

  if (!ObjectId.isValid(_id)) {
    console.log('Not valid id');
    return res.status(404).send();
  }

  Task.findById(_id)
    .then((users) => {
      if (!users) {
        console.log('no task found');
        return res.status(404).send();
      }
      res.send(users);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
