require('../src/db/mongoose');
const User = require('../src/models/user');

// const _id = '5fcbb96c9c6d02a1afb92d86';
const _id = '5fcbb9609c6d02a1afb92d85';

User.findByIdAndUpdate(_id, { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
