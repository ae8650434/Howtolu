const express = require("express");
const fs = require("fs");
const app = express();

const initialExcelFilePath = "../../public/excel/HowTo露.xlsx";

app.post("/", (req, res) => {
  var frontsenddata = req.body;
  console.log(frontsenddata);

  // 讀取初始 Excel 檔案的內容
  const initialExcelData = fs.readFileSync(initialExcelFilePath, "utf8");

  // 進行資料整理，將原始資料轉換成 xlsx 格式需要的資料結構
  let formattedData = frontsenddata.map((item) => ['商品',item.value]);
  console.log(formattedData)
});

module.exports = app;
