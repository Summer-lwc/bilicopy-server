var dbConfig = require('../util/dbconfig');
const jwt = require('jsonwebtoken');


getUser = (req,res) => {
    var sql = 'select * from user where username = "' + req.body.username +'"';
    var sqlArr = [];
    var callBack = (err,data) => {
      if(err){
        console.log('连接出错',err);
      }else{
          if(data[0].pwd && data[0].pwd == req.body.pwd){
            const token = jwt.sign(req.body, "bilicopy", { expiresIn: '1day' });
            res.send({
                code:200,
                message:'登陆成功',
                token: token,
                userImgurl:data[0].imgUrl,
                username:data[0].username
            });
          }else{
            res.send({
                code: 401,
                message:'账号/密码错误'
            });
          }
      }
    }
  dbConfig.sqlConnect(sql, sqlArr, callBack);
}

insertUser = (req,res) => {
    var sql = 'INSERT INTO user (username,pwd) VALUES ("' + req.body.username + '","' + req.body.pwd +'")';
    var sqlArr = [];
    var callBack = (err,data) => {
      if(err){
        console.log('连接出错',err);
      }else{
        const token = jwt.sign(req.body, "bilicopy", { expiresIn: '1day' });
            res.send({
                code:200,
                message:'注册登陆成功',
                token: token,
                userImgurl:data[0].imgUrl,
                username:data[0].username
            });
      }
    }
  dbConfig.sqlConnect(sql, sqlArr, callBack);
}

module.exports = {getUser,insertUser};