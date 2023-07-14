var DB = require("../API/DB");
var express = require("express");
var app = express.Router();
var nodemailer = require("nodemailer");

// 创建 Nodemailer 传输对象
function sendVerificationCode(mail, code, callback) {
  // 创建 Nodemailer 传输对象
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bWinne0802@gmail.com",
      pass: "hyvvabusmaksnryz",
    },
  });

  // 设置邮件选项
  var mailOptions = {
    from: "How To 露",
    to: mail,
    subject: "How To 露 忘記密碼－驗證碼",
    text: "您的驗證碼: " + code,
  };

  // 实际发送邮件的操作
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.error("Error sending email:", err);
      callback(err);
    } else {
      console.log("Email sent:", info);
      callback(null);
    }
  });
}

function generateRandomCode() {
    const length = 6;
    let code = "";
    for (let i = 0; i < length; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      code += randomDigit;
    }
    return code;
  }

//SELECT * FROM member LEFT JOIN email_random ON member.mid = email_random.mid WHERE email = ?;

app.get("/:mail", function (req, res) {
  var mail = req.params.mail;
  //   console.log(mail)
  var sql = "SELECT * FROM member WHERE mail = ?";
  var msql =
    "SELECT * FROM email_random where mid = ?";
  var insertmsql =
    "INSERT INTO email_random(mid, email, random) VALUES (?,?,?)";
  var updatesql = "UPDATE email_random SET random = ? WHERE email = ?";
  // console.log("我想看一下",req.params)
  DB.query(sql, [mail], function (err, data) {
    console.log('first',data)
    if (err) {
      console.log("X");
      return res.status(400).send("信箱尚未被註冊");
    } else if (data.length <= 0) {
      return res.status(400).send("信箱尚未被註冊");
    } else {
      // return res.status(201).send("郵件發送成功成功");
      if (data.length > 0) {
        var random = generateRandomCode();
        sendVerificationCode(mail, random, (err) => {
          if (err) {
            return res.status(500).send("郵件發送失敗");
          } else {
            DB.query(msql, [data[0].mid], (err, result) => {
              if (err) {
                console.log("X");
                return res.status(402).send("查詢失敗");
              } else {
                if (result.length == 0) {
                  DB.query(insertmsql, [data[0], mail, random], (err, s) => {
                    if (err) {
                      console.log("X");
                      return res.status(400).send("插入失敗");
                    } else {
                      console.log("O");
                      req.session.reset = data[0]
                      return res.status(200).json({random: random});
                    }
                  });
                } else {
                  DB.query(updatesql, [random, mail], (err, q) => {
                    if (err) {
                      console.log("X");
                      return res.status(401).send("更新失敗");
                    } else {
                      console.log("O"); 
                      req.session.reset = data[0]
                      console.log('second',req.session.reset)
                      return res.status(200).json({random: random});
                    }
                  });
                }
              }
            });
          }
        });
      }
    }
    
});})


module.exports = app;
