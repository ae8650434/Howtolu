const express = require('express')
const {sendMail} = require("node-send-email");

const app = express();
app.use(express.json());

var sendemail = document.getElementById('sendemail')
sendemail.onclick(() => {
  app.post("/api/email", async (req, res) => {
    const code = String(Math.floor(Math.random() * 1000000)).padEnd(6, "0"); //生成随机验证码
    //发送邮件需要的入参
    const params = {
      //邮箱类型，@qq.com就传qq，@163.com就是传163，不传的话默认为qq，
      //其余类型可以在node_modules/node-send-email/lib/service.js中找到。
      type: "gmail",
      // 发件人
      name: "Wiine",
      // 发件箱，要与收件箱邮箱类型一致
      from: "bWinner0802@gmail.com",
      // 发件箱smtp,需要去邮箱—设置–账户–POP3/SMTP服务—开启—获取stmp授权码
      smtp: "hyvvabusmaksnryz",
      // 发送的邮件标题
      subject: "验证码",
      // 收件箱，要与发件箱邮箱类型一致
      to: "angel08210901@gmail.com",
      // 邮件内容，HTML格式
      html: `
            <p>您好！</p>
            <p>您的验证码是：<strong style="color:orangered;">${code}</strong></p>
            <p>如果不是您本人操作，请无视此邮件</p>
        `,
    };

    await sendMail(params, (result) => {
      if (result) {
        res.send({ code: 1, msg: "发送验证码成功" });
      } else {
        res.send({ code: 0, msg: "发送验证码失败，请稍后重试" });
      }
    });
  });
});


app.get("/", (req, res) => {
    res.sendFile("test.html");
  });

app.listen(3000, () => {
    console.clear();
    console.log("Start", new Date().toLocaleTimeString());
});