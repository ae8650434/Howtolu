import React, { Component } from 'react';
import cartstyle from '../css/cart.module.css';
import Excel from './excel.jsx';
import Google from './google.jsx';
import Process1 from './Process1.jsx';
import CartFood from './cartfood.jsx';
import CartProduct from './cartproduct.jsx';
import Nullcart from './nullcart.jsx';
import axios from 'axios';

class Cart extends Component {
    state = {
        cartList: [],
    };

    styleSize = {
        fontSize: 30
    };

    //總價
    totalMoney = () => {
        const { cartList } = this.state
        let total = 0
        // console.log('prop',this.props)
        // console.log('cartList',cartList)
        cartList.forEach(item => {
            // console.log('item', item)
            if (item.p_price) {
                total += item.p_price * item.quantity;
            } else if (item.f_price) {
                total += item.f_price * item.quantity;
            }
        })
        console.log('total', total)
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

    render() {
        const { cartList } = this.state;
        const totalPrice = this.totalMoney();
        return (
            <React.Fragment>
                <Excel />
                {cartList.length > 0 ? (<Process1 />) : null}
                {cartList.length === 0 ? (<Nullcart />) : null}
                <br /><br /><br />
                <div id={cartstyle['shopping']}>
                    <div id={cartstyle['null']}>
                        <Google />
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
                newState.cartList = result.data.filter((x) => x.tel == sessionStorage.getItem('account'));
                this.setState(newState);
                // console.log(newState, new Date ())
            } catch (error) {
                console.error('有錯誤嗎:', error);
            }
        }
    }
}
export default Cart;