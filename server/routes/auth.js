const { json } = require('body-parser');
const express = require('express');
const app = express();
const pool = require('../database');
const router = express.Router();

app.use(express.json());
const sqlUsers = {
  text: `SELECT * FROM users`,
};

router.post('/', async (req, res) => {
  const users = await pool.query(sqlUsers);
  //console.log('TEST ', users.rows);
  //res.json(users.rows);
  for (let user of users.rows) {
    if (req.body.login === user.login && req.body.password === user.password) {
      let head = Buffer.from(
        JSON.stringify({ alg: 'HS256', typ: 'jwt' })
      ).toString('base64');
      let body = Buffer.from(JSON.stringify(user)).toString('base64');
      let signature = crypto
        .createHmac('SHA256', tokenKey)
        .update(`${head}.${body}`)
        .digest('base64');
      return res.status(200).json({
        id: user.id,
        token: `${head}.${body}.${signature}`,
      });
    }
  }
});

module.exports = router;
