const User = require('../models/user');

module.exports = {
    index,
    addApplication,
    delApplication
  };

function index(req, res, next) {
        res.render('users/index', {
          user: req.user
        });
  }

  function addApplication(req, res, next) {
    req.user.applications.push(req.body);
    req.user.save(function(err) {
      res.redirect('/users');
    });
  }

  function delApplication(req, res, next) {

}