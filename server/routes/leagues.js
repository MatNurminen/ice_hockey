const express = require('express');
const app = express();
const pool = require('../database');
const router = express.Router();

app.use(express.json());

const sqlLeagues = {
  //text: 'SELECT * FROM league ORDER BY name',
  text:
    'SELECT league.*, league_logo.logo FROM league INNER JOIN league_logo ON league.league_id = league_logo.league_logo_id \
    ORDER BY league.name',
};

const sqlLeaguesForMain = {
  text:
    'SELECT league.*, league_logo.logo FROM league INNER JOIN league_logo ON league.league_id = league_logo.league_logo_id \
    WHERE league.end_year ISNULL OR league.end_year >= 2020 ORDER BY league.name',
};

const sqlLeagueById = {
  text:
    'SELECT league.name, league_logo.logo FROM league inner join league_logo on (league.league_id = league_logo.league_id) \
    WHERE league.league_id = $2 AND league_logo.start_year <= $1 AND (league_logo.end_year >= $1 OR league_logo.end_year IS NULL)',
};

router.get('/', async (req, res) => {
  const allLeagues = await pool.query(sqlLeagues);
  res.json(allLeagues.rows);
});

router.get('/formain', async (req, res) => {
  const allLeaguesForMain = await pool.query(sqlLeaguesForMain);
  res.json(allLeaguesForMain.rows);
});

router.get('/leaguebyid', async (req, res) => {
  const leagueById = await pool.query(sqlLeagueById, [
    req.query.year,
    req.query.league,
  ]);
  res.json(leagueById.rows);
});

// router.get('/leaguesByYears', (req, res) => {
//   Leagues.leaguesByYears((err, leagues) => {
//     if (err) return res.json(err);
//     return res.json(leagues);
//   });
// });

// router.post('/', (req, res) => {
//   const league = req.body.league;
//   Countries.insert(country, (err, result) => {
//     if (err) return res.json(err);
//     return res.json(result);
//   });
// });

module.exports = router;
