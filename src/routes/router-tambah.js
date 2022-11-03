const router = require('express').Router();
const verifyUser = require('../configs/verify');
const profileController = require('../controllers').profile;
const tambahController = require('../controllers').tambah;

router.get('/profile', verifyUser.isLogin, profileController.profile);
router.get('/', verifyUser.isLogin, tambahController.formtambah);
router.post('/save', verifyUser.isLogin, tambahController.savetambah);
router.post('/edit', verifyUser.isLogin, tambahController.edittambah);
module.exports = router;