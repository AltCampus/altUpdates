const express = require("express");
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
// const cookieParser = require('cookie-parser');
const path = require('path');
const MongoStore = require('connect-mongo')(session);

const port = 8000;

mongoose.connect('mongodb://localhost/altUpdates', { useNewUrlParser: true },  function(err, connection) {
  if(err) throw err
  else console.log('Connected to mongodb');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.resolve(__dirname, 'dist')));

app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'ejs');

// app.use(cookieParser());
app.use(session({
  secret: 'altUpdates secret',
  resave: true,
  saveUninitialized: true,
  cookie : {
    maxAge : 3600000
  },
  store: new MongoStore({ url: 'mongodb://localhost/altupdates-session' })
}));

if(process.env.NODE_ENV === 'development') {
  console.log('in webpack hot middleware')
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config');
  var compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(passport.initialize());
app.use(passport.session());
require('./server/modules/passport')(passport)
app.use(cors());

// Routers
app.use('/api', require('./server/routes/api'));
app.use(require('./server/routes/index'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})