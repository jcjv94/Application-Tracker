var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

/* GET users listing. */
router.get('/users', usersCtrl.index);

router.post('/applications', isLoggedIn, usersCtrl.addApplication);

router.delete('/applicaitons/:id', isLoggedIn, usersCtrl.delApplication);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
