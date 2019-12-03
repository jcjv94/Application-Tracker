var Application = require('../models/application');
 
module.exports = {
    // new: newInterview,
    create,
    // addInterview
};

// function addInterview(req, res) {
//     Application.findById(req.params.id, function(err, application) {
//       application.interviews.push(req.body);
//       application.save(function(err) {
//         res.redirect(`/applications/${application._id}`);
//       });
//     });
//   }

function create(req, res) {
    Application.findById(req.params.id, function(err, application) {
      application.interviews.push(req.body);
      application.save(function(err) {
        res.redirect(`/applications/${application._id}`);
      });
    });
  }

//   function newInterview(req, res) {
//     Application.findById(req.params.id, function(err, flight){
//       res.render('applications/new', {
//         title: "Add Application",
//         application
//       })
//     })