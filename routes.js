let user = require('./controllers/user');
let food = require('./controllers/food');

module.exports = (app, db) => {
  user = user(db);
  app.get('/users/new', user.newForm);
  app.get('/users/login', user.loginForm);
  app.post('/users', user.create);
  app.post('/users/login', user.login);
  app.post('/users/logout', user.logout);

  food = food(db, user);
  app.get('/food/eat', food.eat);
  app.get('/food/curate', food.curate);
  app.get('/food/solo', food.solo);
  app.get('/food/add', food.addForm);
  app.get('/food/edit', food.editList);
  app.get('/food/:id/edit', food.editForm);
  app.post('/food', food.create);
  app.put('/food/:id/edit', food.edit);
};
