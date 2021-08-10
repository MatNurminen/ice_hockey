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
  text: `INSERT INTO player (first_name, last_name, num, pos, country_id, 
    birth, height, weight, pos_num, start_year, end_year)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING player_id`,
};

const sqlEditPlayer = {
  text: `UPDATE player SET (first_name, last_name, num, pos, country_id, 
    birth, height, weight, pos_num, start_year, end_year)
    = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    WHERE player_id = $12
    RETURNING *`,
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

const playerFormater = (player) => {
  return Object.assign(player, {
    num: Number(player.num),
    country_id: Number(player.country_id),
    birth: Number(player.birth),
    height: Number(player.height),
    weight: Number(player.weight),
    pos_num: Number(player.pos_num),
    start_year: Number(player.start_year),
    end_year: Number(player.end_year),
  });
};

const add_player = async (req, res) => {
  const body = playerFormater(req.body);
  const { rows } = await pool.query(sqlAddPlayer, Object.values(body));
  res.json(rows);
};

const edit_player = async (req, res) => {
  const body = playerFormater(req.body);
  await pool.query(sqlEditPlayer, Object.values(body));
  const { rows } = await pool.query(sqlPlayerById, [body.player_id]);
  res.json(rows);
};

module.exports = {
  get_players,
  get_player_by_id,
  get_players_for_search,
  add_player,
  edit_player,
};
