import React, { Component } from 'react';
import '../css/product.css'
import axios from 'axios'

//import '../js/product.js'
class Product extends Component {
    state = {
        productList: {
            p_img:[{"pid":1,"pname":"鐘型帳(2-6人)","price":1800,"day":3,"reserve":20,"image":"produc_1.png","description":"純棉材質具有防水、透氣及抗紫外線的功能，適用於4季各種不同的氣候下使用;建議適用人數：2人(奢華)/4人(舒適)/最多6人(睡袋);建議搭帳人數：1人以上;適用場地 : 草皮區","class":1,"information":"套裝內容 : 帳篷本體、本體營柱x1、A型門柱x1、本體營釘X13、側裙營樁X14、附調節片營繩 X14、本體攜行袋、營柱收納袋、營釘收納袋;隨附配件：營槌、防水地布(先鋪設再搭帳)、帳內地墊;面積：4.83坪;直徑：450cm;高度：274cm;門高：167cm;最大容量：6人;總重量: 36 kg"}],
        }
    }
    render() {
        return (       
            <React.Fragment>
                




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
                            <img src={`image${this.state.productList[0].p_img}`} />
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
                </React.Fragment>
            );
        }
componentDidMount = async () => {
        var result = await axios.get('http://localhost:8000/product/list');
        var newState = { ...this.state };
        newState.productList = result.data;
        this.setState(newState);
        // console.log(newState.productList)
    }



}





export default Product;