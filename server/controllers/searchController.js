const pool = require('../database');

const sqlSearch = {
  text: "SELECT * FROM player WHERE (first_name || ' ' || last_name) ILIKE $1 \
      ORDER BY last_name",
};

const get_players_for_search = async (req, res) => {
  const listPlayers = await pool.query(sqlSearch, [
    '%' + req.query.strSearch + '%',
  ]);
  res.json(listPlayers.rows);
};

module.exports = { get_players_for_search };
