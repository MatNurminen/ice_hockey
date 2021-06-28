const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

const {
  get_clubs,
  get_club_by_id_and_season,
} = require('../controllers/clubsController');

router.get('/', get_clubs);

router.get('/:club_id/:season', get_club_by_id_and_season);

module.exports = router;
