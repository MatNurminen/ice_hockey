const pool = require('../database');

const sqlClubs = {
  text: 'SELECT * FROM club ORDER BY club',
};

const sqlClub = {
  text: `SELECT club.*, club_logo.*, league.* FROM club
      INNER JOIN club_logo ON club.club_id = club_logo.club_id
      INNER JOIN league ON club.league_id = league.league_id
      WHERE club.club_id = $1`,
};

const sqlClubBySeason = {
  text: `SELECT championship.*, player.*, country.flag, 
      (championship.season-player.birth) as age FROM championship
      INNER JOIN player ON championship.player_id = player.player_id
      INNER JOIN country ON player.country_id = country.country_id
      WHERE club_id = $1 AND season = $2 ORDER BY last_name`,
};

const sqlClubHistory = {
  text: `SELECT champ.*, league.name, (gf-ga) as gdif, 
      (wings*2+ties) as points FROM champ
      INNER JOIN league ON champ.league_id = league.league_id
      WHERE club_id = $1 ORDER BY season`,
};

const get_clubs = async (req, res) => {
  const allClubs = await pool.query(sqlClubs);
  res.json(allClubs.rows);
};

const get_club_by_id_and_season = async (req, res) => {
  const club = await pool.query(sqlClub, [req.params.club_id]);
  const roster = await pool.query(sqlClubBySeason, [
    req.params.club_id,
    req.params.season,
  ]);
  const clubHistory = await pool.query(sqlClubHistory, [req.params.club_id]);
  res.json({
    club: club.rows,
    roster: roster.rows,
    clubhistory: clubHistory.rows,
  });
};

module.exports = { get_clubs, get_club_by_id_and_season };
