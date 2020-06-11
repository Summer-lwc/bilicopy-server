const mysql = require('mysql');

module.exports = {
    config:{
        host:'localhost',
        port: 3306,
        user:'root',
        password: '12345678',
        database: 'bilicopy'
    },
    sqlConnect: function(sql,sqlArr,callBack){
        var pool = mysql.createPool(this.config);
        pool.getConnection((err, conn) => {
            console.log('12345');
            if(err){
                console.log('连接失败');
                return;
            };
            conn.query(sql,sqlArr,callBack);
            conn.release();
        });
    }
}