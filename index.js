const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const reactEngine = require('express-react-views').createEngine();
const fileUpload = require('express-fileupload');

const db = require('./db');
const routes = require('./routes');

const PORT = process.env.PORT || 80;
const app = express();

app.use(fileUpload());
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.static(`${__dirname}/public/`));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

routes(app, db);

const server = app.listen(PORT, console.log(`Server initialized at port ${PORT}`));

app.get('/', (req, res) => {
  let currentUser;
  if (req.cookies.loggedin) currentUser = req.cookies.loggedin;
  else currentUser = null;
  res.render('home', { currentUser });
});

app.get('*', (req, res) => {
  const errorMsg = `${req.path} was not found.`;
  res.status(404).send(errorMsg);
});

server.on('close', () => {
  console.log('Server closing');
  db.pool.end(console.log('Pool closed.'));
});
