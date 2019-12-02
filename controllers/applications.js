var Application = require('../models/application');

module.exports = {
    index,
    new: newApplication,
    create,
    // addApplication,
    // delApplication
};

function index(req, res) {
    Application.find({}, function (err, applications) {
        console.log("APPLICATIONS: ", applications)
      res.render('applications/index', {
        applications,
        user: req.user
      });
    });
  }


function newApplication(req, res){
    res.render('applications/new', { 
      title: 'Add Application', 
      user: req.user
    });
}

function create(req, res) {
  var application = new Application(req.body);
  application.save(function (err) {
    if (err){
        console.log("ERROR!: ", err)
        res.redirect('/applications/new');
    } else {
        console.log("It worked, no error!", application)
        res.redirect('/applications');
    }
  });
}

// function addApplication(req, res, next) {
//   req.application.applications.push(req.body);
//   req.application.save(function (err) {
//         res.redirect('applications/index');
//     });
// }

// function delApplication(req, res, next) {

// }