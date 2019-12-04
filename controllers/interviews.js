var Application = require('../models/application');

module.exports = {
    create,
};


function create(req, res) {
    Application.findById(req.params.id, function (err, application) {
        console.log("REQ BODY: ", req.body)
        application.interviews.push(req.body);
        application.save(function (err) {
            console.log("SAVED APPLICATION: ", application)
            res.redirect(`/applications/${application._id}`);
        });
    });
}