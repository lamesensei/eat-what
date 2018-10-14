module.exports = (pool) => {
  const solo = (params, callback) => {
    const statement = `SELECT 
    food.name,food.description,location."name" as location 
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
    INTO food (name, description, location_id, author_id) 
    VALUES ($1,$2,$3,$4) RETURNING *`;

    const values = [params.name, params.description, params.location, params.author];

    pool.query(statement, values, (err, result) => {
      callback(err, result);
    });
  };

  const getPlaces = (params, callback) => {
    const statement = 'SELECT * FROM food WHERE author_id = ($1)';
    const values = [params];

    pool.query(statement, values, (err, result) => {
      callback(err, result);
    });
  };

  const getSinglePlace = (params, callback) => {
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

  return {
    solo,
    getCurrentLocation,
    getLocations,
    create,
    getPlaces,
    getSinglePlace,
    edit,
    remove,
  };
};
