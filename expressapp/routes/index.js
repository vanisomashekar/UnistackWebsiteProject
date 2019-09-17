var express = require('express');
var router = express.Router();
var university=require('../models/Universities');

/* GET home page. */
router.get('/', function(req, res, next) {
  var universities= university.find();
  res.render('index', { title: 'Express' });
});


module.exports = router;
