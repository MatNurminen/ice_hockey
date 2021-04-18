const express = require('express');
const app = express();
const pool = require('../database');
const router = express.Router();
const bcrypt = require('bcrypt');

app.use(express.json());

const sqlUsers = {
  text: 'SELECT * FROM users',
};

const sqlInsertUser = {
  text: `INSERT INTO users (login, password) VALUES ($1, $2)
  RETURNING *`,
};

router.get('/', async (req, res) => {
  const allUsers = await pool.query(sqlUsers);
  res.json(allUsers.rows);
});

router.post('/', async (req, res) => {
  const login = req.body.login;
  //const password = req.body.password;
  const password = await bcrypt.hash(req.body.password, 10);
  const insertUser = await pool.query(sqlInsertUser, [login, password]);
  res.json(insertUser.rows);
});

module.exports = router;
