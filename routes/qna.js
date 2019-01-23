var express = require('express');
var router = express.Router();
var DB=require('../DB/db_connect.js');

router.use(express.json())

/* qna-board home */
router.get('/', function(req, res, next) {
    res.send('This is qna-home page');
});

/* qna-board list page */
router.get('/posts', function(req, res, next) {
    DB._searchData({},function (data) {
        res.send(data);
    });
});

/* request one post */
router.get('/posts/:id', function(req, res, next) {
    DB._searchData({_id:req.params.id},function (data) {
        res.send(data);
    });
    //res.send(req.params.id);
});

/* write one post */
router.post('/posts', function(req, res, next) {
    DB._addData(req.body)
    res.send(req.body);
});

module.exports = router;
