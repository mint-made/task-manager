const express = require('express');
const Task = require('../models/task');
const { ObjectId } = require('mongodb');

const router = new express.Router();

router.post('/tasks', async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id;

  if (!ObjectId.isValid(_id)) {
    return res.status(404).send({ error: 'Invalid ID' });
  }

  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send({ error: 'No task found' });
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch('/tasks/:id', async (req, res) => {
  const _id = req.params.id;
  const allowedUpdates = ['description', 'completed'];
  const updates = Object.keys(req.body);
  const isValidOpperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOpperation) {
    return res.status(400).send({ error: 'update not permitted' });
  }

  if (!ObjectId.isValid(_id)) {
    return res.status(404).send({ error: 'Invalid ID' });
  }

  try {
    const task = await Task.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send({ error: 'No task found' });
    }
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/tasks/:id', async (req, res) => {
  const _id = req.params.id;

  if (!ObjectId.isValid(_id)) {
    res.status(404).send({ error: 'Invalid ID' });
  }

  try {
    const task = await Task.findByIdAndDelete(_id);
    if (!task) {
      res.status(404).send({ error: 'No task found' });
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
