let user = require('./controllers/user');
let food = require('./controllers/food');

module.exports = (app, db) => {
  user = user(db);
  app.get('/users/new', user.newForm);
  app.get('/users/login', user.loginForm);
  app.post('/users', user.create);
  app.post('/users/login', user.login);
  app.post('/users/logout', user.logout);

  food = food(db);
  app.get('/food/start', food.start);
};
