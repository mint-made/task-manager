require('../src/db/mongoose');
const Task = require('../src/models/task');

const _id = '5fccf9acac28ee676e57817b';

// Task.findByIdAndDelete(_id)
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount(_id)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
