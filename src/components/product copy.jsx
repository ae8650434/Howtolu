import React, { Component } from 'react';
import '../css/qaz.css';
import axios from 'axios';

class Product3 extends Component {
  state = {
    productList: [],
    car:{}
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
    var quantityLabel = event.target.previousElementSibling;
    var quantity = parseInt(quantityLabel.textContent);
    quantity++;
    quantityLabel.textContent = quantity;

  }

  handledown = (event) => {
    var quantityLabel = event.target.nextElementSibling;
    var quantity = parseInt(quantityLabel.textContent);
    if (quantity > 0) {
      quantity--;
      quantityLabel.textContent = quantity;
    }
  }

  render() {
    const { foodList, selectedFood, selectedCategory } = this.props;

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
      <div className="product-container">
        <div id='qqq'></div>
        <div className='row'>
          {filteredList.map(  (x) => (
            <div id={`foodid${x.fid}`} key={x.fid} className='good'>
              <figure style={{ width: "450px", height: "600px" }}>
                <img src={`/image/${x.f_img}`} alt={x.fname} style={{ width: "300px", height: "300px" }} />
                <figcaption>{x.fname}</figcaption>
                <figcaption>NT${x.price}</figcaption>
                <button className="btnq1" onClick={this.handledown}>-</button>
                <label id={`foodval${x.fid}`} className="count">0</label>
                <button className="btn0" onClick={this.handleAdd}>+</button>
                <br />
                <button id={x.fid} className="btnq" onClick={this.okButtonClick=async (e)=>{
                  var count = document.getElementById(`foodval${e.target.id}`).textContent
                  console.log('11111111',count)
                   if(e.target.id > 5 && count != 0){
                    const mtel = sessionStorage.getItem('account')
                    if (mtel == null) {
                        this.setState({ handleOpen: true })
                    } else {
                        var response = await axios.get(`http://localhost:8000/mid?tel=${mtel}`);
                        var newCar={...this.state.car} ;
                      
                      newCar=  {
                            mid:response.data.data[0].mid,   
                            fid:e.target.id,
                            quantity:document.getElementById(`foodval${e.target.id}`).textContent
                            
                        }
                        this.state.car=newCar
                        this.setState(newCar)
                        console.log('33333',e.target)
                        console.log("123",this.state.car)
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
                            console.log("OK")
            
                        } else {
                            console.error(cars.data);
                        }
            
            
            
                    }
                     console.log( e.target)
                    }else if(e.target.id <= 5 ){
                     window.location.replace(`/food_detail/${e.target.id}`)
                   }
                }}>選購</button>
              </figure>
            </div>
          ))}
        </div>
      </div>
    );


  }

  // okButtonClick = async () => {

    // switch ()
    // console.log(this) 
       // const { selectedFood } = this.props;
    
    // const { item } = this.state;

    // // 将选定的商品数据添加到item对象中，这里可以根据实际情况自行设置
    // item.selectedFood = selectedFood;

    // await axios.post(
    //   "http://localhost:8000/product2/add",
    //   this.state.item,

    //   {
    //     headers: {
    //       "Content-type": "application/json"
    //     }
    //   }
    // );

    // window.location = "#";
  // } 


  componentDidMount = async () => {
    var result = await axios.get('http://localhost:8000/food/list');
    var newState = { ...this.state };
    newState.foodList = result.data;

    // console.log(this) 
    this.setState(newState);

  }

}

export default Product3;
