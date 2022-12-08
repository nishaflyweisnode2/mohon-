const express = require("express");
const router = new express.Router()
const Machine = require('../Models/Machine')
const Auth = require('../middleware/auth')
// const Auth = require('../middleware/Auth')
// const sellerauth = require('../middleware/sellerauth')

// app.post('/', upload.array('multi-files'), (req, res) => {
//   res.redirect('/');
// });

const {upload_Machine}= require("../multer");
// const{upload_Video}= require('../multer')
const {addMachine,
getMachine,
getbyid,
 subcategorymachine, editMachine, searchProduct, trying} = require('../controller/machinecntrl')

  

router.post('/add', Auth, upload_Machine.array('machine_images', 10),addMachine)
router.get("/get/machine", getMachine);
router.get('/get/:id',  getbyid)
router.get('/getbyuser',Auth ,  trying)


//T0 GET PRODUCTS BY ID

router.get('/getbysubcat/:id', subcategorymachine)
router.patch('/edit/machine/:id', Auth, editMachine)
router.post('/search', searchProduct)

// router.delete('/deletebyid/:id',ADAuth, deletebyid)
// router.delete('/deleteall',ADAuth, deleteall)

// // to get recomended for you
// router.get('/getrandom', getrandom)
// router.post('/search', searchProduct)



module.exports = router