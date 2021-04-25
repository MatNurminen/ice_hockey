const pool = require('./database');
const moment = require('moment');

const sqlGetTokenExp = {
  text: `SELECT token_exp FROM users WHERE token = $1`,
};

const checkToken = async (token) => {
  const queryTokenData = await pool.query(sqlGetTokenExp, [token]);
  const expToken = moment(queryTokenData.rows[0].token_exp)
    .add(2, 'month')
    .toISOString();
  const curDate = moment();
  return curDate.isBefore(expToken);
};

module.exports = checkToken;
