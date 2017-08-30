var express = require('express');
var router = express.Router();

router.get('/api/v1', function(req, res, next) {
    res.render('index');
})

module.exports = router;