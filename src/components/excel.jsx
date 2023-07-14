import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import cartstyle from '../css/cart.module.css';
import Process from './Process.jsx';

function Excel() {
    const [items, setItems] = useState([]);

    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {

                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, { type: 'buffer' });

                const wsname = wb.SheetNames[0];

                const ws = wb.Sheets[wsname];

                const data = XLSX.utils.sheet_to_json(ws);

                resolve(data);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });

        promise.then((d) => {
            const noItems = d.filter(
                (row) => row['數量(填入數字即可)'] !== undefined
            );
            setItems(noItems);
        });
    };

    return (
        <>
            {/* 上傳檔案 */}
            <div style={{ fontSize: 40 }}>
                上傳檔案(excel)：
                <input
                    type="file"
                    style={{ fontSize: 25 }}
                    onChange={(e) => {
                        const file = e.target.files[0];
                        readExcel(file);
                    }} />
            </div>

            <br /><br /><br /><br />
            <Process />
            <br /><br /><br /><br />
            
            {/* excel插入後的格式 */}
            {items && (
                <table>
                    <tbody>
                        {items.map((row, index) => (
                            <tr key={index}>
                                <td>{row['物品']}</td>
                                <td>{row['數量(填入數字即可)']}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}<br /><br /><br /><br />

            {/* excel插入後nullCart消失 */}
            {/* {!items.length && (
                <div id={cartstyle["magnifier"]}>
                    <img style={{ width: 220 }} src="/image/magnifier.png" alt="" />
                    <a href="/product">
                        <button id={cartstyle["nullshopping"]}>
                            <span>前往商城逛逛</span>
                        </button>
                    </a>
                </div>
            )} */}
        </>
    );

    // componentDidCatch = async () => {
    //     var car = await axios.get('http://localhost:8000/cart')
    //     var abc
    // }

}

export default Excel;
