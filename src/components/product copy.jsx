import React, { Component } from 'react';
import '../css/qaz.css';
import axios from 'axios';

class Product3 extends Component {
  state = {
    productList: []
  }

  render() {
    const { productList, selectedCategory } = this.props;

    let filteredList = productList;
    if (selectedCategory && selectedCategory === 1) {
      filteredList = productList.filter((x) => x.pc_id === 1);
    }

    return (
      <div className="product-container">
        <div></div>
        <div className='row'>
          {filteredList.map((x) => (
            <div key={x.pid} className='good' id='right'>
              <figure>
                <img src={`/image/${x.p_img}`} alt={x.pname} />
                <figcaption>{x.pname}</figcaption>
                <figcaption>NT${x.price} - {x.day} 日</figcaption>
                <a href={`/equip_detail/${x.pid}`}><button className="btnq">立即預約</button></a>
              </figure>
            </div>
          ))}
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    var result = await axios.get('http://localhost:8000/product/list');
    var newState = { ...this.state };
    newState.productList = result.data;
    this.setState(newState);
  }
}

export class Product4 extends Component {
  state = {
    productList: [
      {
        "fid": 1,
        "fname": "賀呷套餐",
        "price": 2500,
        "f_img": "food_1.png",
        "fc_id": 1,
        "fdetails_image": "fdetails_1.png"
      }
    ]
  }

  render() {
    return (
      <div className="product-container">
        <div></div>
        <div className='row'>
<<<<<<< HEAD
          {this.state.productList.map((x) => (
            <div key={x.fid} className='good' id='right'>
              <figure>
                <img src={`/image/${x.f_img}`} alt={x.fname} />
                <figcaption>{x.fname}</figcaption>
                <figcaption>NT${x.price}</figcaption>
                <a href={`/food_detail/${x.fid}`}><button className="btnq">選購</button></a>
              </figure>
            </div>
          ))}
=======
          {this.state.productList.map((x) => {
            return (
              <div className='good' id='right'>
                <figure>
                  <img src={`/image/${x.f_img}`} />
                  <figcaption>{x.fname}</figcaption>
                  <figcaption>NT${x.price}</figcaption>
                  <a href={`/equip_detail/${x.fid}`}><button className="btnq">選購</button></a>
                </figure>
              </div>
            );
          })}
>>>>>>> refs/remotes/origin/main
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    var result = await axios.get('http://localhost:8000/food/list');
    var newState = { ...this.state };
    newState.productList = result.data.filter((x) => x.fc_id === 1);
    this.setState(newState);
  }
}

export default Product3;
