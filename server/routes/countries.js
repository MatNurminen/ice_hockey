const express = require('express');
const app = express();
const pool = require('../database');
const router = express.Router();

app.use(express.json());

const sqlCountries = {
  text: 'SELECT * FROM country ORDER BY name',
};

const sqlCountry = {
  text: 'SELECT * FROM country \
    WHERE country_id = $1',
};

const sqlCountryCount = {
  text:
    'SELECT country.country_id, country."name", country.s_name, country."flag", \
  COUNT(*) AS "country" FROM country INNER JOIN player \
  ON player.country_id = country.country_id WHERE country.country_id = $1 \
  GROUP BY country.country_id',
};

router.get('/', async (req, res) => {
  const allCountries = await pool.query(sqlCountries);
  res.json(allCountries.rows);
});

router.get('/:country_id', async (req, res) => {
  const country = await pool.query(sqlCountryCount, [req.params.country_id]);
  res.json(country.rows);
});

module.exports = router;
