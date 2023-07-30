import React, { useState, Component } from 'react';
import * as XLSX from 'xlsx';
import cartstyle from '../css/cart.module.css';
import axios from 'axios';
import CalendarExcel from './CalendarExcel.jsx';
import Process1 from './Process1.jsx';

class Excel extends Component {
    state = {
        items: [],
        excelList: [],
        rentalStartDate: null,
        rentalEndDate: null,
        totalPrice: 0
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
            this.setState({ items: noItems1 });

            let totalPrice = 0;
            noItems1.forEach((row) => {
                totalPrice  += parseFloat(row['金額']) * parseFloat(row['數量(填入數字即可)'])
            });
            this.setState({items: noItems1, totalPrice});
        }).catch((error)=>{
            console.error('Excel:', error);
        })
    };

    excelDate = (startDate, endDate) => {
        this.setState({
            rentStartDate: startDate,
            rentEndDate: endDate,
        });
    }

    

    render() {
        const { items, excelList, rentStartDate, rentEndDate, totalPrice  } = this.state;

        return (
            <React.Fragment>
                {/* 上傳檔案 */}
                {console.log("看",this.state)}
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
                <br /><br /><br />
                {items.length > 0 ? <CalendarExcel onSelectDateRange={this.excelDate} /> : null}
                <br /><br /><br />
                {items.length > 0 ? (<Process1 />) : null}

                {/* excel插入後的格式 */}
                <br /><br /><br /><br /><br />
                <div id={cartstyle['shopping']}>
                    <div id={cartstyle['null']}>
                        {items.map((row, index) => (
                            <div key={index}>
                                <img id={cartstyle["imgw"]} src={`/image/${row['圖片']}`} alt="" />
                                {console.log(`/image${row['圖片']}`)}
                                <div id={cartstyle['shopping3']}>
                                    <span style={{ fontSize: 40 }}>{row['物品']}</span>
                                    <br /><br /><br /><br />
                                    {rentStartDate && rentEndDate && (
                                        <div>
                                            <span><p id={cartstyle["dateSize"]}>可租借天數:{rentStartDate} ～ {rentEndDate} 共3日</p></span>
                                        </div>
                                    )}
                                    <p></p>
                                    <div id={cartstyle['disFlex']}>
                                        <p id={cartstyle["moneySize"]}>金額:{row['金額']}</p>
                                        <input id={cartstyle["numberstyle"]} type="number" min={1} value={row['數量(填入數字即可)']} />
                                        <button id={cartstyle["butRubbish"]} onClick='del'>
                                            <img id={cartstyle["imgRubbish"]} src="/image/Rubbish.png" alt="" />
                                        </button>
                                    </div> <br /><br />
                                </div>
                            </div>
                        ))}
                    </div>
                </div><br />

                {items.length > 0 ? (
                    <div id={cartstyle['shopping2']}>
                        <span style={{ fontSize: 40 }}>總計：NT{totalPrice} </span>
                        <button onClick={this.delAll} id={cartstyle['buy']}><a href=''><span style={{ color: 'white' }}>一鍵刪除</span></a></button>
                        <a href="/payment">
                            <button id={cartstyle['buy']}><span>前往結帳</span></button>
                        </a>
                    </div>
                ) : null}
<br /><br /><br /><br /><br />
            </React.Fragment>
        );
    }

    componentDidMount = async () => {
        var result = await axios.get('http://localhost:8000/product/list');
        var newState = { ...this.state };
        newState.excelList = result.data;
        this.setState(newState);
    }
}
export default Excel;