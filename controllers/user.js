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

  const login = (req, res) => {
    db.user.login(req.body, (err, result) => {
      if (err) console.error('Login failure: ', err);
      else if (result.rowCount >= 1) {
        const dbPassword = result.rows[0].password;
        const entered = db.user.encrypt(req.body.password);
        if (entered === dbPassword) {
          res.cookie('loggedin', {
            id: result.rows[0].id,
            login: req.body.login,
            hash: db.user.encrypt(req.body.login),
          });
          res.redirect('/');
        }
        res.render('users/login', { wrong: 'true' });
      }
    });
  };

  const logout = (req, res) => {
    res.clearCookie('loggedin');
    res.redirect('/');
  };

  const checkLogin = (cookie) => {
    if (db.user.encrypt(cookie.login) === cookie.hash) return true;
    return false;
  };

  const test = string => console.log(string);

  return {
    newForm,
    create,
    loginForm,
    login,
    logout,
    checkLogin,
    test,
  };
};
