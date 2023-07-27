const { isLabelWithInternallyDisabledControl } = require("@testing-library/user-event/dist/utils");
var DB = require("../API/DB");
var express = require("express");
var app = express.Router();

function insertDataToDB(data) {
    var use_date = new Date()
    // 解析 use_date 的年份、月份和日期
    var year = use_date.getFullYear();
    var month = use_date.getMonth();
    var day = use_date.getDate();

    // 將月份加一，處理十二月的情況
    month += 1;
    if (month === 12) {
        year += 1;
        month = 1;
    }

    day += 3;
    var lastDayOfMonth = new Date(year, month + 1, 0).getDate();

    // 判斷 day 是否大於該月的最後一天，若是則月份加一並將 day 設置為 1
    if (day > lastDayOfMonth) {
        month += 1;
        day = 1;
    }

    use_date.setFullYear(year);
    use_date.setMonth(month);
    console.log('888',use_date)

    var return_date = new Date()
    return_date.setMonth(month)
    return_date.setDate(day)
    console.log('332', return_date)
    

    var sql = 'INSERT INTO `car`(`mid`, `pid`, `fid`, `c_day`, `use_date`, `return_date`, `quantity`) VALUES (?,?,?,?,?,?,?)';
    // 判斷是哪種產品，選擇對應的 quantity
    if (data.p_quantity !== null) {
        quantity = data.p_quantity;
    } else if (data.f_quantity !== null) {
        quantity = data.f_quantity;
    }
    
    console.log('quantity', quantity)
    DB.query(sql, [data.mid, data.pid, data.fid, 3, use_date, return_date, quantity], (err, result) => {
        if (err) {
            console.error('Error inserting data to database:', err);
        } else {
            console.log('Successfully inserted data to database:', result);
        }
    });
}

app.post('/', (req, res) => {
    console.log('999', req.body);
    req.body.forEach((data) => {
        insertDataToDB(data);
    });

    return res.status(200).send('success add to cart');
});



module.exports = app;