const router = require('express').Router();
const verifyUser = require('../configs/verify');
const profileController = require('../controllers').profile;
const editController = require('../controllers').edit;

router.get('/profile', verifyUser.isLogin, profileController.profile);
router.get('/', verifyUser.isLogin, editController.formedit);
router.post('/save', verifyUser.isLogin, editController.saveedit);
module.exports = router;