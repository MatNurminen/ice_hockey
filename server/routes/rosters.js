const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

const {
  get_roster,
  delete_from_roster,
  insert_into_roster,
} = require('../controllers/rosterController');

router.get('/', get_roster);

router.delete('/:championship_id', delete_from_roster);

router.post('/', insert_into_roster);

module.exports = router;
