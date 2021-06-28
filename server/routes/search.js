const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

const { get_players_for_search } = require('../controllers/searchController');

router.get('/', get_players_for_search);

module.exports = router;
