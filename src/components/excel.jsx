import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import cartstyle from '../css/cart.module.css';
import Process from './Process.jsx';

function Excel() {
    const [items, setItems] = useState([]);

    // const [quantity, setQuantity] = useState(1);

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
    // const add = (event) => {
    //     const newQuantity = parseInt(event.target.value);
    //     setQuantity(newQuantity);
    // } 

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

            <br /><br /><br />
            <Process />
            <br /><br /><br />
            
            {/* excel插入後的格式 */}
            {items && (
                <div id={cartstyle['shopping']}>
                    <div id={cartstyle['null']}>
                            {items.map((row, index) => (
                        <div id={cartstyle['text1']}>
                            <img id={cartstyle["imgw"]} src="./image/product_13.png" alt="" />
                            <div id={cartstyle['shopping3']} key={index}>
                                <span style={{ fontSize: 40 }}><b>{row['物品']}</b></span>
                                    <br /><br /><br /><br />
                                <span><b id={cartstyle["dateSize"]}>可租借天數:2023/08/08 - 2023/08/10 共3日</b></span>
                                <p></p>
                                <div id={cartstyle['disFlex']}>
                                    <b id={cartstyle["moneySize"]}>金額:250</b>
                                    <input id={cartstyle["numberstyle"]} type="number" min={1} value={row['數量(填入數字即可)']} />
                                    <button id={cartstyle["butRubbish"]}
                                        onclick='del'><img id={cartstyle["imgRubbish"]} src="/image/Rubbish.png" alt="" /></button>
                                </div> <br /><br />
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            )}
            {/* excel插入後nullCart消失 */}
            {!items.length && (
                <div id={cartstyle["magnifier"]}>
                    <img style={{ width: 220 }} src="/image/magnifier.png" alt="" />
                    <a href="/product/all">
                        <button id={cartstyle["nullshopping"]}>
                            <span>前往商城逛逛</span>
                        </button>
                    </a>
                </div>
            )}
        </>
    );

    // componentDidCatch = async () => {
    //     var car = await axios.get('http://localhost:8000/cart')
    //     var abc
    // }

}

export default Excel;
