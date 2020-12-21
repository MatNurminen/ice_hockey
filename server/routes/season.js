const express = require('express');
const app = express();
const pool = require('../database');
const router = express.Router();

app.use(express.json());

const sqlSeason = {
  text: 'SELECT * FROM season ORDER BY year DESC',
};

router.get('/', async (req, res) => {
  const listSeasons = await pool.query(sqlSeason);
  res.json(listSeasons.rows);
});

module.exports = router;
