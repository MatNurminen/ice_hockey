const res = require('express/lib/response');
const pool = require('../database');

const sqlDraft = {
  text: `SELECT * FROM player WHERE draft IS NOT NULL`,
};

const sqlDraftCountries = {
  text: `SELECT country.country_id, country.name, country.flag, 
  count(country.name) FROM player 
  INNER JOIN country ON country.country_id = player.country_id 
  WHERE draft IS NOT NULL 
  GROUP BY country.country_id, country.name, country.flag 
  ORDER BY country.name`,
};

const sqlDraftClubs = {
  text: `SELECT club.club_id, club.club FROM player 
    INNER JOIN club ON club.club_id = player.draft 
    WHERE draft IS NOT NULL 
    GROUP BY club.club_id, club.club 
    ORDER BY club.club`,
};

const sqlDraftPlayersByCountry = {
  text: `SELECT player.*, country.name, country.flag, club.club, 
    stats.seasons, stats.games, stats.goals from player 
    INNER JOIN country ON country.country_id = player.country_id
    INNER JOIN club ON club.club_id = player.draft
    LEFT JOIN
    (SELECT COUNT(season) AS seasons, SUM(games) AS games, SUM(goals) AS goals, player_id FROM championship
    INNER JOIN club ON championship.club_id = club.club_id
    WHERE club.league_id = 14 GROUP BY player_id) 
    AS stats ON player.player_id = stats.player_id
    WHERE draft IS NOT NULL AND player.country_id = $1
    ORDER BY player.pos_num`,
};

const get_draft = async (req, res) => {
  const draft = await pool.query(sqlDraft);
  const draftCountries = await pool.query(sqlDraftCountries);
  const draftClubs = await pool.query(sqlDraftClubs);
  res.json({
    draft: draft.rows,
    draftCountries: draftCountries.rows,
    draftClubs: draftClubs.rows,
  });
};

const get_draft_players_by_country = async (req, res) => {
  const draftPlayersByCountry = await pool.query(sqlDraftPlayersByCountry, [
    req.params.country_id,
  ]);
  res.json({ draftPlayersByCountry: draftPlayersByCountry.rows });
};

module.exports = { get_draft, get_draft_players_by_country };
