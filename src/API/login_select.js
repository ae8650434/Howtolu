// 連接資料庫
var DB = require("../API/DB");
var express = require("express");
var app = express.Router();
var bcrypt = require("bcrypt");
var session = require("express-session");
const axios = require("axios");

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.post("/member", express.urlencoded(), (req, res) => {
  // 用變數抓取前端資料
  var account = req.body.account;
  var password = req.body.password;

  console.log('Account:', account);
  console.log('Password:', password);

  // 在这里执行其他操作，例如查询数据库、验证账号密码等

  // 返回响应给前端
  res.send('Received account and password');

  // console.log('Hello')
  //
  // var sql = "SELECT * FROM member WHERE tel = ?";
  // DB.query(sql, [account], (err, data) => {
  //   if (err) {
  //     console.error(err);
  //     res.status(500).send("Internal Server Error");
  //     return;
  //   }
  
  //   if (data.length === 0) {
  //     // 用户不存在的情况
  //     console.log('用戶不存在')
  //     // console.log(account)
  //     // console.log(password)
  //     res.status(404).send("User Not Found");
  //     return;
  //   }
  
  //   var hashedPassword = data[0].password;
  //   var isPasswordMatched = bcrypt.compareSync(password, hashedPassword);
  //   if (isPasswordMatched) {
  //     // 密码正确的情况
  //     // 执行其他操作或返回成功响应
  //     req.session.userId = data[0].id;
  //     req.session.userName = data[0].name;
  //     req.session.userPassword = hashedPassword;
  //     res.send("Login Successful");
  //   } else {
  //     // 密码不正确的情况
  //     res.status(401).send("Invalid Password");
  //   }
  // });
});

module.exports = app;
