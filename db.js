const pg = require('pg');
const user = require('./models/user');
const food = require('./models/food');

const configs = {
  user: 'lamesensei',
  host: '127.0.0.1',
  database: 'eatwhatdb',
  port: 5432,
};

const pool = new pg.Pool(configs);

pool.on('error', (err) => {
  console.log('Something went wrong with the swimming pool: ', err.message, err.stack);
});

module.exports = {
  pool,
  user: user(pool),
  food: food(pool),

  query: (statement, values, callback) => pool.query(statement, values, callback),
};
