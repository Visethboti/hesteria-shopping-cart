var express = require('express');
const { render } = require('../app');
var router = express.Router();
var Product = require('../models/product');

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


//  var products = Product.find();
//  res.render('shop/index', {title: 'Hesteria Shopping Cart', productList: products});
//  console.log(products);
});

module.exports = router;
