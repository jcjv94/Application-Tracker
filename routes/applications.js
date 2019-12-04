var express = require('express');
var router = express.Router();
var applicationsCtrl = require('../controllers/applications');


// router.get('/', (req, res)=>{
//     res.redirect(`/applications/${req.user._id}`);
// });

router.get('/new', applicationsCtrl.new);

router.get('/', applicationsCtrl.index);

router.get('/:id', applicationsCtrl.show);

router.get('/:id/edit', applicationsCtrl.edit)

router.post('/', applicationsCtrl.create);

router.delete('/:id', applicationsCtrl.delete);

router.put('/:id', applicationsCtrl.update);

module.exports = router;