const path = require('path'),
  express = require('express'),
  bodyParser = require('body-parser'),
  jwt = require('jsonwebtoken');
const tokenKey = require('./tokenKey');
const pool = require('./database');

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5001;

const isCheckToken = require('./checkToken');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  if (req.headers.authorization) {
    jwt.verify(req.headers.authorization.split(' ')[1], tokenKey, (err) => {
      if (err) {
        res.status(403).send('Invalid token');
      }
    });
    isCheckToken(req.headers.authorization.split(' ')[1]).then((isExp) => {
      if (isExp) {
        next();
      } else {
        res.status(403).send('Token expires');
      }
    });
  } else if (req.url.includes('/api/auth') || req.method === 'GET') {
    next();
  } else {
    res.status(401).send('Not authorization');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) return console.log(err);
  console.log(`PostgreSQL connected: ${res.rows[0].now}`);
});

const Leagues = require('./routes/leagues');
app.use('/api/leagues', Leagues);
const Countries = require('./routes/countries');
app.use('/api/countries', Countries);
const Clubs = require('./routes/clubs');
app.use('/api/clubs', Clubs);
const Players = require('./routes/player');
app.use('/api/players', Players);
const Rosters = require('./routes/rosters');
app.use('/api/rosters', Rosters);
const Users = require('./routes/users');
app.use('/api/users', Users);
const Seasons = require('./routes/seasons');
app.use('/api/seasons', Seasons);
const FreeAgents = require('./routes/freeAgents');
app.use('/api/freeagents', FreeAgents);
const Chart = require('./routes/chart');
app.use('/api/chart', Chart);
const Season = require('./routes/season');
app.use('/api/season', Season);
const Search = require('./routes/search');
app.use('/api/search', Search);
const Auth = require('./routes/auth');
const { send } = require('process');
const { log } = require('console');
app.use('/api/auth', Auth);

module.exports = app;
