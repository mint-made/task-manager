require('../src/db/mongoose');
const Task = require('../src/models/task');

const _id = '5fccf9a2ac28ee676e57817a';

Task.findByIdAndDelete(_id)
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
