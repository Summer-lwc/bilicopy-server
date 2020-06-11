var dbConfig = require('../util/dbconfig');


getVideo = (req,res) => {
    var sql = 'select * from video';
    var sqlArr = [];
    var callBack = (err,data) => {
      if(err){
        console.log('连接出错',err);
      }else{
        res.send({
          'list': data
        })
      }
    }
  dbConfig.sqlConnect(sql, sqlArr, callBack);
}

module.exports = {getVideo};