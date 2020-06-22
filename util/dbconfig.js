const mysql = require('mysql');

module.exports = {
    config:{
        host:'47.100.38.187',
        port: 3306,
        user:'root',
        password: '836651064.Lwc',
        database: 'bilicopy',
        multipleStatements: true 
    },
    sqlConnect: function(sql,sqlArr,callBack){
        var pool = mysql.createPool(this.config);
        pool.getConnection((err, conn) => {
            if(err){
                console.log('连接失败');
                return;
            };
            conn.query(sql,sqlArr,callBack);
            conn.release();
        });
    }
}