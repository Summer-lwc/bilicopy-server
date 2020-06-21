var dbConfig = require('../util/dbconfig');


getVideoList = (req,res) => {
  var pageSize = req.query.pageSize;
  var currentPage = req.query.currentPage;
  var keyword = req.query.keyword;
  var start = (currentPage*pageSize);
  var pagesql = 'SELECT COUNT(*) FROM video WHERE title LIKE "%'+keyword+'%";SELECT * FROM video WHERE title LIKE "%'+keyword+'%" LIMIT '+start+','+pageSize;
    var sqlArr = [];
    var callBack1 = async (err,data) => {
      if(err){
        console.log('连接出错',err);
      }else{
        var total = data[0][0]['COUNT(*)'];
        var videoList = data[1];
        res.send(
          JSON.stringify({
            msg:'操作成功',
            status:'200',
            totalPages:total,
            videoList:videoList}));
      }
    }
  dbConfig.sqlConnect(pagesql, sqlArr, callBack1);
}

module.exports = {getVideoList};