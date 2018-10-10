module.exports = (db, user) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //
  }

  const getLocation = () => 1;

  const start = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      res.render('food/start', { currentUser: req.cookies.loggedin });
    }
  };

  const solo = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      const params = getLocation();
      db.food.solo(params, (err, result) => {
        if (err) console.error(err);
        else if (result.rowCount >= 1) {
          const dice = getRandomInt(0, result.rows.length);
          const randomResult = result.rows[dice];
          res.render('food/result', {
            currentUser: req.cookies.loggedin,
            result: randomResult,
          });
        }
      });
    }
  };

  return {
    start,
    solo,
    getLocation,
  };
};
