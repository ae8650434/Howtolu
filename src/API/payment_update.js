var DB = require("../API/DB");
var express = require("express");
var app = express.Router();



app.put('/', async (req, res) => {
    try {
      const cartMid = req.body.cartMid;
  
      for (let i = 0; i < cartMid.length; i++) {
        const { pid, reserve, quantity } = cartMid[i];
        const newReserve = reserve - quantity;
  
        await updateProduct(pid, newReserve);
      }
  
      console.log("庫存更新成功");
      res.send("庫存更新成功");
    } catch (err) {
      console.error("庫存更新失敗:", err);
      res.status(500).send("庫存更新失敗");
    }
  });
  
  const updateProduct = async (pid, reserve) => {
    const upsql = "UPDATE product SET reserve=? WHERE pid=?";
    return new Promise((resolve, reject) => {
      DB.query(upsql, [reserve, pid], (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  };


module.exports = app;