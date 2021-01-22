const express = require('express');
const profileController = require('../controller/profile');

// Router initialisation
const router = express.Router();

router.get('/', profileController.getAllProfile);
router.delete('/', profileController.deleteAllProfile);
router.post('/', profileController.createProfile);
router.get('/:_id', profileController.getProfileById);

module.exports = router;