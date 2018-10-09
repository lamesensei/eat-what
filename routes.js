module.exports = (app, db) => {
  const user = require('./controllers/user')(db);
  app.get('/users/new', user.newForm);
};
