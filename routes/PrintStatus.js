var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var obj = {Code: 18};
  res.send(obj);        
  console.log(req.body);
});

module.exports = router;
