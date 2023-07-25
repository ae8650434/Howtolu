import React, { Component } from 'react';
import cartstyle from '../css/cart.module.css';
import axios from 'axios';

class CartProduct extends Component {
    state = {
        cartProductList: [],
    };

    // 日期尾巴去除
    formDate = (dateString) => {
        return dateString ? dateString.split('T')[0] : '';
    };

    render() {
        const { cartProductList } = this.state;
        return (
            <React.Fragment>
                {cartProductList.map((product, index) => (
                    <div key={product.cid}>
                        <img id={cartstyle['imgw']} src={`/image/${product.p_img}`} alt="" />
                        <div id={cartstyle['shopping3']}>
                            <span style={{ fontSize: 40 }}><b>{product.pname}</b></span>
                            <br /><br /><br /><br />
                            <span><b id={cartstyle['dateSize']}>
                                可租借天數:{this.formDate(product.use_date)}～
                                {this.formDate(product.return_date)} 共
                                {product.c_day}日</b></span>
                            <p></p>
                            <div id={cartstyle['disFlex']}>
                                <b id={cartstyle['moneySize']}>金額:{product.p_price}</b>
                                <input
                                    id={cartstyle['numberstyle']}
                                    type="number"
                                    min={1}
                                    value={product.quantity}
                                    onChange={(event) => {
                                        const value = parseInt(event.target.value);
                                        this.quantity(index, value);
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
    quantity = (index, newQuantity) => {
        const { cartProductList } = this.state;
        const updatedProductList = [...cartProductList];
        updatedProductList[index].quantity = newQuantity;
        this.setState({ cartProductList: updatedProductList });
    };

    // 刪除單一product
    del = async (index) => {
        const { cartProductList } = this.state;
        const ProductToDelete = cartProductList[index];   
        try {
            await axios.delete(`http://localhost:8000/cart/${ProductToDelete.pid}`);
            const updatedProductList = cartProductList.filter((_, i) => i !== index);
            this.setState({ cartProductList: updatedProductList });
        } catch (error) {
            console.error("Failed to delete product:", error);
        }
    };

    // del = (index) => {
    //     const { cartProductList } = this.state;
    //     const updatedProductList = [...cartProductList];
    //     updatedProductList.splice(index, 1); 
    //     this.setState({ cartProductList: updatedProductList });
    // };
    
    componentDidMount = async () => {
        var result = await axios.get('http://localhost:8000/cart');
        var newState = { ...this.state };
        newState.cartProductList = result.data;
        var filteredList =newState.cartProductList.filter((x) => x.fid ==null)
    
        this.state.cartProductList=filteredList
        this.setState(this.state);
      
    }
}
export default CartProduct;
