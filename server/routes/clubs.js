const express = require('express');
const app = express();
const pool = require('../database');
const router = express.Router();

app.use(express.json());

const sqlClubs = {
  text: 'SELECT * FROM club ORDER BY club',
};

const sqlClub = {
  text:
    'SELECT club.*, club_logo.* FROM club \
  INNER JOIN club_logo ON club.club_id = club_logo.club_id \
  WHERE club.club_id = $1',
};

router.get('/', async (req, res) => {
  const allClubs = await pool.query(sqlClubs);
  res.json(allClubs.rows);
});

router.get('/:club_id', async (req, res) => {
  const club = await pool.query(sqlClub, [req.params.club_id]);
  res.json(club.rows);
});

module.exports = router;
