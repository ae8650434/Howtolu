// 連接資料庫
var DB = require("../API/DB");
var express = require("express");
var app = express.Router();
var bcrypt = require("bcrypt");
// var password = 'a12345678'

// console.log(password)


app.get('/checkPhone/:phone/:email', (req, res) => {
  const mphone = req.params.phone;
  const mail = req.params.email
  // 在这里编写根据手机号检查是否已注册的逻辑

  var checkUserSql = "SELECT * FROM member WHERE tel = ? OR mail = ?";
     DB.query(checkUserSql, [mphone, mail], (err, rows) => {
       if (err) {
         console.error(err);
         return res.status(500).send('Error during user check');
       }
       
       if (rows.length > 0) {
         // 手機號碼已存在，返回錯誤訊息
         return res.status(400).send('User with this phone number already exists');
       }else {
         return res.status(200).json({ message: '手机号可用' });
       }

      })
    })

app.post("/", (req, res) => {
  var mname = req.body.mname;
  var phone = req.body.phone;
  var email = req.body.email;
  var rowpassword = req.body.password;
  var date = new Date();
  // 密碼加密
  const saltRounds = 10;
  bcrypt.hash(rowpassword, saltRounds, (err, hash) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error during password hashing");
      return;
    }
    
     // 先查詢資料庫是否已存在相同手機號碼的用戶


    var sql =
      "INSERT INTO member(name, tel, password, mail, register_time) VALUES (?,?,?,?,?)";
    DB.query(sql, [mname, phone, hash, email, date], (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error during registration');
      }

      res.status(200).send('Registration successful');
    });
  });
});


module.exports = app;
