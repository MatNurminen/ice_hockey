const express = require('express');
const app = express();
const pool = require('../database');
const router = express.Router();

app.use(express.json());

const sqlSearch = {
  text:
    "SELECT * FROM player WHERE (first_name || ' ' || last_name) ILIKE $1 \
    ORDER BY last_name",
};

router.get('/', async (req, res) => {
  const listPlayers = await pool.query(sqlSearch, [
    '%' + req.body.strSearch + '%',
  ]);
  res.json(listPlayers.rows);
});

module.exports = router;
