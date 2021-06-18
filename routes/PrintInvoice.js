var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  obj = { Code: "Success" };
  setTimeout(function() {
    res.send(obj);
  }, 5000);  
});

module.exports = router;
