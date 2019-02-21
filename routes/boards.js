var express = require('express');
var app = express();
var router = express.Router();
var DB=require('../DB/db_connect.js');
router.use(express.json())

/* qna-board home */
router.get('/', function(req, res, next) {
    DB._show_boards({},function (data) {
        res.send(data);
    });
});
router.get('/:board_id/posts', function(req, res, next) {
    DB._searchData("All",function (data) {
        res.send(data);
    });
});

/* request one post */
router.get('/:board_id/posts/:id', function(req, res, next) {
    DB._searchData(req.params.id,function (data) {
        res.send(data);
    });
    //res.send(req.params.id);
});

/* write one post */
router.post('/:board_id/posts', function(req, res, next) {
    DB._addData(req.body)
    res.send(req.body);
});

module.exports = router;
