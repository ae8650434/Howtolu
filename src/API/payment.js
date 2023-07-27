// 連接資料庫
var express = require("express");
var app = express.Router();
var DB = require("../API/DB");
const { select } = require("react-cookies");

app.post('/', async function (req, res) {
    var today = new Date();
    // console.log("1111",today.slice(0,10))
    var insql =
        "INSERT INTO  `order`(mid,order_number,order_date,use_date,return_date,price,os) VALUES (?,?,?,?,?,?,?)";
    var sesql =
        "SELECT oid FROM `order` WHERE order_number=?";
    var upsql =
        " UPDATE `order` SET `order_number`=? WHERE oid=?";

    var olinsql =
        "INSERT INTO `order_list`(oid,pid,pname,p_img,fid,fname,f_img,p_quantity,f_quantity,p_os,f_os,p_price,f_price)VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";

    var midsql =
        "SELECT * FROM car WHERE mid=?";
    var delsql =
        "DELETE FROM car WHERE mid=?;"
    // 判斷租借日不等於今天，訂單狀態為 4未完成
    if (req.body.neworder.use_date != today) {
        req.body.neworder.os = 4
    }
    // 非同步處理  把結帳完成的資料 新增至資料庫order裡
    // resolve 查詢結果返回, reject 處理錯誤
    try {
        const insertOrderResult = await new Promise((resolve, reject) => {
            DB.query(
                insql,
                [
                    req.body.neworder.mid,
                    req.body.neworder.order_number,
                    today,
                    req.body.neworder.use_date,
                    req.body.neworder.return_date,
                    req.body.neworder.price,
                    req.body.neworder.os,
                ],
                (err, data) => {
                    if (err) reject(err);
                    else resolve(data);
                }
            );
        });

        // 更新order_number
        const orderId = insertOrderResult.insertId;
        const newOrderNumber = req.body.neworder.order_number + orderId.toString().padStart(3, '0');

        await new Promise((resolve, reject) => {
            DB.query(
                upsql,
                [newOrderNumber, orderId],
                (err, data) => {
                    if (err) reject(err);
                    else resolve(data);
                }
            );
        });

        // order_list項目
        for (let i = 0; i < req.body.newoederList.length; i++) {
            await new Promise((resolve, reject) => {
                DB.query(
                    olinsql,
                    [
                        orderId,
                        req.body.newoederList[i].pid,
                        req.body.newoederList[i].pname,
                        req.body.newoederList[i].p_img,
                        req.body.newoederList[i].fid,
                        req.body.newoederList[i].fname,
                        req.body.newoederList[i].f_img,
                        req.body.newoederList[i].p_quantity,
                        req.body.newoederList[i].f_quantity,
                        req.body.newoederList[i].p_os,
                        req.body.newoederList[i].f_os,
                        req.body.newoederList[i].p_price,
                        req.body.newoederList[i].f_price,
                    ],
                    (err, data) => {
                        if (err) reject(err);
                        else resolve(data);
                    }
                );
            });
        }

        // 清除該mid購物車商品
        DB.query(midsql,
            [req.body.neworder.mid],
            (err, data) => {
                // console.log("刪除的mid:",req.body.neworder.mid);
                if (err) {
                    console.log("錯誤：", err);
                } else {
                    DB.query(delsql,
                        [req.body.neworder.mid],
                        (err, data) => {
                            if (err) {
                                console.log("刪除失敗：", err);
                            } else {
                                console.log("刪除成功")
                                return res.status(200).send("刪除成功");
                            }

                        })
                }
            })


    } catch (err) {
        console.log("錯誤：", err);
        return res.status(500).send("新增失敗");
    }
});

// console.log("看一下js", req.body)


module.exports = app;
