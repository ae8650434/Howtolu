var DB = require("../API/DB");
var express = require("express");
var app = express.Router();

var sql = 'SELECT * FROM member WHERE tel = ?'
var osql = 'SELECT * FROM `order` LEFT JOIN member ON `order`.mid = member.mid where member.mid = ?'
app.get('/', (req,res) => {
    var tel = req.query.account
    console.log('777',tel)
    DB.query(sql, [tel], (err, data) => {
        if(err) {
            console.log(err)
            return res.status(500).send('error')
        }else{
            console.log(data)
            DB.query(osql, [data[0].mid], (err, result) => {
            if (err) {
                console.log(err)
                return res.status(500).send('error')
            }else if(result.length == 0){
                return res.status(401).send('沒有歷史訂單')
            }
            else{
                result.forEach((item) => {
                    item.use_date = addOneDay(item.use_date);
                    item.return_date = addOneDay(item.return_date);
                });
                console.log('result', result)
                return res.status(200).json({data: result})
            }
            })
        }
    })
})

app.get('/order_list', (req,res) => {
    var order_number = req.query.order_number
    console.log('3333',order_number)
    console.log(typeof order_number)
    var olsql = 'SELECT * FROM `order` LEFT JOIN `order_list` ON `order`.oid = `order_list`.oid WHERE `order_number` = ?'
    DB.query(olsql, [order_number], (err, data) => {
        if(err) {
            return res.status(500).send('error')
        }else {
            return res.status(200).json(data)
        }
    })
}) 

// 自訂函式：將日期加一天
function addOneDay(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    // 取得下個月的第一天日期
    const nextMonthDate = new Date(year, month + 1, 1);

    // 取得當月的最後一天日期
    const lastDayOfMonth = new Date(nextMonthDate - 1);

    // 判斷日期是否超過當月的最後一天
    if (day >= lastDayOfMonth.getDate()) {
        // 超過最後一天，日期歸為1，月份加1
        date.setDate(1);
        date.setMonth(month + 1);

        // 判斷是否超過12個月，若是則年份加1，月份歸為1
        if (date.getMonth() >= 12) {
            date.setFullYear(year + 1);
            date.setMonth(0);
        }
    } else {
        // 日期未超過最後一天，直接加1天
        date.setDate(day + 1);
    }

    return date.toISOString().split('T')[0];
}

module.exports = app;