import React, { Component } from 'react';
import cartstyle from '../css/cart.module.css';
import axios from 'axios';

class CartProduct extends Component {
    state = {
        cartProductList: [],
    };

    // 日期尾巴去除
    formDate = (dateStr, addDay = 0) => {
        if (!dateStr) return '';

        const date = new Date(dateStr);

        date.setDate(date.getDate() + addDay);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        const formDate = `${year}-${month}-${day}`;

        return formDate;
    };

    render() {
        const { cartProductList } = this.state;
        return (
            <React.Fragment>
                {cartProductList.map((product, index) => (
                    <div key={product.cid}>
                        <img id={cartstyle['imgw']} src={`/image/${product.p_img}`} alt="" />
                        <div id={cartstyle['shopping3']}>
                            <span style={{ fontSize: 40 }}>{product.pname}</span>
                            <br /><br /><br /><br />
                            <span><p id={cartstyle['dateSize']}>
                                可租借天數:{this.formDate(product.use_date)}～
                                {this.formDate(product.return_date)} 共
                                {product.c_day}日</p></span>
                            <p></p>
                            <div id={cartstyle['disFlex']}>
                                <p id={cartstyle['moneySize']}>金額: {product.p_price}</p>
                                <input
                                    id={cartstyle['numberstyle']}
                                    type="number"
                                    min={1}
                                    value={product.quantity}
                                    onChange={(event) => {
                                        const value = parseInt(event.target.value);
                                        this.P_quantity(index, value);
                                    }} />
                                <button id={cartstyle['butRubbish']}>
                                    <img onClick={() => this.del(index)} id={cartstyle['imgRubbish']} src="/image/Rubbish.png" alt="" />
                                </button>
                            </div><br /><br />
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }

    // input數量增減
    P_quantity = async (index, newQuantity) => {
        const { cartProductList } = this.state;
        const updatedProductList = [...cartProductList];
        updatedProductList[index].quantity = newQuantity;
        this.setState({ cartProductList: updatedProductList });

        const productToUpdate = updatedProductList[index];
        try {
            await axios.put(`http://localhost:8000/cart/pid/${productToUpdate.pid}`, {
                quantity: newQuantity
            });
            this.props.updateCart(updatedProductList);
        } catch (error) {
            console.error(error);
        }
    };


    // 刪除單一product
    del = async (index) => {
        const { cartProductList } = this.state;
        const ProductToDelete = cartProductList[index];
        try {
            await axios.delete(`http://localhost:8000/cart/pid/${ProductToDelete.pid}`);
            const updatedProductList = cartProductList.filter((_, i) => i !== index);
            this.setState({ cartProductList: updatedProductList });
        } catch (error) {
            console.error(error);
        }
    };

    componentDidMount = async () => {
        var result = await axios.get('http://localhost:8000/cart');
        var newState = { ...this.state };
        newState.cartProductList = result.data;
        var filteredList = newState.cartProductList.filter((x) => x.fid == null && x.tel === sessionStorage.getItem('account'))

        this.state.cartProductList = filteredList
        this.setState(this.state);

    }
};
export default CartProduct;