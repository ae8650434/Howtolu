const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path"); // 添加此行以引入 path 模組
const XLSX = require("xlsx");
const ExcelJS = require("exceljs");

const initialExcelFilePath = "../../public/excel/HowTo露.xlsx";

app.post("/", (req, res) => {
  var frontsenddata = req.body;
  console.log(frontsenddata);

   // 讀取初始 Excel 檔案的內容
   const workbook = XLSX.readFile(initialExcelFilePath);
   const worksheet = workbook.Sheets[workbook.SheetNames[0]];
 
   // 處理從前端接收的資料，並更新 Excel 檔案
   frontsenddata.forEach((item) => {
     const { key, value, quantity } = item;
     const cellAddress = worksheet[key]; // 根據 key（例如 "A1"）取得儲存格位置
    // 判斷是商品名稱還是數量，並進行填入處理
    if (key === 'pname' || key === 'fname') {
      // 尋找與 value 相對應的儲存格
      let matchingCell = null;
      for (const cell in worksheet) {
        if (worksheet.hasOwnProperty(cell)) {
          const cellValue = worksheet[cell].v;
          if (cellValue === value) {
            matchingCell = cell;
            break;
          }
        }
      }

      if (matchingCell) {
        // 找到相對應的儲存格後，取得其後一格的 key
        const nextKey = String.fromCharCode(matchingCell.charCodeAt(0) + 1) + matchingCell.substring(1);
        // 確保下一格儲存格存在
        if (worksheet[nextKey]) {
          // 將數量資料寫入到下一格
          worksheet[nextKey].v = quantity;
        } else {
          console.log('下一格儲存格不存在:', nextKey);
        }
      } else {
        console.log('找不到相對應的儲存格:', value);
      }
    }
   });
 
   // 將更新後的工作簿儲存為新的 Excel 檔案
   const updatedExcelFilePath = path.resolve(__dirname, "../../public/excel/HowTo露.xlsx");
   XLSX.writeFile(workbook, updatedExcelFilePath);
 
   // 將更新後的 Excel 檔案回傳給前端供下載
   const fileStream = fs.createReadStream(updatedExcelFilePath);
   res.setHeader("Content-Disposition", "attachment; filename=UpdatedExcel.xlsx");
   res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
   fileStream.pipe(res);
 
   // 清理：刪除暫存的更新後 Excel 檔案
  //  fs.unlink(updatedExcelFilePath, (err) => {
  //    if (err) {
  //      console.log("刪除暫存檔案失敗：", err);
  //    }
  //  });
 });

module.exports = app;
