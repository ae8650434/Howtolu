import React, { Component } from 'react';
import '../css/product.css'
import axios from 'axios';
import { Product4 } from './product copy.jsx';
import Productbar2 from './productbar2'

class Product2 extends Component {
    state = {
        foodList: [],
        selectedFood: null,
        fcidFood: null,
        selectedCategory: null

    }
    handleClick = (category) => {
        this.setState({ selectedFood: category, fcidFood: null });
    };

    foodClick = (category) => {
        this.setState({ fcidFood: category, selectedFood: null });

    };

    render() {
        const { foodList, selectedFood, fcidFood, selectedCategory } = this.state;
        let filteredList = foodList;
        if (selectedCategory) {
            filteredList = filteredList.filter((x) => x.fc_id === selectedCategory);
        }
        return (
            <React.Fragment>
                <div id="container">
                    <Productbar2 foodFcid={fcidFood} />

                    <Product4 foodList={foodList} selectedFood={selectedFood} fcidFood={fcidFood} />


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

        
        var path = window.location.href;
        switch (path) {
            case 'http://localhost:3000/product2/all':
                newState.foodList = result.data;
                break;
            case 'http://localhost:3000/product2/SinglePoint':
                newState.foodList = result.data.filter(x => x.fc_id === 2);
                break;
            case 'http://localhost:3000/product2/combo':
                newState.foodList = result.data.filter(x => x.fc_id === 1);
                break
            default:
                break;
        }

        
        this.setState(newState);
    }

}





export default Product2;