module.exports = (db, user) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //
  }

  const getLocation = (location) => {
    db.food.getLocation(location, (err, result) => {
      if (err) console.error(err);
      else if (result.rowCount >= 1) {
        console.log(result.rows);
        return result.rows[0];
      }
      return 'Could not find location.';
    });
  };

  const eat = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      res.render('food/eat', { currentUser: req.cookies.loggedin });
    }
  };

  const solo = (req, res) => {
    const location = {
      id: 1,
    };
    if (user.checkLogin(req.cookies.loggedin)) {
      db.food.solo(location.id, (err, result) => {
        if (err) console.error(err);
        else if (result.rowCount >= 1) {
          const dice = getRandomInt(0, result.rows.length);
          const randomResult = result.rows[dice];
          res.render('food/result', {
            currentUser: req.cookies.loggedin,
            result: randomResult,
            location: 'GA',
          });
        }
      });
    }
  };

  const curate = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      res.render('food/curate');
    }
  };

  return {
    eat,
    solo,
    getLocation,
    curate,
  };
};
