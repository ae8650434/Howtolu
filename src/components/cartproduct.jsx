import React, { Component } from 'react';
import cartstyle from '../css/cart.module.css';
import axios from 'axios';

class CartProduct extends Component {
    state = {
        cartProductList: []
    }
    render() {
        const { cartProductList } = this.state
        return (
            <React.Fragment>
                        {cartProductList.map((product) => (
                            <div key={product.cid}>
                                <img id={cartstyle['imgw']} src={`/image/${product.p_img}`} alt="" />
                                <div id={cartstyle['shopping3']}>
                                    <span style={{ fontSize: 40 }}><b>{product.pname}</b></span>
                                    <br /><br /><br /><br />
                                    <span><b id={cartstyle['dateSize']}>可租借天數:{product.use_date}~ 共{product.c_day}日</b></span>
                                    <p></p>
                                    <div id={cartstyle['disFlex']}>
                                        <b id={cartstyle['moneySize']}>金額:{product.price}</b>
                                        <input
                                            id={cartstyle['numberstyle']}
                                            type="number"
                                            min={1}
                                            value={product.quantity} />
                                        <button id={cartstyle['butRubbish']}>
                                            <img id={cartstyle['imgRubbish']} src="/image/Rubbish.png" alt="" />
                                        </button>
                                    </div><br /><br />
                                </div>
                            </div>
                        ))}                  
            </React.Fragment>
        );
    }
    componentDidMount = async () => {
        var result = await axios.get('http://localhost:8000/cart');
        var newState = { ...this.state };
        newState.cartProductList = result.data;
        this.setState(newState);
    }
}
export default CartProduct;