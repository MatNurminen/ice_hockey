const express = require('express');
const app = express();
const pool = require('../database');
const router = express.Router();

app.use(express.json());

const sqlUsers = {
  text: 'SELECT * FROM users',
};

router.get('/', async (req, res) => {
  const allUsers = await pool.query(sqlUsers);
  res.json(allUsers.rows);
});

module.exports = router;
