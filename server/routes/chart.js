const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

const { get_country_by_league } = require('../controllers/chartController');

router.get('/', get_country_by_league);

module.exports = router;
