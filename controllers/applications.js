var Application = require('../models/application');
var User = require('../models/user');

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
    // req.body.done = req.body.dont === 'on';
    // console.log(req.body)
    // Application.update(req.params.id, req.body);
    // res.redirect(`${req.params.id}`);
    
    Application.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err){
        res.redirect(`${req.params.id}`);
    })
}

function edit(req, res){
    // const application = Application.findOne(req.params.id);
    // res.render('applications/edit',{
    //     application,
    //     idx: req.params.id,
    //     user: req.user
    // });

    Application.findById(req.params.id, function(err, application){
        res.render('applications/edit', {
            application,
        idx: req.params.id,
        user: req.user
        })
    })
}

function index(req, res) {
    if(!req.user){
        res.redirect('/')
    } else {
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
            console.log("ERROR!: ", err)
            res.redirect(`/applications/new`);
        } else {
            console.log("It worked, no error!", application)
            res.redirect(`/applications`);
        }
    });
}


function delApplication(req, res, next) {
    Application.findByIdAndDelete(req.params.id, (err) => {
        res.redirect('/applications');
    });
}