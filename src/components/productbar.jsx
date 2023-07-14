import React, { Component } from 'react';
import productbar from '../css/equip_detail.module.css';
import axios from 'axios';
class productbarr extends Component {
    state = {
        productList: [{
            "pc_id": 1, "class": "寢室帳篷", "image": "product_1.png", "classname": "tent"
        }],
        selectedCategory: null,
       

    }
    render() {
        return (


            <div id="categories" className={productbar.categories}>
                <p>商品分類</p>
                <ul className={productbar.categoriesUl}>
                    {
                        this.state.productList.map((x) => {

                            return (
                                <li>
                                    <a href={`/product/${x.classname}`}  value={x.pc_id}>
                                        {x.class}
                                    </a>
                                </li>

                            );
                        })
                    }
                </ul>
            </div>
        )
    }
  
    componentDidMount = async () => {
        var result = await axios.get('http://localhost:8000/productclass');
        var newState = { ...this.state };
        newState.productList = result.data;
        this.setState(newState);
        // console.log(newState)
    }
}

export default productbarr;