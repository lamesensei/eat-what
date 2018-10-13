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

  return {
    solo,
    getCurrentLocation,
    getLocations,
  };
};
