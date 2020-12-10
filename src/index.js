const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/tasks');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res
//     .status(503)
//     .send('The site is under maintainance, please try back again shortly');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
  // const task = await Task.findById('5fd201513270b162e1a8db0e');
  // await task.populate('owner').execPopulate();
  // console.log(task.owner);

  const user = await User.findById('5fd200963491c561b5e481ca');
  await user.populate('tasks').execPopulate();
  console.log(user.tasks);
};

main();
