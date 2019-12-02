var express = require('express');
var router = express.Router();
var applicationsCtrl = require('../controllers/applications');


router.get('/', applicationsCtrl.index);

router.get('/new',applicationsCtrl.new)

// router.get('/:id', applicationsCtrl.show);

router.post('/', applicationsCtrl.create);

module.exports = router;