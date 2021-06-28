const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

const { get_users } = require('../controllers/usersController');

router.get('/', get_users);

module.exports = router;
