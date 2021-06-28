const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

const {
  get_leagues,
  get_leagues_for_main,
  get_league_by_id_and_season,
} = require('../controllers/leaguesController');

router.get('/', get_leagues);

router.get('/formain', get_leagues_for_main);

router.get('/:league_id/:season', get_league_by_id_and_season);

module.exports = router;
