import React, { Component } from 'react';
import cartstyle from '../css/cart.module.css';
import axios from 'axios';
import { valid } from 'semver';

class CartFood extends Component {
    state = {
        cartFoodList: [],
    }
    render() {
        const { cartFoodList } = this.state;
        return (
            <React.Fragment>
              
              
                {
                cartFoodList.map((food, index) => (
                    
                    <div key={food.cid}>
                    
                        <img id={cartstyle["imgw"]} src={`/image/${food.f_img}`} alt="" />
                        <div id={cartstyle["shopping3"]}>
                            <span style={{ fontSize: 40 }}><b>{food.fname}</b></span>
                            <br /><br /><br /><br /><br />
                            <div>
                                <div style={{ display: 'Flex' }}>
                                    <b id={cartstyle["moneySize"]}>金額:{food.f_price}</b>
                                    <input
                                        id={cartstyle["numberstyle"]}
                                        type="number"
                                        min={1}
                                        value={food.quantity}
                                        onChange={(event) => {
                                            const value = parseInt(event.target.value);
                                            this.quantity(index, value)
                                        }}
                                    />
                                    <button id={cartstyle["butRubbish"]}>
                                        <img onClick={() => this.del(index)} id={cartstyle["imgRubbish"]} src="/image/Rubbish.png" alt="" />
                                    </button>
                                </div>
                            </div><br /><br />
                        </div>
                    </div>
                ))}
            </React.Fragment>
        )
    }

    // 數量增減
    quantity = (index, newQuantity) => {
        const { cartFoodList } = this.state;
        const updatedFoodList = [...cartFoodList];
        updatedFoodList[index].quantity = newQuantity;
        this.setState({ cartFoodList: updatedFoodList }, () => {
            this.props.updateProductQuantity(index, newQuantity)
        });
    };

    // 刪除單一food
    del = async (index) => {
        const { cartFoodList } = this.state;
        const foodToDelete = cartFoodList[index];   
        try {
            await axios.delete(`http://localhost:8000/cart/${foodToDelete.fid}`);
            const updatedFoodList = cartFoodList.filter((_, i) => i !== index);
            this.setState({ cartFoodList: updatedFoodList });
        } catch (error) {
            console.error("Failed to delete product:", error);
        }
    };

    componentDidMount = async () => {
        var result = await axios.get('http://localhost:8000/cart');
        var newState = { ...this.state };
        newState.cartFoodList = result.data;
        var filteredList =newState.cartFoodList.filter((x) => x.pid ==null)
    
        this.state.cartFoodList=filteredList
        this.setState(this.state);
    }
}

export default CartFood;