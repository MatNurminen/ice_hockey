const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

const {
  get_champ_by_season_and_league,
} = require('../controllers/champsController');

router.get('/', get_champ_by_season_and_league);

module.exports = router;
