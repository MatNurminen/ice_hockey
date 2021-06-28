//const { json } = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

const { registration, sign_in } = require('../controllers/authController');

router.post('/registration', registration);

router.post('/', sign_in);

module.exports = router;
