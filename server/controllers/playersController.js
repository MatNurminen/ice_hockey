const pool = require('../database');

const sqlPlayers = {
  text: `SELECT * FROM player ORDER BY last_name`,
};

const sqlPlayerForSearch = {
  text: `SELECT player.*, country.flag AS flag FROM player
      INNER JOIN country ON (player.country_id = country.country_id)`,
};

const sqlPlayerById = {
  text: `SELECT player.*, EXTRACT(YEAR FROM current_date)-player.birth AS age,
      country.name, country.flag, country.jersey FROM player
      INNER JOIN country ON player.country_id = country.country_id
      WHERE player_id = $1`,
};

const sqlChampsStats = {
  text: `SELECT player.player_id, championship.*, club.club, league.s_name, 
    (championship.season - player.birth) AS age FROM player
    INNER JOIN championship ON player.player_id = championship.player_id
    INNER JOIN club ON championship.club_id = club.club_id
    INNER JOIN league ON club.league_id = league.league_id
    INNER JOIN country ON player.country_id = country.country_id 
    WHERE player.player_id = $1 ORDER BY championship.season`,
};

const sqlAddPlayer = {
  text: `INSERT INTO player (name, num, pos, country_id, birth, height, weight, pos_num) \
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
};

const get_players = async (req, res) => {
  const allPlayers = await pool.query(sqlPlayers);
  res.json(allPlayers.rows);
};

const get_player_by_id = async (req, res) => {
  const playerById = await pool.query(sqlPlayerById, [req.params.player_id]);
  const champsStats = await pool.query(sqlChampsStats, [req.params.player_id]);
  res.json({
    playerById: playerById.rows,
    champsStats: champsStats.rows,
  });
};

const get_players_for_search = async (req, res) => {
  const PlayerForSearch = await pool.query(sqlPlayerForSearch);
  res.json(PlayerForSearch.rows);
};

const add_player = async (req, res) => {
  const { name, num, pos, country_id, birth, height, weight, pos_num } =
    req.body;

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
};

module.exports = {
  get_players,
  get_player_by_id,
  get_players_for_search,
  add_player,
};
