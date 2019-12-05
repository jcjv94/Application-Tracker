var express = require('express');
var router = express.Router();
var appCtrl = require('../controllers/applications');


router.post('/applications', isLoggedIn, appCtrl.addApplication);
router.delete('/applicaitons/:id', isLoggedIn, appCtrl.delApplication);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;