const path = require('path'),
  express = require('express'),
  bodyParser = require('body-parser');

//const db = require('./database');
const pool = require('./database');

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) return console.log(err);
  console.log(`PostgreSQL connected: ${res.rows[0].now}`);
});

// const AllPlayers = require('./routes/allPlayers');
// app.use('/all_players', AllPlayers);
const Leagues = require('./routes/leagues');
app.use('/api/leagues', Leagues);
const Countries = require('./routes/countries');
app.use('/api/countries', Countries);
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

module.exports = app;
