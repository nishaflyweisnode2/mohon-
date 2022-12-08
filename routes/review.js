const router = require('express').Router();
const Review = require('../controller/reviewcntrl');
const Auth = require('../middleware/auth');
const ADAuth = require('../middleware/adauth')
const{addReview, getProductsReviews, getReviewsofUser, GetAllReview, getallreviewsmadebyuser} = require('../controller/reviewcntrl')
// const reviewValidator = require('../middlewares/validators/review');

// router.post('/', Auth.user, addReview, reviewController.addReview);
// const {addReview} = require('../controller/reviewcntrl')
// router.post('/addreview', Auth, addReview )
// router.get('/', auth.user, reviewController.getReviewsByUser);
// router.get('/product/:productId', reviewController.getProductsReviews);
router.post('/addreview', Auth, addReview)

// to get review of the specific product by id 
router.get('/seereview/:productId', getProductsReviews)
// router.get('/getreview', Auth, getReviewsofUser)
router.get('/getallreviewsmadebyuser', Auth, getallreviewsmadebyuser)



router.get('/getall', GetAllReview)


module.exports = router;