var express = require('express');
var router = express.Router();
var DB=require('../DB/db_connect.js');

router.use(express.json())

/* qna-board home */
router.get('/', function(req, res, next) {
    DB._show_boards({},function (data) {
        res.send(data);
    });
});

module.exports = router;
