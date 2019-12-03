var Application = require('../models/application');
var User = require('../models/user');

module.exports = {
    index,
    show,
    new: newApplication,
    create,
    delete: delApplication
    // addApplication,
};

function index(req, res) {
    Application.find({
        user: req.user._id
    }, function (err, applications) {
        console.log("APPLICATIONS: ", applications)
        res.render('applications/index', {
            applications,
            user: req.user
        });
    });
}

//   function show(req, res) {
//     res.render('applications/show', {
//       application: application.getOne(req.params.id),
//       applicationNum: parseInt(req.params.id) + 1
//     });
//   }

function show(req, res) {
    Application.findById(req.params.id, function (err, application) {
        res.render('applications/show', {
            title: "Application Details",
            application,
            user: req.user
        });
    });
}


function newApplication(req, res) {
    res.render('applications/new', {
        title: 'Add Application',
        user: req.user
    });
}

function create(req, res) {
    var application = new Application(req.body);
    application.user = req.user;
    application.save(function (err) {
        if (err) {
            console.log("ERROR!: ", err)
            res.redirect(`/applications/new`);
        } else {
            console.log("It worked, no error!", application)
            res.redirect(`/applications`);
        }
    });
}

// function addApplication(req, res, next) {
//   req.application.applications.push(req.body);
//   req.application.save(function (err) {
//         res.redirect('applications/index');
//     });
// }

// function delApplication(req, res) {
//     Application.deleteOne(req.params.id);
//     res.redirect('/applications');
//   }

// function delApplication(id) {
//     applications.splice(id, 1);
//   }

function delApplication(req, res, next) {
    Application.findByIdAndDelete(req.params.id, (err) => {
        res.redirect('/applications');
    });
}