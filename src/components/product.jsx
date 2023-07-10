import React, { Component } from 'react';
import '../css/product.css'
import axios from 'axios'

//import '../js/product.js'
class Product extends Component {
    state = {
        productList: {
            p_img:'./image/food_1.png'
        }
    }
    render() {
        return (       
            <React.Fragment>
                <h1>{console.log(this.state.productList[1])}</h1>




                <div id="container">
                    <div id="categories" className="categories">
                        <p>商品分類</p>
                        <ul className="categoriesUl">
                            <li><a href="https://www.google.com/">寢室帳篷</a></li>
                            <li><a href="">客廳帳&天幕</a></li>
                            <li><a href="">寢室用具</a></li>
                            <li><a href="">戶外用品</a></li>
                            <li><a href="">爐具</a></li>
                            <li><a href="">保鮮保冷</a></li>
                            <li><a href="">燈具</a></li>
                            <li><a href="">影音設備</a></li>
                            <li><a href="">保暖裝備</a></li>
                            <li><a href="">常用配件</a></li>
                        </ul>
                    </div>


                    <div className="productcotent">

                        <figure>
                            <img src="./image/dog01.jpeg" />
                            <figcaption>比利時CanvasCamp鐘型帳(2~6人)</figcaption>
                            <p></p>
                            <figcaption>NT$1,980 - 3 日</figcaption>
                            <a href="/equip_detail"><button className="btnq">立即預約</button></a>
                        </figure>
                        <figure>
                            <img src={this.state.productList.p_img} />
                            <figcaption>比利時CanvasCamp鐘型帳(2~6人)</figcaption>
                            <p></p>
                            <figcaption>NT$1,980 - 3 日</figcaption>
                            <a href="/equip_detail"><button className="btnq">立即預約</button></a>
                        </figure>
                        <figure>
                            <img src="./image/dog01.jpeg" />
                            <figcaption>比利時CanvasCamp鐘型帳(2~6人)</figcaption>
                            <p></p>
                            <figcaption>NT$1,980 - 3 日</figcaption>
                            <a href="/equip_detail"><button className="btnq">立即預約</button></a>
                        </figure>

                    </div>
                    <div>


                        <div className="productcotent2">
                            <figure>
                                <img src="./image/dog01.jpeg" />
                                <figcaption>比利時CanvasCamp鐘型帳(2~6人)</figcaption>
                                <p></p>
                                <figcaption>NT$1,980 - 3 日</figcaption>
                                <a href="/equip_detail"><button className="btnq">立即預約</button></a>
                            </figure>
                            <figure>
                                <img src="./image/dog01.jpeg" />
                                <figcaption>比利時CanvasCamp鐘型帳(2~6人)</figcaption>
                                <p></p>
                                <figcaption>NT$1,980 - 3 日</figcaption>
                                <a href="/equip_detail"><button className="btnq">立即預約</button></a>
                            </figure>
                            <figure>
                                <img src="./image/dog01.jpeg" />
                                <figcaption>比利時CanvasCamp鐘型帳(2~6人)</figcaption>
                                <p></p>
                                <figcaption>NT$1,980 - 3 日</figcaption>
                                <a href="/equip_detail"><button className="btnq">立即預約</button></a>
                            </figure>
                        </div>




                    </div>
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
                            <li><a href="https://www.google.com/">寢室帳篷</a></li>
                            <li><a href="#">客廳帳&天幕</a></li>
                            <li><a href="#">寢室用具</a></li>
                            <li><a href="#">戶外用品</a></li>
                            <li><a href="#">爐具</a></li>
                            <li><a href="#">保鮮保冷</a></li>
                            <li><a href="#">燈具</a></li>
                            <li><a href="#">影音設備</a></li>
                            <li><a href="#">保暖裝備</a></li>
                            <li><a href="#">常用配件</a></li>
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
        var result = await axios.get('http://localhost:8000/product/list');
        var newState = { ...this.state };
        newState.productList = result.data;
        this.setState(newState);
        console.log(newState)
    }



}





export default Product;