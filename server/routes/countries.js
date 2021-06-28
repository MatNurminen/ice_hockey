const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

const {
  get_countries,
  get_country_count,
} = require('../controllers/countriesController');

router.get('/', get_countries);

router.get('/:country_id', get_country_count);

module.exports = router;
