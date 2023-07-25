import React, { Component } from 'react';
import '../css/qaz.css';
import axios from 'axios';

class Product3 extends Component {
  state = {
    productList: [],
    car: {}
  }

  render() {
    const { productList, selectedCategory } = this.props;

    let filteredList = productList;

    if (selectedCategory) {
      filteredList = productList.filter((x) => x.pc_id === selectedCategory);
    }

    return (

      <div className="product-container">
        <div id='qqq'></div>
        <div className='row'>
          {filteredList.map((x) => (
            <div key={x.pid} className='good' id='right'>
              <figure style={{ width: "450px", height: "550px" }}>
                <img src={`/image/${x.p_img}`} alt={x.pname} />
                <figcaption>{x.pname}</figcaption>
                <figcaption>NT${x.p_price} - {x.day} 日</figcaption>
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
    foodList: [],
    selectedCategory: null,
    item: {}
  }
  componentDidMount = () => {
    var plusButtons = document.querySelectorAll('.btn0');
    var minusButtons = document.querySelectorAll('.btnq1');

    minusButtons.forEach((button) => {
      button.addEventListener('click', this.handledown);
    })

    plusButtons.forEach((button) => {
      button.addEventListener('click', this.handleAdd);
    });
  }

  componentWillUnmount = () => {
    var plusButtons = document.querySelectorAll('.btn0');
    var minusButtons = document.querySelectorAll('.btnq1');

    minusButtons.forEach((button) => {
      button.removeEventListener('click', this.handledown);
    })

    plusButtons.forEach((button) => {
      button.removeEventListener('click', this.handleAdd);
    });
  }

  handleAdd = (event) => {
    const foodId = event.target.getAttribute('data-foodid');
    var quantityLabel = event.target.previousElementSibling;
    var quantity = parseInt(quantityLabel.textContent);
    quantity++;
    quantityLabel.textContent = quantity;
    sessionStorage.setItem(`foodval${foodId}`, quantity);
    console.log(foodId)
  }

  handledown = (event) => {
    const foodId = event.target.getAttribute('data-foodid');
    var quantityLabel = event.target.nextElementSibling;
    var quantity = parseInt(quantityLabel.textContent);
    if (quantity > 0) {
      quantity--;
      quantityLabel.textContent = quantity;
      sessionStorage.setItem(`foodval${foodId}`, quantity);
    }
  }

  render() {
    const { foodList, selectedFood, selectedCategory, } = this.props;
    const { handleOpen, handleOK,handleZero } = this.state;
    let filteredList = foodList;
    if (selectedFood) {
      filteredList = foodList.filter((x) => x.fc_id === 1)
    }
    // if (selectedFood || fcidFood) {
    //   filteredList = foodList.filter((x) => x.fid === selectedFood || x.fc_id === fcidFood);

    // } 
    if (selectedCategory) {
      filteredList = filteredList.filter((x) => x.fc_id === selectedCategory);
    }

    return (
      <React.Fragment>
        <div className="product-container">
          <div id='qqq'></div>
          <div className='row'>
            {filteredList.map((x) => (
              <div id={`foodid${x.fid}`} key={x.fid} className='good'>
                <figure style={{ width: "450px", height: "600px" }}>
                  <img src={`/image/${x.f_img}`} alt={x.fname} style={{ width: "300px", height: "300px" }} />
                  <figcaption>{x.fname}</figcaption>
                  <figcaption>NT${x.f_price}</figcaption>
                  <button className="btnq1" onClick={this.handledown}>-</button>
                  <label id={`foodval${x.fid}`} data-foodid={x.fid} className="count">0</label>
                  <button className="btn0" onClick={this.handleAdd}>+</button>
                  <br />
                  <button id={x.fid} className="btnq" onClick={this.okButtonClick}>選購</button>
                </figure>
              </div>
            ))}
          </div>
        </div>
        {handleOpen &&
          <React.Fragment>
            <div id="background">
              <div id="div1" className={123}>
                <div id="close">
                  <span id="close-button" onClick={this.handleCloseClick}>×</span>
                  <p>HowTo露</p>
                </div>
                <div id="div2">
                  <h1>請登入會員！</h1>
                </div>
              </div>
            </div>
          </React.Fragment>
        }
        {handleOK &&
          <React.Fragment>
            <div id="background">
              <div id="div1" className={123}>
                <div id="close">
                  <span id="close-button" onClick={this.handleCloseOK}>×</span>
                  <p>HowTo露</p>
                </div>
                <div id="div2">
                  <h1>商品已加入購物車</h1>
                </div>
              </div>
            </div>
          </React.Fragment>
        }
        {handleZero &&
          <React.Fragment>
            <div id="background">
              <div id="div1" className={123}>
                <div id="close">
                  <span id="close-button" onClick={this.handleCloseOK}>×</span>
                  <p>HowTo露</p>
                </div>
                <div id="div2">
                  <h1>請選擇數量</h1>
                </div>
              </div>
            </div>
          </React.Fragment>
        }
      </React.Fragment>



    );


  }

 


  componentDidMount = async () => {
    var result = await axios.get('http://localhost:8000/food/list');
    var newState = { ...this.state };
    newState.foodList = result.data;

    // console.log(this) 
    this.setState(newState);

  }

  okButtonClick = async (e) => {
    const mtel = sessionStorage.getItem('account')
    if (mtel == null) {
      this.setState({ handleOpen: true })
    } else{

      
      
      var count = document.getElementById(`foodval${e.target.id}`).textContent
      // console.log('11111111',count)
      if (e.target.id > 5 && count != 0) {
        
        var response = await axios.get(`http://localhost:8000/mid?tel=${mtel}`);
        var newCar = { ...this.state.car };
        
        newCar = {
          mid: response.data.data[0].mid,
          fid: e.target.id,
          quantity: document.getElementById(`foodval${e.target.id}`).textContent
          
        }
        this.state.car = newCar
        this.setState(newCar)
        console.log('33333', e.target)
        console.log("123", this.state.car)
        // console.log(mtel);
        // console.log('租借日',this.state.arryDate[0]);
        // console.log('歸還日',this.state.arryDate[2]);
        
        const cars = await axios.post(
          "http://localhost:8000/mid/foodadd",
          this.state.car, // 直接傳對象作為請求值
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
          
          );
          if (cars.status === 200) {
            // 表示成功
            //alert('加入購物車')
            this.setState({ handleOK: true })
            
          } else {
            console.error(cars.data);
          }
          
          
          
          
          
        } else if(e.target.id > 5 && count == 0) {
          this.setState({ handleZero: true })
        }else if(e.target.id < 5){
          window.location.replace(`/food_detail/${e.target.id}`)

        }
      }
      }
  // 關閉 請登入會員 彈窗
  handleCloseClick = () => {
    this.setState({ handleOpen: false });
    window.location.replace('/login');
  }
  //
  handleZero = () => {
    this.setState({ handleZero: false });
   
  }
  // 關閉 已加入購物 彈窗
  handleCloseOK = () => {
    this.setState({ handleOK: false });
    window.location.href = '';
  }

}

export default Product3;
