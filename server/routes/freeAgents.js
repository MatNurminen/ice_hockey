const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

const { get_free_agents } = require('../controllers/freeAgentsController');

router.get('/', get_free_agents);

module.exports = router;
