var express = require('express');
var router = express.Router();
var interviewsCtrl = require('../controllers/interviews');

router.post('/applications/:id/interviews', interviewsCtrl.create);

module.exports = router;