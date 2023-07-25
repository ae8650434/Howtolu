const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const XLSX = require("xlsx");

const initialExcelFilePath = "../../public/excel/HowTo露.xlsx";

app.post("/", (req, res) => {
  const frontsenddata = req.body;
  console.log("888", frontsenddata[0].quantity);

  // 讀取初始 Excel 檔案的內容
  const workbook = XLSX.readFile(initialExcelFilePath);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  // 取得 B1 和 C1 的內容
  // worksheet["B1"] = { t: "s", v: "數量(填入數字即可)" };
  // worksheet["C1"] = { t: "s", v: "金額" };

  // 使用 XLSX.utils.sheet_to_json 函數來獲取 Excel 表格的 JSON 物件表示
  const excelData = XLSX.utils.sheet_to_json(worksheet, { header: "A" });
  console.log("excel", excelData);

  // 處理從前端接收的資料，並更新 Excel 檔案
  frontsenddata.forEach((item) => {
    const { value, quantity } = item;
    console.log("item", item.quantity);

    // 尋找與 value 相對應的商品名稱在 Excel 表格中的索引，從第二行開始（排除表頭）
    let rowIndex = 1;
    let foundMatch = false;
    for (const row of excelData) {
      rowIndex++;
      console.log("row", rowIndex);
      if (row["A"] === value) {
        // 更新該商品對應的數量欄位
        const quantityCellAddress = `B${rowIndex - 1}`;
        const cCellAddress = `C${rowIndex - 1}`;

        // 修改 Excel 資料
        worksheet[quantityCellAddress] = { t: "n", v: quantity };
        console.log("quantityb", quantityCellAddress);
        console.log("quantityc", cCellAddress);

        foundMatch = true;
        break; // 找到對應商品後立即跳出迴圈
      }
    }
  });

  // 創建一個新的工作簿 updatedWorkbook
  const updatedWorkbook = XLSX.utils.book_new();
  // 複製原始工作表 worksheet 到新的工作簿 updatedWorkbook
  const copiedWorksheet = XLSX.utils.sheet_add_json(
    XLSX.utils.sheet_to_json(XLSX.utils.sheet_to_json(worksheet)),
    excelData,
    { skipHeader: true, origin: "A2" } // 跳過表頭並將資料從 A2 開始寫入
  );
  XLSX.utils.book_append_sheet(updatedWorkbook, worksheet, "UpdatedSheet");

  // 將更新後的工作簿儲存為新的 Excel 檔案，不覆蓋初始 Excel 檔案
  const updatedExcelFilePath = path.resolve(__dirname, "../../public/excel/UpdatedHowTo露.xlsx");
  XLSX.writeFile(updatedWorkbook, updatedExcelFilePath);

  // 將更新後的 Excel 檔案回傳給前端供下載
  const fileStream = fs.createReadStream(updatedExcelFilePath);
  res.setHeader("Content-Disposition", "attachment; filename=UpdatedExcel.xlsx");
  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  fileStream.pipe(res);
});

module.exports = app;