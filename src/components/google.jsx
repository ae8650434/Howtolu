// DataDisplay.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 使用axios從後端獲取資料
    axios.get('/apii')
      .then(response => setData(response.data))
      .catch(error => console.error('發生錯誤：', error));
  }, []);

  return (
    <div>
      <h1>Excel資料匯入網頁</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
