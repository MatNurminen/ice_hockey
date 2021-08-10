const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

const {
  get_players,
  get_player_by_id,
  get_players_for_search,
  add_player,
  edit_player,
} = require('../controllers/playersController');

router.get('/', get_players);

router.get('/:player_id', get_player_by_id);

router.get('/playerForSearch', get_players_for_search);

router.post('/create/new', add_player);

router.post('/', edit_player);

module.exports = router;
