const pool = require('../database');

const sqlUsers = {
  text: 'SELECT * FROM users',
};

const get_users = async (req, res) => {
  const allUsers = await pool.query(sqlUsers);
  res.json(allUsers.rows);
};

module.exports = { get_users };
