const router = require('express').Router();
const verifyUser = require('../configs/verify');
const profileController = require('../controllers').profile;
const absensiController = require('../controllers').absensi;

router.get('/', verifyUser.isLogin, absensiController.absensi);
router.get('/profile', verifyUser.isLogin, profileController.profile);

module.exports = router;