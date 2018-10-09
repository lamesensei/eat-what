module.exports = (db) => {
  const newForm = (req, res) => {
    res.render('users/signup');
  };

  return {
    newForm,
  };
};
