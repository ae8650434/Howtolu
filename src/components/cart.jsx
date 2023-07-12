import React, { Component } from 'react';
import Calendar from 'react-calendar';
import cartstyle from '../css/cart.module.css';
import '../css/calendar.css';
import Excel from'./excel.jsx';

class cart extends Component {
    state = { }

    styleO = {
        color: 'orange'
    }
    styleSize = {
        fontSize: 32
    }

    values = {
        value: 1
    }

    constructor(props) {
        super(props);

        const today = new Date();
        const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate());
        const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        this.state = {
            value: new Date(),
            today: today,
            maxDate: maxDate,
            minDate: minDate,
            selectedDate: null,
            datepicker: false,
        };
    }

    calendar = () => {
        this.setState(prevState => ({
            datepicker: !prevState.datepicker,
        }));
    };

    isDisabled = date => {
        const day = date.getDay();
        return day !== 2 && day !== 5;
    };

    onClickDay = date => {
        this.setState({
            selectedDate: date,
            datepicker: false,
        });
    };

    formatDateString = date => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    renderDates = () => {
        const { selectedDate } = this.state;

        if (selectedDate) {
            const startDate = new Date(selectedDate);
            const endDate = new Date(selectedDate);
            endDate.setDate(endDate.getDate() + 2);
            const dates = [];

            while (startDate <= endDate) {
                dates.push(this.formatDateString(startDate));
                startDate.setDate(startDate.getDate() + 1);
            }

            return (
                <React.Fragment>
                    <label style={this.styleSize} htmlFor="">租借日：</label>
                    <input style={this.styleSize} type="text" value={dates[0]} onClick={this.toggleCalendar} />&nbsp;
                    <label style={this.styleSize} htmlFor="">歸還日：</label>
                    <input style={this.styleSize} type="text" value={dates[2]} onClick={this.toggleCalendar} />
                </React.Fragment>
            );
        }

        return null;
    };

    render() {
        const { value, maxDate, minDate, datepicker } = this.state;

        return (
            <React.Fragment> 
                 <br /><br /><br />
                <Excel/>    

            {/* 購物流程 */}
                {/* <div id={cartstyle['process']}>
                    <span style={this.styleO}><b><ins>1.購物車確認</ins></b></span><b>&gt;</b>
                    <span><b><ins>2.確認訂單資訊</ins></b></span><b>&gt;</b>
                    <span><b><ins>3.訂單完成</ins></b></span>
                </div><br /><br /><br /><br /><br /> */}

            {/* 日曆 */}
                {/* <div className="myform">
                <form id="myform" method="get" action="#">
                <div style={{ display: datepicker ? 'block' : 'none' }}>
                  <Calendar
                    locale="en-US"
                    onClickDay={this.onClickDay}
                    value={value}
                    maxDate={maxDate}
                    minDate={minDate}
                    tileDisabled={({ date }) => this.isDisabled(date)}
                  />
                </div>
                <div>
                  <label style={this.styleSize} htmlFor="">選擇日期：</label>
                  <input style={this.styleSize}
                    type="text"
                    value={this.formatDateString(value)}
                    onClick={this.calendar}
                    readOnly
                  />
                </div>
                <div>{this.renderDates()}</div>
              </form>
            </div><br /><br /><br /><br /><br /> */}

            {/* 放大鏡 */}
                <div id={cartstyle["magnifier"]}>
                    <img style={{width: 220}} src="/image/magnifier.png" alt=""/>
                    <a href="/product"><button id={cartstyle["nullshopping"]}><span>前往商城逛逛</span></button></a>
                </div>

                {/* <div id={cartstyle['shopping']}>
                    <div id={cartstyle['null']}>
                        
                        <div id={cartstyle['text1']}>
                            <img id={cartstyle["imgw"]} src="/image/Snow Peak 卡式瓦斯爐.jpg" alt="" />
                            <div id={cartstyle['shopping3']}>
                                <span style={{ fontSize: 40 }}><b>Snow Peak 卡式瓦斯爐</b></span>
                                <br /><br /><br /><br />
                                <span><b id={cartstyle["dateSize"]}>可租借天數:1995/10/14 - 1995/10/16 共3日</b></span>
                                <p></p>
                                <div id={cartstyle['disFlex']}>
                                    <b id={cartstyle["moneySize"]}>金額:35000</b>
                                    <input id={cartstyle["numberstyle"]} type="number" min={1} />
                                    <button id={cartstyle["butRubbish"]}
                                        onclick={this.del}><img id={cartstyle["imgRubbish"]} src="/image/Rubbish.png" alt="" /></button>
                                </div> <br /><br />
                            </div>
                        </div>

                        <div id={cartstyle['text2']}>
                            <img id={cartstyle["imgw"]} src="/image/筊白筍.jpeg" alt="" />
                            <div id={cartstyle['shopping3']}>
                                <span style={{ fontSize: 40 }}><b>筊白筍</b></span>
                                <br /><br /><br /><br />
                                <div>
                                    <div id={cartstyle['disFlex']}>
                                        <b id={cartstyle["moneySize"]}>金額:35000</b>
                                        <input id={cartstyle["numberstyle"]} type="number" min="1" />
                                        <button id={cartstyle["butRubbish"]}
                                            onclick="del"><img id={cartstyle["imgRubbish"]} src="/image/Rubbish.png" alt="" /></button>
                                    </div>
                                </div><br /><br />
                            </div>
                        </div>

                        <div id={cartstyle['text3']}>
                            <img id={cartstyle["imgw"]} src="/image/Snow Peak Amenity Dome 寢室帳 L(SDE-003R)2-6人.png" alt="" />
                            <div id={cartstyle['shopping3']}>
                                <span style={{ fontSize: 40 }}><b>Snow Peak Amenity Dome 寢室帳 L(SDE-003R)2-6人</b></span>
                                <br /><br /><br /><br />
                                <span><b id={cartstyle["dateSize"]}>可租借天數:1995/10/14 - 1995/10/16 共3日</b></span>
                                <p></p>
                                <div id={cartstyle['disFlex']}>
                                    <b id={cartstyle["moneySize"]}>金額:35000</b>
                                    <input id={cartstyle["numberstyle"]} type="number" min="1" />
                                    <button id={cartstyle["butRubbish"]}
                                        onclick="del"><img id={cartstyle["imgRubbish"]} src="/image/Rubbish.png" alt="" /></button>
                                </div> <br /><br />
                            </div>
                        </div>

                        <div id={cartstyle['text4']}>
                            <img id={cartstyle["imgw"]} src="/image/黑胡椒牛小排.png" alt="" />
                            <div id={cartstyle['shopping3']}>
                                <span style={{ fontSize: 40 }}><b>黑胡椒牛小排</b></span>
                                <br /><br /><br /><br />
                                <div>
                                    <div id={cartstyle['disFlex']}>
                                        <b id={cartstyle["moneySize"]}>金額:35000</b>
                                        <input id={cartstyle["numberstyle"]} type="number" min="1" />
                                        <button id={cartstyle["butRubbish"]}
                                            onclick="del"><img id={cartstyle["imgRubbish"]} src="/image/Rubbish.png" alt="" /></button>
                                    </div>
                                </div><br /><br />
                            </div>
                        </div>

                    </div>
                </div><br />  */}
            {/* 總計跟前往結帳 */}
                {/* <div id={cartstyle['shopping2']}>
                    <span style={{ fontSize: 40 }}>總計：NT100000</span>
                    <a href="./index.html"><button onclick="processBuy()" id={cartstyle["buy"]}><span>前往結帳</span></button></a>
                </div><br /><br /> */}
            
            </React.Fragment>
        );       
    }
}

export default cart;