const express = require('express');
const router = express.Router();
const { sendOtpToUser, verifyOtpAndSaveUser, forgotpassword, verifyforgotpswd, } = require('./otpcntrl');

console.log("ndyudsifwseuyf")
router.route('/sendOtp').post(sendOtpToUser);
router.route('/verifyOtp').post(verifyOtpAndSaveUser);
router.route('/forgotpassword').post(forgotpassword)
router.route('/verifypaswrd').patch(verifyforgotpswd)
// router.get('/liveLocation', authMiddleware, getLiveLocation);
// router.patch('/updateDetails', authMiddleware, updateUserDetails);
// router.get('/me',authMiddleware,me);

module.exports = router;