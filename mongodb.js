// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to the database');
    }

    const db = client.db(databaseName);

    // db.collection('users')
    //   .updateOne(
    //     {
    //       _id: new ObjectID('5fc51074e15e532ea129ab77'),
    //     },
    //     {
    //       $inc: { age: -100 },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection('users')
    //   .deleteMany({
    //     age: 27,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection('tasks')
      .deleteOne({
        description: 'Make onion bhajis',
      })
      .then((results) => {
        console.log(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
