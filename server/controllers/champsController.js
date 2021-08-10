const pool = require('../database');

const sqlChampBySeasonAndLeague = {
  text: `SELECT champ.*, club.club FROM champ 
  INNER JOIN club ON champ.club_id = club.club_id 
  WHERE season = $1 AND champ.league_id = $2
  ORDER BY club.club`,
};

const get_champ_by_season_and_league = async (req, res) => {
  const champBySeasonAndLeague = await pool.query(sqlChampBySeasonAndLeague, [
    req.query.season,
    req.query.league,
  ]);
  res.json(champBySeasonAndLeague.rows);
};

module.exports = { get_champ_by_season_and_league };
