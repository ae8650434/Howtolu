import React, { Component } from 'react';
import '../css/product.css'
import axios from 'axios';
import {Product4} from './product copy.jsx';


class Product2 extends Component {
    state = {
        foodList: [],
        selectedFood: null,
        fcidFood:null
    }
    handleClick = (category) => {
        this.setState({ selectedFood: category, fcidFood: null });
      };

      foodClick = (category) => {
          this.setState({ fcidFood: category,selectedFood:null });
          
        };

      render() {
        const { foodList, selectedFood,fcidFood } = this.state;
        return (
            <React.Fragment>
                <div id="container">
                    <div id="categories" className="categories">
                        <p>商品分類</p>
                        <ul className="categoriesUl">
                            <li><a href="/product2">套餐</a>
                                <ul>
                                    <li><a href="#" onClick={() => this.handleClick(1)}>賀呷套餐</a></li>
                                    <li><a href="#" onClick={() => this.handleClick(2)}>滿漢全席</a></li>
                                    <li><a href="#" onClick={() => this.handleClick(3)}>雙人套餐</a></li>
                                    <li><a href="#" onClick={() => this.handleClick(4)}>素食套餐</a></li>
                                    <li><a href="#" onClick={() => this.handleClick(5)}>快樂分享餐</a></li>
                                </ul>
                            </li>
                            <li><a href="#" onClick={() => this.foodClick(2)}>單點</a></li>
                        </ul>
                    </div>

                <Product4 foodList={foodList} selectedFood={selectedFood} fcidFood={fcidFood}/>
                    
                   
                </div>

                <div className="br1">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br />



                </div>






                <div>

                    <div className="categories1">
                        <p>商品分類</p>
                        <ul className="categoriesUl1">
                            <li><a href="#">套餐</a>
                                <ul>
                                    <li><a href="#">賀呷套餐</a></li>
                                    <li><a href="#">滿漢全席</a></li>
                                    <li><a href="#">雙人套餐</a></li>
                                    <li><a href="#">素食套餐</a></li>
                                    <li><a href="#">快樂分享餐</a></li>
                                </ul>
                            </li>
                            <li><a href="#">單點</a></li>
                        </ul>
                    </div>
                </div>
                <br /><br />


                <div className="br1">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>
            </React.Fragment >







        );


    }

    componentDidMount = async () => {
        var result = await axios.get('http://localhost:8000/food/list');
        var newState = { ...this.state };
        newState.foodList = result.data;
        this.setState(newState);
      }

}





export default Product2;