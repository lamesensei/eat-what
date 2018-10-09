let user = require('./controllers/user');

module.exports = (app, db) => {
  user = user(db);
  app.get('/users/new', user.newForm);
  app.get('/users/login', user.loginForm);
  app.post('/users', user.create);
  app.post('/users/login', user.login);
  app.post('/users/logout', user.logout);
};
