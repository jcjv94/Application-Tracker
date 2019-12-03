var express = require('express');
var router = express.Router();
var applicationsCtrl = require('../controllers/applications');


// router.get('/', (req, res)=>{
//     res.redirect(`/applications/${req.user._id}`);
// });

router.get('/new', applicationsCtrl.new);
router.get('/', applicationsCtrl.index);


router.get('/:id', applicationsCtrl.show);

router.post('/', applicationsCtrl.create);

router.delete('/:id', applicationsCtrl.delete);

module.exports = router;