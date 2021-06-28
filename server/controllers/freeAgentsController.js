const pool = require('../database');

const sqlFreeAgents = {
  text: 'SELECT * FROM player INNER JOIN country ON player.country_id = country.country_id \
      WHERE (start_year <= $1 AND (end_year >= $1 OR end_year ISNULL)) \
      AND player_id NOT IN ((SELECT player_id FROM championship WHERE season=$1)) AND player.country_id = $2',
};

const get_free_agents = async (req, res) => {
  const freeAgents = await pool.query(sqlFreeAgents, [
    req.query.season,
    req.query.country,
  ]);
  res.json(freeAgents.rows);
};

module.exports = { get_free_agents };
