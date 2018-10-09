module.exports = (db) => {
  const newForm = (req, res) => {
    // res.render('users/login');
    res.send('this should be the login form');
  };

  return {
    newForm,
  };
};
