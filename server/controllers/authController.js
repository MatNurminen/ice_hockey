const pool = require('../database');
const jwt = require('jsonwebtoken');
const tokenKey = require('../tokenKey');
const bcrypt = require('bcrypt');

const sqlUsers = {
  text: `SELECT * FROM users`,
};

const sqlInsertUser = {
  text: `INSERT INTO users (login, password) VALUES ($1, $2)
    RETURNING user_id, login`,
};

const sqlUpdateToken = {
  text: `UPDATE users SET token = $1, token_exp = now() WHERE login = $2 
    AND password = $3 RETURNING token_exp`,
};

const registration = async (req, res) => {
  const login = req.body.login;
  const password = await bcrypt.hash(req.body.password, 10);
  const insertUser = await pool.query(sqlInsertUser, [login, password]);
  res.json(insertUser.rows);
};

const sign_in = async (req, res) => {
  const users = await pool.query(sqlUsers);
  for (let user of users.rows) {
    if (
      req.body.login === user.login &&
      bcrypt.compare(req.body.password, user.password)
    ) {
      let head = Buffer.from(
        JSON.stringify({ alg: 'HS256', typ: 'jwt' })
      ).toString('base64');
      const token = jwt.sign({ id: user.user_id }, tokenKey);
      const userData = await pool.query(sqlUpdateToken, [
        token,
        user.login,
        user.password,
      ]);
      return res.status(200).json({
        user_id: user.user_id,
        login: user.login,
        token: token,
        token_exp: userData.rows[0].token_exp,
      });
    }
  }
};

module.exports = { registration, sign_in };
