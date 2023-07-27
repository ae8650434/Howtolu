import React, { Component } from 'react';
import cartstyle from '../css/cart.module.css';
import '../css/calendar.css';
import Excel from './excel.jsx';
import Process1 from './Process1.jsx';
import CartFood from './cartfood.jsx';
import CartProduct from './cartproduct.jsx';
import Nullcart from './nullcart.jsx';
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
            value: new Date(),
            today: today,
            maxDate: maxDate,
            minDate: minDate,
            selectedDate: null,
            datepicker: false,
        };
    }

    //總價
    totalMoney = () => {
        const { cartList } = this.state
        let total = 0

        cartList.forEach(item => {
            if (item.p_price) {
                total += item.p_price * item.quantity;
            } else if (item.f_price) {
                total += item.f_price * item.quantity;
            }
        })
        return total
    }

    updateCart = (updatedProductList) => {
        this.setState({ cartList: updatedProductList });
    };

    // 一鍵刪除
    delAll = () => {
        const account = sessionStorage.getItem('account');
        axios.delete(`http://localhost:8000/cart?account=${account}`)
            .then(() => {
                this.setState({ cartList: [] });
            })
            .catch((err) => {
                console.error(err);
            });
    };

    // 日曆
    calendar = () => {
        this.setState(prevState => ({
            datepicker: !prevState.datepicker,
        }));
    };

    // 日曆
    isDisabled = date => {
        const day = date.getDay();
        return day !== 2 && day !== 5;
    };

    // 日曆
    onClickDay = date => {
        this.setState({
            selectedDate: date,
            datepicker: false,
        });
    };

    // 日曆
    formatDateString = date => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // 日曆
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
        const { value, maxDate, minDate, datepicker, cartList, handleOpen } = this.state;
        const totalPrice = this.totalMoney()
        return (
            <React.Fragment>
                <br /><br /><br /><br />
                <Excel />
                {cartList.length > 0 ? (<Process1 />) : null}
                <br /><br /><br /><br />
                {cartList.length === 0 ? (<Nullcart />) : null}

                <div id={cartstyle['shopping']}>
                    <div id={cartstyle['null']}>
                        <CartProduct
                        cartProductList={cartList.filter(item => item.pid == null)}
                        updateQuantity={this.updateQuantity}
                        updateCart={this.updateCart}
                        />                        
                        <CartFood
                        cartFoodList={cartList.filter(item => item.fid == null)}
                        updateQuantity={this.updateQuantity}
                        updateCart={this.updateCart}
                        />                     
                    </div>
                </div> <br />

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

                {/* 總計跟前往結帳 */}
                {cartList.length > 0 ? (
                    <div id={cartstyle['shopping2']}>
                        <span style={{ fontSize: 40 }}>總計：NT{totalPrice} </span>
                        <button onClick={this.delAll} id={cartstyle['buy']}><a href=''><span style={{ color: 'white' }}>一鍵刪除</span></a></button>
                        <a href="/payment">
                            <button id={cartstyle['buy']}><span>前往結帳</span></button>
                        </a>
                    </div>
                ) : null}
                <br /><br />
            </React.Fragment >
        );
    }

    componentDidMount = async () => {
        const account = sessionStorage.getItem('account');
        if (!account) {
            window.location.href = '/login';
        } else {
            try {
                const result = await axios.get('http://localhost:8000/cart');
                const newState = { ...this.state };
                newState.cartList = result.data.filter((x)=>x.tel==sessionStorage.getItem('account'));
                this.setState(newState);
            } catch (error) {
                console.error('有錯誤嗎:', error);
            }
        }
    }
}
export default Cart;