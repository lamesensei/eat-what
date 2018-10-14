module.exports = (db, user) => {
  function getRandomInt(min, max) {
    const minC = Math.ceil(min);
    const maxF = Math.floor(max);
    return Math.floor(Math.random() * (maxF - minC)) + minC; //
  }

  const getCurrentLocation = (location) => {
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

  const addForm = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      db.food.getLocations((err, result) => {
        if (err) console.error(err);
        else if (result.rowCount >= 1) {
          return res.render('food/addplace', {
            currentUser: req.cookies.loggedin,
            location: result.rows,
          });
        }
        return res.render('food/addform', { currentUser: req.cookies.loggedin });
      });
    }
  };

  const create = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      const params = {
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        author: req.cookies.loggedin.id,
      };

      db.food.create(params, (err, result) => {
        if (err) console.error(err);
        else if (result.rowCount >= 1) {
          res.send(`${result.rows[0].name} added.`);
        }
      });
    }
  };

  const curate = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      res.render('food/curate', { currentUser: req.cookies.loggedin });
    }
  };

  const editList = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      db.food.getPlaces(req.cookies.loggedin.id, (err, result) => {
        if (err) console.error(err);
        else {
          res.render('food/editlist', {
            currentUser: req.cookies.loggedin,
            places: result.rows,
          });
        }
      });
    }
  };

  const editForm = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      console.log(req.query);
      db.food.getSinglePlace(req.params.id, (placeErr, placeResult) => {
        if (placeErr) console.error(placeErr);
        else {
          db.food.getLocations((locationErr, locationResult) => {
            res.render('food/editform', {
              currentUser: req.cookies.loggedin,
              place: placeResult.rows[0],
              location: locationResult.rows,
            });
          });
        }
      });
    }
  };

  return {
    eat,
    solo,
    getCurrentLocation,
    addForm,
    create,
    curate,
    editList,
    editForm,
  };
};
