var Application = require('../models/application');

module.exports = {
    index,
    show,
    new: newApplication,
    create,
    delete: delApplication,
    edit,
    update
};

function update(req, res) {
    Application.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, function (err) {
        res.redirect(`${req.params.id}`);
    })
}

function edit(req, res) {
    Application.findById(req.params.id, function (err, application) {
        res.render('applications/edit', {
            application,
            idx: req.params.id,
            user: req.user
        })
    })
}

function index(req, res) {
    if (!req.user) {
        res.redirect('/')
    } else {
        Application.find({
            user: req.user._id
        }, function (err, applications) {
            res.render('applications/index', {
                applications,
                user: req.user
            });
        });
    }
}


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
            res.redirect(`/applications/new`);
        } else {
            res.redirect(`/applications`);
        }
    });
}


function delApplication(req, res, next) {
    Application.findByIdAndDelete(req.params.id, (err) => {
        res.redirect('/applications');
    });
}