import React, { Component } from 'react';
import '../css/product.css'
import axios from 'axios';
import {Product4} from './product copy.jsx';
import Productbar2 from './productbar2'


class Product2 extends Component {
    state = {
        foodList: [],
        selectedFood: null,
        fcidFood:null
    }

      render() {
        const { foodList, selectedFood,fcidFood } = this.state;
        return (
            <React.Fragment>
                <div id="container">
                <Productbar2 />

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
        switch (this.props.match.params.foodClass) {
            case "combo":
              console.log('妳好＝＝＝＝',this.state.selectedFood=1)
              break;
            case "SinglePoint":
              this.state.selectedFood=2
              break;
           
          
            default:
              break;
          }
          
          this.setState(this.state);
          console.log(newState)
          console.log(this)      
      }

}





export default Product2;