const pool = require('../database');

const sqlSeason = {
  text: 'SELECT * FROM season ORDER BY year DESC',
};

const get_season = async (req, res) => {
  const listSeasons = await pool.query(sqlSeason);
  res.json(listSeasons.rows);
};

module.exports = { get_season };
