import React, { Component } from 'react';
import '../css/product.css';
import axios from 'axios';
import Product3 from './product copy';
import Productbar from './productbar';

class Product extends Component {
  state = {
    productList: [],
    selectedCategory: null,
  
  };

  
  render() {
    const { productList, selectedCategory } = this.state;
    return (
      <React.Fragment>
        <div id="container">
          <Productbar
          
          />
         
          <Product3 productList={productList} selectedCategory={selectedCategory} />

          {/* 其他组件或内容 */}
        </div>

        <div className="br1">
          {/* 这里是一些 <br> 标签 */}
        </div>

        <div className="categories1">
          <p>商品分類</p>
          <ul className="categoriesUl1">
            <li>
              <a href="#">寢室帳篷</a>
            </li>
            <li>
              <a href="#">客廳帳&天幕</a>
            </li>
            <li>
              <a href="#">寢室用具</a>
            </li>
            <li>
              <a href="#">戶外用品</a>
            </li>
            <li>
              <a href="#">爐具</a>
            </li>
            <li>
              <a href="#">保鮮保冷</a>
            </li>
            <li>
              <a href="#">燈具</a>
            </li>
            <li>
              <a href="#">影音設備</a>
            </li>
            <li>
              <a href="#">保暖裝備</a>
            </li>
            <li>
              <a href="#">常用配件</a>
            </li>
          </ul>
        </div>

        <div className="br1">
          {/* 这里是一些 <br> 标签 */}
        </div>
      </React.Fragment>
    );
  }
 
  
  componentDidMount = async () => {
    var result = await axios.get('http://localhost:8000/product/list');
    var newState = { ...this.state };
    newState.productList = result.data;
    this.state=newState;
    switch (this.props.match.params.Classification) {
      case "tent":
        this.state.selectedCategory=1
        break;
      case "canopy":
        this.state.selectedCategory=2
        break;
      case "mattress":
        this.state.selectedCategory=3
        break;
      case "outdoor":
        this.state.selectedCategory=4
        break;
      case "stove":
        this.state.selectedCategory=5
        break;
      case "fresh":
        this.state.selectedCategory=6
        break;
      case "lamp":
        this.state.selectedCategory=7
        break;
      case "audio":
        this.state.selectedCategory=8
        break;
      case "warm":
        this.state.selectedCategory=9
        break;
      case "accessories":
        this.state.selectedCategory=10
        break;
    
      default:
        break;
    }
    
    this.setState(this.state);
    console.log(newState)
    console.log(this)
    
    
    
  }
}

export default Product;
