// const User = require('../models/user');

// module.exports = {
    // index,
    // new: newApplication,
    // create,
    // addApplication,
    // delApplication
// };

// function index(req, res) {
//   User.find({}, function (err, users) {
//     res.render('users/index', {
//       users,
//       user: req.user,
//       name: req.query.name
//     });
//   });
// }


// function create(req, res) {
//   for (let key in req.body) {
//     if (req.body[key] === '') delete req.body[key];
//   }
//   var application = new Application(req.body);
//   application.save(function (err) {
//     if (err) return res.render('users/new');
//     console.log(application);
//     res.redirect('/user');
//   });
// }

// function newApplication(req, res, next){
//     res.render('users/new', { 
//       title: 'Add Application', 
//       user: req.user
//     });
// }

// function addApplication(req, res, next) {
//   req.user.applications.push(req.body);
//   req.user.save(function (err) {
//         res.redirect('users/index');
//     });
// }

// function delApplication(req, res, next) {

// }