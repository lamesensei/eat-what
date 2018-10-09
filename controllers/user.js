module.exports = (db) => {
  const newForm = (req, res) => {
    res.render('users/signup');
  };

  const create = (req, res) => {
    db.user.create(req.body, (err, result) => {
      if (err) console.error('Create failure: ', err);
      else if (result.rowCount >= 1) {
        res.cookie('loggedin', {
          id: result.rows[0].id,
          login: req.body.login,
          hash: db.user.encrypt(req.body.login),
        });
        res.redirect('/');
      }
    });
  };

  const loginForm = (req, res) => {
    res.render('users/login');
  };

  return {
    newForm,
    create,
    loginForm,
  };
};
