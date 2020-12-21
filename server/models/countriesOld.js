const db = require('../database');

class Countries {
  static retrieveAll(callback) {
    const sqlCountry = {
      text:
        'SELECT championship.championship_id, player.pos, player.num, player.name, country.flag, player.birth, \
        player.height, player.weight, club.club, club_logo.logo, league_logo.logo AS league_logo, league.name AS league_name, \
        player.player_id AS pl_id, (2012 - player.birth) AS age \
        FROM championship \
        INNER JOIN player ON (championship.player_id = player.player_id) \
        INNER JOIN club ON (championship.club_id = club.club_id) \
        INNER JOIN league ON (club.league_id = league.league_id) \
        INNER JOIN country ON (player.country_id = country.country_id) \
        INNER JOIN club_logo ON (club.club_id = club_logo.club_id) \
        INNER JOIN league_logo ON (league.league_id = league_logo.league_id) \
        WHERE championship.season = 2012 AND league.league_id = 14 \
        AND club_logo.start_year <= 2012 AND (club_logo.end_year >= 2012 OR club_logo.end_year IS NULL) \
        AND league_logo.start_year <= 2012 AND (league_logo.end_year >= 2012 OR league_logo.end_year IS NULL) \
        ORDER BY club.club, player.pos',
    };

    const sqlCountry2 = {
      text: 'SELECT * from country ORDER BY name',
    };

    const resultCountry = db.query(sqlCountry, (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  // static insert(country, callback) {
  //   db.query('INSERT INTO coutry (name) VALUES ($1)', [name], (err, res) => {
  //     if (err.error) return callback(err);
  //     callback(res);
  //   });
  // }
}

module.exports = Countries;
