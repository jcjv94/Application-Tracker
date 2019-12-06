var Application = require('../models/application');

module.exports = {
    create,
};


function create(req, res) {
    Application.findById(req.params.id, function (err, application) {
        application.interviews.push(req.body);
        application.save(function (err) {
            res.redirect(`/applications/${application._id}`);
        });
    });
}