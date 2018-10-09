const sha256 = require('js-sha256');

module.exports = (pool) => {
  const encrypt = (item) => {
    const salt = 'super salty for show';
    return sha256(item + salt);
  };

  const create = (params, callback) => {
    const statement = 'INSERT INTO users(name, login, password) VALUES($1, $2, $3) RETURNING id';
    const values = [params.name, params.login, encrypt(params.password)];

    pool.query(statement, values, (err, result) => {
      callback(err, result);
    });
  };

  return {
    encrypt,
    create,
  };
};
