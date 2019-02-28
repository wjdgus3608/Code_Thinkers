var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
// 'mongodb://192.168.0.8:2001/local' 컨테이너 환경 url
// 'mongodb://localhost:27017/local' 호스트 환경 url
// 'mongodb://testUser:test@localhost:27017/board' 호스트(user=testUser pwd=test)
exports._addData=function(data) {
    MongoClient.connect('mongodb://testUser:test@localhost:27017/board',{ useNewUrlParser: true },function(err,db){
        if(err){
            console.log(err);
        }
        else {
           // var michael = {name:'thisisisisi', age:2000, gender:'T'};
            db.db('board').collection('Posts').insertOne(data);
        }
        db.close();
    })

}

exports._deleteData=function(key) {
    MongoClient.connect('mongodb://testUser:test@localhost:27017/board',{ useNewUrlParser: true },function(err,db){
        if(err){
            console.log(err);
        }
        else {
            db.db('board').collection('Posts').deleteOne(key);
        }
        db.close();
    })

}

exports._searchData=function(key,callback) {
    MongoClient.connect('mongodb://testUser:test@localhost:27017/board',{ useNewUrlParser: true },function(err,db){
        if(err){
            console.log(err);
        }
        else {
          if(key=="All")
          {
            db.db('board').collection('Posts').find(key).toArray(function(err, result) {
                if (err) throw err;
                for(var temp:result)
                {

                }
                callback(result);
            });
          }
          else {
            db.db('board').collection('Posts').find({"_id":new ObjectId(key)}).toArray(function(err, result) {
                if (err) throw err;
                callback(result);
            });
          }
        }
        db.close();
    })

}

exports._show_boards=function(key,callback) {
    MongoClient.connect('mongodb://testUser:test@localhost:27017/board',{ useNewUrlParser: true },function(err,db){
        if(err){
            console.log(err);
        }
        else {
            db.db('board').collection('boards').find(key).toArray(function(err, result) {
                if (err) throw err;
                callback(result);
            });
        }
        db.close();
    })

}

/*_addData({name:"ttt", age:"123"});
_deleteData({name:"abc"});
_searchData({name:"ttt"},function (data) {
  console.log(data);
});*/
