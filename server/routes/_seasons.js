const express = require('express');
const app = express();
const pool = require('../database');
const router = express.Router();

app.use(express.json());

const sqlInsertSeason = {
  text:
    'INSERT INTO championship (player_id, club_id, season) SELECT player_id, club_id, season+1 FROM championship WHERE season = 2019',
};

// router.get('/', async (req, res) => {
//   const allLeagues = await pool.query(sqlLeagues);
//   res.json(allLeagues.rows);
// });

router.post('/', async (req, res) => {
  await pool.query(sqlInsertSeason);
  res.send('success');
});

module.exports = router;
