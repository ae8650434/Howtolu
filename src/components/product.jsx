import React, { Component } from 'react';
import '../css/product.css';
import axios from 'axios';
import Product3 from './product copy';

class Product extends Component {
  state = {
    productList: [],
    selectedCategory: null
  };

  handleCategoryClick = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const { productList, selectedCategory } = this.state;

    return (
      <React.Fragment>
        <div id="container">
          <div id="categories" className="categories">
            <p>商品分類</p>
            <ul className="categoriesUl">
              <li>
                <a href="#" onClick={() => this.handleCategoryClick(1)}>
                  寢室帳篷
                </a>
              </li>
              <li>
                <a href="#" onClick={() => this.handleCategoryClick(2)}>
                  客廳帳&天幕
                </a>
              </li>
              <li>
                <a href="#" onClick={() => this.handleCategoryClick(3)}>
                  寢室用具
                </a>
              </li>
              <li>
                <a href="#" onClick={() => this.handleCategoryClick(4)}>
                  戶外用品
                </a>
              </li>
              <li>
                <a href="#" onClick={() => this.handleCategoryClick(5)}>
                  爐具
                </a>
              </li>
              <li>
                <a href="#" onClick={() => this.handleCategoryClick(6)}>
                  保鮮保冷
                </a>
              </li>
              <li>
                <a href="#" onClick={() => this.handleCategoryClick(7)}>
                  燈具
                </a>
              </li>
              <li>
                <a href="#" onClick={() => this.handleCategoryClick(8)}>
                  影音設備
                </a>
              </li>
              <li>
                <a href="#" onClick={() => this.handleCategoryClick(9)}>
                  保暖裝備
                </a>
              </li>
              <li>
                <a href="#" onClick={() => this.handleCategoryClick(10)}>
                  常用配件
                </a>
              </li>
            </ul>
          </div>

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
    this.setState(newState);
  }
}

export default Product;
