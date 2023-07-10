// 連接資料庫
var DB = require('../API/DB')
var express = require('express')
var app = express.Router()
var bcrypt = require('bcrypt')


app.post('/member', express.urlencoded(), (req, res) => {
  // 用變數抓取前端資料
  var account = req.body.account
  var password = req.body.password

// res.send('Hello')
  // 
  var sql = "SELECT * FROM member WHERE tel = ?"
  // var sql = "SELECT * FROM member WHERE tel = '0912345678'"
  DB.query(sql , [account, password], (err, data)=>{
    // var rowpassword = bcrypt.compareSync(password, data[0].password)
    
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    if (data.length === 0) {
      // 用户不存在的情况
      res.status(404).send('User Not Found');
      return;
    }
  
    var isPasswordMatched = bcrypt.compareSync(password, data[0].password);
    if (isPasswordMatched) {
      // 密码正确的情况
      // 执行其他操作或返回成功响应
      res.send('Login Successful');
    } else {
      // 密码不正确的情况
      res.status(401).send('Invalid Password');
    }
  
  })

})

module.exports = app;