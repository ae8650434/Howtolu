import React, { Component } from 'react';
import cartstyle from '../css/cart.module.css';
import axios from 'axios';

class CartFood extends Component {
    state = {
        cartFoodList: [],
    }
    render() {
        const { cartFoodList } = this.state;
        return (

            <div id={cartstyle['shopping']}>
                <div id={cartstyle['null']}>

                    {cartFoodList.map((food) => (
                        <div key={food.cid}>
                            <img id={cartstyle["imgw"]} src={`/image/${food.f_img}`} alt="" />
                            <div id={cartstyle["shopping3"]}>
                                <span style={{ fontSize: 40 }}><b>{food.fname}</b></span>
                                <br /><br /><br /><br /><br />
                                <div>
                                    <div style={{ display: 'Flex' }}>
                                        <b id={cartstyle["moneySize"]}>金額:{food.price}</b>
                                        <input id={cartstyle["numberstyle"]}
                                            type="number"
                                            value={food.quantity}
                                            min="1"
                                            onChange={ (e) => {} } />
                                            
                                        <button id={cartstyle["butRubbish"]}
                                            onclick="del(2)"><img id={cartstyle["imgRubbish"]} src="/image/Rubbish.png" alt="" /></button>
                                    </div>
                                </div><br /><br />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    componentDidMount = async () => {
        var result = await axios.get('http://localhost:8000/cart');
        var newState = { ...this.state };
        newState.cartFoodList = result.data;
        this.setState(newState);
    }
}

export default CartFood;