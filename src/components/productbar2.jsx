import React, { Component } from 'react';
import productbar from '../css/equip_detail.module.css';
import axios from 'axios';

class Productbar2 extends Component {
    state = {
        foodList: [],
        selectedFood: null,
        fcid: null
    }

    render() {
        const { foodList } = this.state;
        return (
            <div id="categories" className={productbar.categories}>
                <p>商品分類</p>
                <ul className={productbar.categoriesUl}>
                    {foodList.map((x) => {
                        {console.log(foodList)}
                            return (
                                
                                <li key={x.fc_id}>
                                    <a href={`/product2/${x.classname}`} >
                                        {x.class}
                                    </a>
                                   
                                </li>
                              
                            );
                        
                    
                    })}
                </ul>
                
            </div>
        );
    }

   

    componentDidMount = async () => {
        var result = await axios.get('http://localhost:8000/foodclass');
        var newState = { ...this.state };
        newState.foodList = result.data;
        this.setState(newState);
    }
}

export default Productbar2;
