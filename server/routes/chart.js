const express = require('express');
const app = express();
const pool = require('../database');
const router = express.Router();

app.use(express.json());

const sqlCountryByLeague = {
  text:
    'SELECT club.league_id, league.s_name, COUNT(*) AS "players" FROM club \
    INNER JOIN league ON league.league_id = club.league_id \
    INNER JOIN championship ON championship.club_id = club.club_id \
    INNER JOIN player ON championship.player_id = player.player_id \
    WHERE championship.season = $1 AND player.country_id = $2 \
    GROUP BY club.league_id, league.s_name ORDER BY players DESC',
};

router.get('/', async (req, res) => {
  const countryByLeague = await pool.query(sqlCountryByLeague, [
    req.query.season,
    req.query.country_id,
  ]);
  res.json(countryByLeague.rows);
});

module.exports = router;
