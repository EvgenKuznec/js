import express from 'express';
import UserController from './controllers/userController';

const app = express();
app.use(express.json());

const userController = new UserController();

app.post('/users', userController.createUser.bind(userController));
app.get('/users/:id', userController.getUserById.bind(userController));
app.get('/users', userController.getUsers.bind(userController));
app.put('/users/:id', userController.updateUser.bind(userController));
app.delete('/users/:id', userController.deleteUser.bind(userController));

app.get('/', (_req, res) => {
  return res.send('Hello everyone!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
