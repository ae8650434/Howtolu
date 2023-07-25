const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path"); // 添加此行以引入 path 模組
const XLSX = require("xlsx");

const initialExcelFilePath = "../../public/excel/HowTo露.xlsx";

app.post("/", (req, res) => {
  const frontsenddata = req.body;
  console.log('888',frontsenddata);

  // 讀取初始 Excel 檔案的內容
  const workbook = XLSX.readFile(initialExcelFilePath);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  

  // 使用 XLSX.utils.sheet_to_json 函數來獲取 Excel 表格的 JSON 物件表示
  const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 'A' });
  console.log('excel', excelData)


  // 處理從前端接收的資料，並更新 Excel 檔案
  frontsenddata.forEach((item) => {
    const { value, quantity } = item;
  
     // 尋找與 value 相對應的商品名稱在 Excel 表格中的索引，從第二行開始（排除表頭）
     let rowIndex = 1;
     for (const row of excelData) {
       rowIndex++;
       console.log('row', rowIndex)
       if (row['A'] === value) {
         // 更新該商品對應的數量欄位
         const quantityCellAddress = `B${rowIndex-1}`;
         const cCellAddress = `C${rowIndex-1}`;
 
         // 如果該欄位沒有值，則不覆寫
         if (!excelData[quantityCellAddress]) {
          excelData[quantityCellAddress] = { t: "n", v: quantity };
         }
        //  if (!excelData[cCellAddress]) {
        //   excelData[cCellAddress] = { t: "n", v: 1 };
        //  }
 
         console.log('quantityb', quantityCellAddress);
         console.log('quantityc', cCellAddress);
 
         break; // 找到對應商品後立即跳出迴圈
       }
     }
   })

  // 將更新後的工作簿儲存為新的 Excel 檔案
  const updatedExcelFilePath = path.resolve(__dirname, "../../public/excel/HowTo露.xlsx");
  XLSX.writeFile(workbook, updatedExcelFilePath);

  // 將更新後的 Excel 檔案回傳給前端供下載
  const fileStream = fs.createReadStream(updatedExcelFilePath);
  res.setHeader("Content-Disposition", "attachment; filename=UpdatedExcel.xlsx");
  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  fileStream.pipe(res);

  // 清理：刪除暫存的更新後 Excel 檔案
  // fs.unlink(updatedExcelFilePath, (err) => {
  //   if (err) {
  //     console.log("刪除暫存檔案失敗：", err);
  //   }
  // });
});

module.exports = app;
