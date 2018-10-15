module.exports = (pool) => {
  const solo = (params, callback) => {
    const statement = `SELECT 
    food.name,food.description,food.image,location."name" as location 
    FROM food 
    INNER JOIN nearby ON(food.location_id=nearby.nearby_location_id)
    INNER JOIN location ON(nearby_location_id=location.id)
    WHERE current_location_id=($1)`;
    const values = [params];

    pool.query(statement, values, (err, result) => callback(err, result));
  };

  const getCurrentLocation = (params, callback) => {
    const statement = `SELECT
    * 
    FROM location 
    WHERE id = ($1)`;
    const values = [params];

    pool.query(statement, values, (err, result) => {
      callback(err, result);
    });
  };

  const getLocations = (callback) => {
    const statement = 'SELECT * FROM location';

    pool.query(statement, null, (err, result) => {
      callback(err, result);
    });
  };

  const create = (params, callback) => {
    const statement = `INSERT
    INTO food (name, description, location_id, author_id, image) 
    VALUES ($1,$2,$3,$4,$5) RETURNING *`;

    const values = [params.name, params.description, params.location, params.author, params.image];

    pool.query(statement, values, (err, result) => {
      callback(err, result);
    });
  };

  const getPlacesByAuthor = (params, callback) => {
    const statement = 'SELECT * FROM food WHERE author_id = ($1)';
    const values = [params];

    pool.query(statement, values, (err, result) => {
      callback(err, result);
    });
  };

  const getPlaceById = (params, callback) => {
    const statement = 'SELECT * FROM food WHERE id = ($1)';
    const values = [params];

    pool.query(statement, values, (err, result) => {
      callback(err, result);
    });
  };

  const edit = (params, callback) => {
    const statement = 'UPDATE food SET (name,description,location_id) = ($1,$2,$3) WHERE id = ($4) RETURNING *';
    const values = [params.name, params.description, params.location, params.id];

    pool.query(statement, values, (err, result) => {
      callback(err, result);
    });
  };

  const remove = (params, callback) => {
    const statement = 'DELETE FROM food WHERE id = ($1) RETURNING *';
    const values = [params];

    pool.query(statement, values, (err, result) => {
      callback(err, result);
    });
  };

  const fave = (params, callback) => {
    const statement = `INSERT
    INTO fave (user_id, food_id) 
    VALUES ($1,$2) RETURNING *`;

    const values = [params.userid, params.foodid];

    pool.query(statement, values, (err, result) => {
      callback(err, result);
    });
  };

  const faveList = (params, callback) => {
    const statement = `SELECT *
    FROM food 
    INNER JOIN fave ON (food.id = fave.food_id)
    WHERE fave.user_id = ($1)`;

    const values = [params];

    pool.query(statement, values, (err, result) => {
      callback(err, result);
    });
  };

  const faveJson = (params, callback) => {
    const statement = `SELECT *
    FROM food 
    INNER JOIN fave ON (food.id = fave.food_id)
    WHERE fave.user_id = ($1)`;

    const values = [params];

    pool.query(statement, values, (err, result) => {
      callback(err, result);
    });
  };

  const list = (callback) => {
    const statement = 'SELECT food.name, food.id FROM food WHERE NOT EXISTS(SELECT fave.id FROM fave WHERE fave.food_id = food.id)';

    pool.query(statement, null, (err, result) => {
      callback(err, result);
    });
  };

  return {
    solo,
    getCurrentLocation,
    getLocations,
    create,
    getPlacesByAuthor,
    getPlaceById,
    edit,
    remove,
    fave,
    faveList,
    faveJson,
    list,
  };
};
