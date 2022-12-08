const express = require("express");
const router = new express.Router()
const Service = require('../Models/Service')
const Auth = require('../middleware/auth')
// const Auth = require('../middleware/Auth')
// const sellerauth = require('../middleware/sellerauth')

// app.post('/', upload.array('multi-files'), (req, res) => {
//   res.redirect('/');
// });

const {upload_Service}= require("../multer");
// const{upload_Video}= require('../multer')
const {addMachine,
getMachine,
getbyid,
 subcategorymachine,
 addService,
 getService,
 subcategoryservice} = require('../controller/servicecntrl')

  

router.post('/add', Auth, upload_Service.array('service_images', 10),addService)
router.get("/get/service", getService);
router.get('/get/:id',  getbyid)


//T0 GET PRODUCTS BY ID

router.get('/getbysubcat/:id', subcategoryservice)

// router.delete('/deletebyid/:id',ADAuth, deletebyid)
// router.delete('/deleteall',ADAuth, deleteall)

// // to get recomended for you
// router.get('/getrandom', getrandom)
// router.post('/search', searchProduct)



module.exports = router