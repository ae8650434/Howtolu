// gooex.js
import React, { useState } from "react";
import * as xlsx from "xlsx"; // 使用通配符匯入所有 xlsx 函數

function App() {

  const readGoogleSheet = () => {
    // Sort results by id in descending order, take two
    // and return the age as an integer.

    fetch('https://sheetdb.io/api/v1/5rctxpm3syzj9')
      .then((response) => response.json())
      .then((data) => console.log(data));

  }

  return (

    <button onClick={() => { readGoogleSheet() }}>react</button>

  );
}

export default App;
