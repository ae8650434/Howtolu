// 連線資料庫
var mysql = require('mysql');
var sql = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'howtolu'
})
sql.connect(function (err) {
    if (err) {
        console.log('無法連線', err);
    } else {
        console.log('資料庫連線成功');
    }
})

module.exports = sql;