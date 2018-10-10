module.exports = (db, user) => {
  const start = (req, res) => {
    user.test('hello');
    if (user.checkLogin(req.cookies.loggedin)) {
      console.log('hi');
      res.render('food/start', { currentUser: req.cookies.loggedin });
    }
  };

  return {
    start,
  };
};
