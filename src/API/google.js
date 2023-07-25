// 引用express套件
var express = require("express");
// 設置路由
var app = express.Router();
var xlsx = require('xlsx');
// 處理Excel資料並轉換為JSON格式
function convertExcelToJson(filePath) {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    return jsonData;
  }
  
  // 提供API接口來取得處理過的資料
  app.get('/apii', (req, res) => {
    const filePath = './howlu.xlsx'; // 替換為您的Excel檔案路徑
    const jsonData = convertExcelToJson(filePath);
    res.json(jsonData);
  });

module.exports = app