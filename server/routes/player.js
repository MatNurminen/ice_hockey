const express = require('express');
const app = express();
const pool = require('../database');
const router = express.Router();

app.use(express.json());

const sqlPlayers = {
  text: 'SELECT * FROM player ORDER BY last_name',
};

const sqlPlayerForSearch = {
  text:
    'SELECT player.*, country.flag AS flag FROM player \
    INNER JOIN country ON (player.country_id = country.country_id)',
};

const sqlPlayerById = {
  text:
    'SELECT player.*, championship.*, club.club, league.s_name, country.flag, country.name AS country_name, \
    (championship.season - player.birth) AS age, (championship.season - 1999) AS year FROM player \
    INNER JOIN championship ON (player.player_id = championship.player_id) \
    INNER JOIN club ON (championship.club_id = club.club_id) \
    INNER JOIN league ON (club.league_id = league.league_id) \
    INNER JOIN country ON (player.country_id = country.country_id) WHERE player.player_id = $1 ORDER BY championship.season',
};

const sqlAddPlayer = {
  text:
    'INSERT INTO player (name, num, pos, country_id, birth, height, weight, pos_num) \
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
};

router.get('/playerForSearch', async (req, res) => {
  const PlayerForSearch = await pool.query(sqlPlayerForSearch);
  res.json(PlayerForSearch.rows);
});

router.get('/', async (req, res) => {
  const allPlayers = await pool.query(sqlPlayers);
  res.json(allPlayers.rows);
});

router.get('/:player_id', async (req, res) => {
  const playerById = await pool.query(sqlPlayerById, [req.params.player_id]);
  res.json(playerById.rows);
});

router.post('/create/new', async (req, res) => {
  const {
    name,
    num,
    pos,
    country_id,
    birth,
    height,
    weight,
    pos_num,
  } = req.body;

  const addPlayer = await pool.query(sqlAddPlayer, [
    name,
    num,
    pos,
    country_id,
    birth,
    height,
    weight,
    pos_num,
  ]);
  res.json(addPlayer);
});

// const sqlLeagues = {
//   text: 'SELECT * FROM league ORDER BY name',
// };

// const sqlLeagueById = {
//   text:
//     'SELECT league.name, league_logo.logo FROM league inner join league_logo on (league.league_id = league_logo.league_id) \
//     WHERE league.league_id = $2 AND league_logo.start_year <= $1 AND (league_logo.end_year >= $1 OR league_logo.end_year IS NULL)',
// };

// router.get('/', async (req, res) => {
//   const allLeagues = await pool.query(sqlLeagues);
//   res.json(allLeagues.rows);
// });

// router.get('/leaguebyid', async (req, res) => {
//   const leagueById = await pool.query(sqlLeagueById, [
//     req.query.year,
//     req.query.league,
//   ]);
//   res.json(leagueById.rows);
// });

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
