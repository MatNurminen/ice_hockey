const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

const {
  get_draft,
  get_draft_players_by_country,
} = require('../controllers/draftController');

router.get('/', get_draft);

router.get('/country/:country_id', get_draft_players_by_country);

module.exports = router;
