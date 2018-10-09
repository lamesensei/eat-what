let user = require('./controllers/user');

module.exports = (app, db) => {
  user = user(db);
  app.get('/users/new', user.newForm);
  app.post('/users', user.create);
};
