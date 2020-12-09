const express = require('express');
const User = require('../models/user');
const { ObjectId } = require('mongodb');

const router = new express.Router();
router.get('/test', (req, res) => {
  res.send('This is from my other router');
});

router.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get('/users/:id', async (req, res) => {
  const _id = req.params.id; // Access the id provided

  if (!ObjectId.isValid(_id)) {
    return res.status(404).send({ error: 'Invalid ID' });
  }

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send({ error: 'No user found' });
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch('/users/:id', async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  const isValidOpperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOpperation) {
    return res.status(400).send({ error: 'Update not permitted' });
  }

  if (!ObjectId.isValid(_id)) {
    console.log('invalid id');
    return res.status(404).send({ error: 'Invalid ID' });
  }

  try {
    const user = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send({ error: 'No user found' });
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/users/:id', async (req, res) => {
  const _id = req.params.id;

  if (!ObjectId.isValid(_id)) {
    res.status(404).send({ error: 'Invalid ID' });
  }

  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return res.status(404).send({ error: 'No user found' });
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
