module.exports = (db, user) => {
  const start = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      res.render('food/start', { currentUser: req.cookies.loggedin });
    }
  };

  return {
    start,
  };
};
