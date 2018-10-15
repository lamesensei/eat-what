const pg = require('pg');
const url = require('url');
const user = require('./models/user');
const food = require('./models/food');

let configs;
if (process.env.DATABASE_URL) {
  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true,
  };
} else {
  configs = {
    user: 'lamesensei',
    host: '127.0.0.1',
    database: 'eatwhatdb',
    port: 5432,
  };
}

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
