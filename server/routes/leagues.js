const express = require('express');
const url = require('url');
const app = express();
const pool = require('../database');
const router = express.Router();

app.use(express.json());

const sqlLeagues = {
  text: `SELECT league.*, league_logo.logo FROM league INNER JOIN league_logo ON league.league_id = league_logo.league_logo_id
    ORDER BY league.name`,
};

const sqlLeaguesForMain = {
  text: `SELECT league.*, league_logo.logo FROM league INNER JOIN league_logo ON league.league_id = league_logo.league_logo_id
    WHERE league.end_year ISNULL OR league.end_year >= 2020 ORDER BY league.name`,
};

const sqlLeagueById = {
  text: `SELECT league.*, league_logo.logo, league_logo.start_year as logo_start, league_logo.end_year as logo_end  FROM league
    INNER JOIN league_logo ON league.league_id = league_logo.league_id
    WHERE league.league_id = $1`,
};

const sqlClubsByLeague = {
  text: `SELECT * FROM club WHERE league_id = $1 ORDER BY club`,
};

const sqlLeagueTable = {
  text: `SELECT champ.*, club.club, (gf-ga) as gdif, (wings*2+ties) as points FROM champ
    INNER JOIN club ON champ.club_id = club.club_id
    WHERE champ.league_id = $1 AND champ.season = $2
    ORDER BY points DESC`,
};

const sqlLeagueStats = {
  text: `SELECT player.*, club.club, championship.*, 
    country.flag, ($2 - player.birth) as age
    FROM championship
    INNER JOIN club ON championship.club_id = club.club_id
    INNER JOIN player ON championship.player_id = player.player_id
    INNER JOIN country ON (player.country_id = country.country_id)
    WHERE club.league_id = $1 AND championship.season = $2`,
};

const sqlLeagueCountries = {
  text: `SELECT country.flag, country.name, COUNT (country.country_id) FROM championship
    INNER JOIN club ON championship.club_id = club.club_id
    INNER JOIN player ON championship.player_id = player.player_id
    INNER JOIN country ON player.country_id = country.country_id
    WHERE club.league_id = $1 AND championship.season = $2
    GROUP BY country.country_id ORDER BY count DESC`,
};

const sqlLeagueComparison = {
  text: `SELECT championship.club_id, club.club, 
  COUNT(championship.club_id) as players, 
  SUM(player.height)/COUNT(championship.club_id) as av_height,
  SUM(player.weight)/COUNT(championship.club_id) as av_weight, 
  SUM($2-player.birth)/COUNT(championship.club_id) as av_age
  FROM championship
  INNER JOIN player ON championship.player_id = player.player_id
  INNER JOIN club ON championship.club_id = club.club_id
  INNER JOIN league ON club.league_id = league.league_id
  WHERE  league.league_id = $1 AND championship.season = $2
  GROUP BY championship.club_id, club.club
  ORDER BY club.club`,
};

router.get('/', async (req, res) => {
  const allLeagues = await pool.query(sqlLeagues);
  res.json(allLeagues.rows);
});

router.get('/formain', async (req, res) => {
  const allLeaguesForMain = await pool.query(sqlLeaguesForMain);
  res.json(allLeaguesForMain.rows);
});

router.get('/:league_id/:season', async (req, res) => {
  const league = await pool.query(sqlLeagueById, [req.params.league_id]);
  const clubsByLeague = await pool.query(sqlClubsByLeague, [
    req.params.league_id,
  ]);
  const tableByLeague = await pool.query(sqlLeagueTable, [
    req.params.league_id,
    req.params.season,
  ]);
  const statsByLeague = await pool.query(sqlLeagueStats, [
    req.params.league_id,
    req.params.season,
  ]);
  const countriesByLeague = await pool.query(sqlLeagueCountries, [
    req.params.league_id,
    req.params.season,
  ]);
  const comparisonByLeague = await pool.query(sqlLeagueComparison, [
    req.params.league_id,
    req.params.season,
  ]);
  res.json({
    league: league.rows,
    clubs: clubsByLeague.rows,
    table: tableByLeague.rows,
    stats: statsByLeague.rows,
    countries: countriesByLeague.rows,
    comparison: comparisonByLeague.rows,
  });
});

module.exports = router;
