const express = require('express');
const app = express();
const pool = require('../database');
const router = express.Router();

app.use(express.json());

const sqlLeagues = {
  text:
    'SELECT league.*, league_logo.logo FROM league INNER JOIN league_logo ON league.league_id = league_logo.league_logo_id \
    ORDER BY league.name',
};

const sqlLeaguesForMain = {
  text:
    'SELECT league.*, league_logo.logo FROM league INNER JOIN league_logo ON league.league_id = league_logo.league_logo_id \
    WHERE league.end_year ISNULL OR league.end_year >= 2020 ORDER BY league.name',
};

const sqlLeagueById = {
  text:
    'SELECT league.*, league_logo.logo, league_logo.start_year as logo_start, league_logo.end_year as logo_end  FROM league \
    INNER JOIN league_logo ON league.league_id = league_logo.league_id \
    WHERE league.league_id = $1',
};

const sqlClubsByLeague = {
  text: 'SELECT * FROM club WHERE league_id = $1 ORDER BY club',
};

const sqlLeagueTable = {
  text:
    'SELECT champ.*, club.club FROM champ \
    INNER JOIN club ON champ.club_id = club.club_id \
    WHERE champ.league_id = $1 AND champ.season = 2020 \
    ORDER BY points DESC',
};

const sqlLeagueStats = {
  text:
    'SELECT player.first_name, player.last_name, club.club, championship.* \
    FROM championship \
    INNER JOIN club ON championship.club_id = club.club_id \
    INNER JOIN player ON championship.player_id = player.player_id \
    WHERE championship.season = 2020 AND club.league_id = 14 \
    ORDER BY championship.goas LIMIT 5',
};

router.get('/', async (req, res) => {
  const allLeagues = await pool.query(sqlLeagues);
  res.json(allLeagues.rows);
});

router.get('/formain', async (req, res) => {
  const allLeaguesForMain = await pool.query(sqlLeaguesForMain);
  res.json(allLeaguesForMain.rows);
});

router.get('/:league_id', async (req, res) => {
  const league = await pool.query(sqlLeagueById, [req.params.league_id]);
  const clubsByLeague = await pool.query(sqlClubsByLeague, [
    req.params.league_id,
  ]);
  const tableByLeague = await pool.query(sqlLeagueTable, [
    req.params.league_id,
  ]);
  res.json({
    league: league.rows,
    clubs: clubsByLeague.rows,
    table: tableByLeague.rows,
  });
});

// router.get('/clubs/:league_id', async (req, res) => {
//   const clubsByLeague = await pool.query(sqlClubsByLeague, [
//     req.params.league_id,
//   ]);
//   res.json(clubsByLeague.rows);
// });

// router.get('/leaguesByYears', (req, res) => {
//   Leagues.leaguesByYears((err, leagues) => {
//     if (err) return res.json(err);
//     return res.json(leagues);
//   });
// });

// router.post('/', (req, res) => {
//   const league = req.body.league;
//   Countries.insert(country, (err, result) => {
//     if (err) return res.json(err);
//     return res.json(result);
//   });
// });

module.exports = router;
