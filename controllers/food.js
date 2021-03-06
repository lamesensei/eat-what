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
    const params = {
      location: 1,
      userid: req.cookies.loggedin.id,
    };
    if (user.checkLogin(req.cookies.loggedin)) {
      db.food.solo(params, (err, result) => {
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
          return res.render('food/addform', {
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
      const photo = req.files.photo;
      photo.mv(`public/uploads/${photo.name}`, (uploadErr) => {
        const params = {
          name: req.body.name,
          description: req.body.description,
          location: req.body.location,
          image: `/uploads/${photo.name}`,
          author: req.cookies.loggedin.id,
        };

        db.food.create(params, (err, result) => {
          if (err) console.error(err);
          else if (result.rowCount >= 1) {
            res.render('food/curate', {
              currentUser: req.cookies.loggedin,
              success: result.rows[0],
              action: 'added',
            });
          }
        });
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
      db.food.getPlacesByAuthor(req.cookies.loggedin.id, (err, result) => {
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
      db.food.getPlaceById(req.params.id, (placeErr, placeResult) => {
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

  const edit = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      const params = {
        id: req.params.id,
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
      };
      db.food.edit(params, (err, result) => {
        if (err) console.error(err);
        else if (result.rowCount >= 1) {
          res.render('food/curate', {
            currentUser: req.cookies.loggedin,
            success: result.rows[0],
            action: 'edited.',
          });
        }
      });
    }
  };

  const remove = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      db.food.remove(req.params.id, (err, result) => {
        if (err) console.error(err);
        else if (result.rowCount >= 1) {
          res.render('food/curate', {
            currentUser: req.cookies.loggedin,
            success: result.rows[0],
            action: 'deleted.',
          });
        }
      });
    }
  };

  const fave = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      const params = {
        userid: req.cookies.loggedin.id,
        foodid: req.params.id,
      };
      db.food.fave(params, (err, result) => {
        if (err) console.error(err);
        else if (result.rowCount >= 1) {
          res.redirect('/food/fave');
        }
      });
    }
  };

  const faveList = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      db.food.faveList(req.cookies.loggedin.id, (err, result) => {
        if (err) console.error(err);
        else if (result.rowCount >= 1) {
          return res.render('food/favelist', {
            currentUser: req.cookies.loggedin,
            places: result.rows,
          });
        }
        return res.redirect('/food');
      });
    }
  };

  const faveJson = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      db.food.faveList(req.cookies.loggedin.id, (err, result) => {
        if (err) console.error(err);
        else if (result.rowCount >= 1) {
          res.json(result.rows);
        }
      });
    }
  };

  const list = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      db.food.list((err, result) => {
        if (err) console.error(err);
        else if (result.rowCount >= 1) {
          return res.render('food/list', {
            currentUser: req.cookies.loggedin,
            places: result.rows,
          });
        }
        return res.redirect('food/fave');
      });
    }
  };

  const listJson = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      db.food.list((err, result) => {
        if (err) console.error(err);
        else if (result.rowCount >= 1) {
          res.json(result.rows);
        }
      });
    }
  };

  const faveRemove = (req, res) => {
    if (user.checkLogin(req.cookies.loggedin)) {
      db.food.faveRemove(req.params.id, (err, result) => {
        if (err) console.error(err);
        else if (result.rowCount >= 1) {
          res.render('food/curate', {
            currentUser: req.cookies.loggedin,
            success: result.rows[0],
            action: null,
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
    edit,
    remove,
    fave,
    faveList,
    faveJson,
    faveRemove,
    list,
    listJson,
  };
};
