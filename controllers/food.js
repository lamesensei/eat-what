module.exports = (db) => {
  const start = (req, res) => {
    res.render('food/start');
  };

  return {
    start,
  };
};
