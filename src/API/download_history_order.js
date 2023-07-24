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
  const excelData = XLSX.utils.sheet_to_json(worksheet);

  // 處理從前端接收的資料，並更新 Excel 檔案
  frontsenddata.forEach((item) => {
    const { value, quantity } = item;

    // 尋找與 value 相對應的商品名稱在 Excel 表格中的索引
    const itemIndex = excelData.findIndex((row) => row.物品 === value);
    console.log('999',itemIndex)

    if (itemIndex !== -1) {
      // 更新該商品對應的數量欄位
      const quantityCellAddress = XLSX.utils.encode_cell({ r: itemIndex, c: 1 });
      worksheet[quantityCellAddress] = { t: "n", v: quantity };
    } else {
      console.log("找不到相對應的商品名稱:", value);
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
  // fs.unlink(updatedExcelFilePath, (err) => {
  //   if (err) {
  //     console.log("刪除暫存檔案失敗：", err);
  //   }
  // });
});

module.exports = app;
