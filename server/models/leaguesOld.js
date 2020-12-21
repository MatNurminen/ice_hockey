const pool = require('../database');

class Leagues {
  static retrieveAll(callback) {
    pool.query('SELECT * from league ORDER BY name', (err, res) => {
      if (err) return callback(err);
      callback(res.rows);
    });
  }

  static leaguesByYears(callback) {
    const query = {
      text:
        'SELECT * from league WHERE start_year <= $1 AND (end_year isnull or end_year >= $1) ORDER BY name',
      values: [2012],
    };
    db.query(query, (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  //   static insert(country, callback) {
  //     db.query('INSERT INTO coutry (name) VALUES ($1)', [name], (err, res) => {
  //       if (err.error) return callback(err);
  //       callback(res);
  //     });
  //   }
}

module.exports = Leagues;
