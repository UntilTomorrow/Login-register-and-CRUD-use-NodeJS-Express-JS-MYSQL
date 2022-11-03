const router = require('express').Router();
const verifyUser = require('../configs/verify');
const profileController = require('../controllers').profile;
const storeController =  require('../controllers').store;


router.get('/', verifyUser.isLogin, storeController.store);
router.get('/profile', verifyUser.isLogin, profileController.profile);
module.exports = router;