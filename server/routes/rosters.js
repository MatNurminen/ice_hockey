const express = require('express');
const app = express();
const pool = require('../database');
const router = express.Router();

app.use(express.json());

const sqlRoster = {
  text: 'SELECT championship.championship_id, player.pos, player.num, player.first_name, player.last_name, country.flag, player.birth, \
    player.height, player.weight, club.club_id, club.club, club_logo.logo, league_logo.logo AS league_logo, league.name AS league_name, \
    player.player_id AS pl_id, ($1 - player.birth) AS age \
    FROM championship \
    INNER JOIN player ON (championship.player_id = player.player_id) \
    INNER JOIN club ON (championship.club_id = club.club_id) \
    INNER JOIN league ON (club.league_id = league.league_id) \
    INNER JOIN country ON (player.country_id = country.country_id) \
    INNER JOIN club_logo ON (club.club_id = club_logo.club_id) \
    INNER JOIN league_logo ON (league.league_id = league_logo.league_id) \
    WHERE championship.season = $1 AND league.league_id = $2 \
    AND club_logo.start_year <= $1 AND (club_logo.end_year >= $1 OR club_logo.end_year IS NULL) \
    AND league_logo.start_year <= $1 AND (league_logo.end_year >= $1 OR league_logo.end_year IS NULL) \
    ORDER BY club.club, player.pos_num',
};

const sqlDeleteFromRoster = {
  text: 'DELETE FROM championship WHERE championship_id = $1',
};

const sqlInsertToRoster = {
  text: 'INSERT INTO championship (season, player_id, club_id) VALUES ($1, $2, $3) RETURNING *',
};

const sqlGetNewPlayer = {
  text: 'SELECT championship.championship_id, player.pos, player.num, player.first_name, player.last_name, country.flag, player.birth, \
    player.height, player.weight, club.club_id, club.club, club_logo.logo, league_logo.logo AS league_logo, league.name AS league_name, \
    player.player_id AS pl_id, ($1 - player.birth) AS age \
    FROM championship \
      INNER JOIN player ON (championship.player_id = player.player_id) \
      INNER JOIN club ON (championship.club_id = club.club_id) \
      INNER JOIN league ON (club.league_id = league.league_id) \
      INNER JOIN country ON (player.country_id = country.country_id) \
      INNER JOIN club_logo ON (club.club_id = club_logo.club_id) \
      INNER JOIN league_logo ON (league.league_id = league_logo.league_id) \
    WHERE championship.season = $1 AND league.league_id = $2 \
      AND club_logo.start_year <= $1 AND (club_logo.end_year >= $1 OR club_logo.end_year IS NULL) \
      AND league_logo.start_year <= $1 AND (league_logo.end_year >= $1 OR league_logo.end_year IS NULL) \
      AND championship.championship_id = $3 \
    ORDER BY club.club, player.pos_num',
};

const sqlClubsForRoster = {
  text: 'SELECT champ.*, club.club, club_logo.logo FROM champ \
    INNER JOIN club ON champ.club_id = club.club_id \
    INNER JOIN club_logo ON champ.club_id = club_logo.club_id \
    WHERE champ.season = $1 AND champ.league_id = $2 \
    AND club_logo.start_year <= $1 AND (club_logo.end_year >= $1 OR club_logo.end_year IS NULL) \
    ORDER BY club',
};

router.get('/', async (req, res) => {
  const allRoster = await pool.query(sqlRoster, [
    req.query.year,
    req.query.league,
  ]);
  const clubsForRoster = await pool.query(sqlClubsForRoster, [
    req.query.year,
    req.query.league,
  ]);
  res.json({ rosters: allRoster.rows, clubs: clubsForRoster.rows });
});

router.delete('/:championship_id', async (req, res) => {
  await pool.query(sqlDeleteFromRoster, [req.params.championship_id]);
  res.send(req.params.championship_id);
});

router.post('/', async (req, res) => {
  const newPlayer = await pool.query(sqlInsertToRoster, [
    req.body.season,
    req.body.player_id,
    req.body.club_id,
  ]);

  const newRosterUser = await pool.query(sqlGetNewPlayer, [
    req.body.season,
    req.body.league,
    newPlayer.rows[0].championship_id,
  ]);
  res.send(newRosterUser.rows[0]);
});

module.exports = router;
