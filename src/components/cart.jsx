import React, { Component } from 'react';
import cartstyle from '../css/cart.module.css';
import '../css/calendar.css';
import Excel from './excel.jsx';
import Process from './Process.jsx';
import Calendar from 'react-calendar';
import axios from 'axios';

class Cart extends Component {
    state = { 
        cartList: []
     };

    styleSize = {
        fontSize: 30
    };

    constructor(props) {
        super(props);

        const today = new Date();
        const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate());
        const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        this.state = {
            cartList: [],
            // products: [
            //     {
            //         id: 1,
            //         name: 'Snow Peak 卡式瓦斯爐',
            //         price: 250,
            //         quantity: 1
            //     },
            //     {
            //         id: 2,
            //         name: '筊白筍',
            //         price: 150,
            //         quantity: 1
            //     }
            // ],   
            value: new Date(),
            today: today,
            maxDate: maxDate,
            minDate: minDate,
            selectedDate: null,
            datepicker: false,
        };
    }

    updateQuantity = (productId, newQuantity) => {
        this.setState((prevState) => ({
            products: prevState.cartList.map((product) =>
                product.id === productId ? { ...product, quantity: newQuantity } : product
            ),
        }));
    };

    calculateTotal = () => {
        const { cartList } = this.state;
        let total = 0;
      
        cartList.forEach((product) => {
          total += product.price * product.quantity;
        });
        return total;
      };

    // 一鍵刪除
    removeFromCart = () => {     
    this.setState({ cartList: [] });
     };      

    renderProducts = () => {
        const {cartList} = this.state
        if (!cartList || cartList.length === 0){
            return <div></div>
        }
        return cartList.map((product) => (

            <div key={product.id}>
                <img id={cartstyle['imgw']} src="./image/product_19.png" alt="" />
                <div id={cartstyle['shopping3']}>
                    <span style={{ fontSize: 40 }}><b></b></span>
                    <br /><br /><br /><br />
                    <span><b id={cartstyle['dateSize']}>可租借天數:2023/08/08 - 2023/08/10 共3日</b></span>
                    <p></p>
                    <div id={cartstyle['disFlex']}>
                        <b id={cartstyle['moneySize']}>金額:{product.price}</b>
                        <input
                            id={cartstyle['numberstyle']}
                            type="number"
                            min={1}
                            value={product.quantity}
                            onChange={(e) => this.updateQuantity(product.id, e.target.value)} />
                        <button id={cartstyle['butRubbish']} >
                            <img id={cartstyle['imgRubbish']} src="/image/Rubbish.png" alt="" />
                        </button>
                    </div><br /><br />
                </div>
            </div>
        ));
    };

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
        const total = this.calculateTotal();
        const { value, maxDate, minDate, datepicker  } = this.state;
        return (
            <React.Fragment>
                <br /><br /><br />
                {/* <Process /> */}
                <br /><br /><br />
                <Excel />
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

                <div id={cartstyle['shopping']}>
                    <div id={cartstyle['null']}>{this.renderProducts()}</div>
                </div><br />

                {/* 總計跟前往結帳 */}
                <div id={cartstyle['shopping2']}>
                    <span style={{ fontSize: 40 }}>總計：NT{total}</span>
                    <button onClick={this.removeFromCart} id={cartstyle['buy']}><span>一鍵刪除</span></button>                    
                    <a href="#">
                        <button onclick="processBuy()" id={cartstyle['buy']}><span>前往結帳</span></button>                      
                    </a>
                </div>
                <br /><br />
            </React.Fragment>
        );
    }
    componentDidMount = async () => {
        var result = await axios.get('http://localhost:8000/cart');
        var newState = {...this.state};
        newState.cartList = result.data;
        this.setState(newState);
    }      
}

export default Cart;