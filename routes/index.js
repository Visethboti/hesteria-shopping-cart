var express = require('express');
const { render } = require('../app');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var Product = require('../models/product');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find((err, docs) => {
    if(err){
      res.send("error");
    } else {
      var productChunks = [];
      var chunkSize = 4;
      for(var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize))
      }
      console.log(productChunks);
      res.render('shop/index', { title: 'Hesteria Shopping Cart', productList: productChunks }); 
    }
  });
});

router.get('/user/signup', function(req, res, next) {
  var messages = req.flash('error');
  res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0} );
});

router.post('/user/signup', passport.authenticate('local.signup', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true
}));

// router.post('/user/signup', function(req, res, next) {
//   console.log(req.body.password);
// });

router.get('/user/profile', function(req, res, next) {
  res.render('user/profile');
})

module.exports = router;
