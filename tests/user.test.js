const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

const userOne = {
  name: 'Mike',
  email: 'Mike@example.com',
  password: 'braman45345',
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test('Should signup a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'Thomas',
      email: 'kupaithomas@gmail.com',
      password: 'Mypass345237',
    })
    .expect(201);
});
