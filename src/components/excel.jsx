import React, { useState, Component } from 'react';
import * as XLSX from 'xlsx';
import cartstyle from '../css/cart.module.css';
import axios from 'axios';

class Excel extends Component {
    state = {
        items: []
    }

    readExcel = (file) => {
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
            const noItems1 = d.filter((row) => row['數量(填入數字即可)'] !== undefined);
            // const noItems2 = d.filter((row) => row['金額'] !== undefined);
            this.setState({ items: noItems1 });
            // this.setState({ items: noItems2 });
        });
    };

    render() {
        const { items } = this.state;
        return (
            <React.Fragment>
                {/* 上傳檔案 */}
                <div style={{ fontSize: 40 }}>
                    上傳檔案(excel)：
                    <input
                        type="file"
                        style={{ fontSize: 25 }}
                        onChange={(e) => {
                            const file = e.target.files[0];
                            this.readExcel(file);
                        }}
                    />
                </div>

                {/* excel插入後的格式 */}
                <br /><br /><br /><br /><br />
                <div id={cartstyle['shopping']}>
                    <div id={cartstyle['null']}>
                        {items.map((row, index) => (
                            <div id={cartstyle['text1']} key={index}>
                                <img id={cartstyle["imgw"]} src="./image/product_13.png" alt="" />
                                <div id={cartstyle['shopping3']}>
                                    <span style={{ fontSize: 40 }}><b>{row['物品']}</b></span>
                                    <br /><br /><br /><br />
                                    <span><b id={cartstyle["dateSize"]}>可租借天數:2023/08/08 - 2023/08/10 共3日</b></span>
                                    <p></p>
                                    <div id={cartstyle['disFlex']}>
                                        <b id={cartstyle["moneySize"]}>金額:{row['金額']}</b>
                                        <input id={cartstyle["numberstyle"]} type="number" min={1} value={row['數量(填入數字即可)']} />
                                        <button id={cartstyle["butRubbish"]} onClick='del'>
                                            <img id={cartstyle["imgRubbish"]} src="/image/Rubbish.png" alt="" />
                                        </button>
                                    </div> <br /><br />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        );
    }
    componentDidMount = async () => {
        var result = await axios.get('http://localhost:8000/product/list');
        var newState = {...this.state};
        newState.cartList = result.data;
        this.setState(newState);
    }  
}
export default Excel;