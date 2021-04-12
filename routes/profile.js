const express = require('express');
const bodyParser = require('body-parser')
const profileController = require('../controller/profile');

// Router initialisation
const router = express.Router();
var jsonParser = bodyParser.json()

router.get('/', profileController.getAllProfile);
router.delete('/', profileController.deleteAllProfile);
router.post('/', jsonParser, profileController.createProfile);
router.get('/:_id', profileController.getProfileById);

module.exports = router;