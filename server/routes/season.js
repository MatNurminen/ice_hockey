const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

const { get_season } = require('../controllers/seasonController');

router.get('/', get_season);

module.exports = router;
