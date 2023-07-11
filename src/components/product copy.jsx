import React, { Component } from 'react';
import '../css/qaz.css'
import axios from 'axios'

//import '../js/product.js'
class Product3 extends Component {
    state = {
        productList: [{ "pid": 1, "pname": "鐘型帳(2-6人)", "price": 1800, "day": 3, "reserve": 20, "p_img": "produc_1.png", "description": "純棉材質具有防水、透氣及抗紫外線的功能，適用於4季各種不同的氣候下使用;建議適用人數：2人(奢華)/4人(舒適)/最多6人(睡袋);建議搭帳人數：1人以上;適用場地 : 草皮區", "pc_id": 1, "information": "套裝內容 : 帳篷本體、本體營柱x1、A型門柱x1、本體營釘X13、側裙營樁X14、附調節片營繩 X14、本體攜行袋、營柱收納袋、營釘收納袋;隨附配件：營槌、防水地布(先鋪設再搭帳)、帳內地墊;面積：4.83坪;直徑：450cm;高度：274cm;門高：167cm;最大容量：6人;總重量: 36 kg" }]
    }
    render() {
        return (

            <div className="product-container">
               <div></div>
                <div className='row'>
                    {this.state.productList.map((x) => {
                        return (<div className='good' id='right'>
                            <figure>
                                <img src={`/image/${x.p_img}`} />
                                <figcaption>{x.pname}</figcaption>                          
                                <figcaption>NT${x.price} - {x.day} 日</figcaption>
                                <a href="/equip_detail"><button className="btnq">立即預約</button></a>
                            </figure>
                        </div>)
                    })}
                </div>
            </div>
        );
    }
    componentDidMount = async () => {
        var result = await axios.get('http://localhost:8000/product/list');
        var newState = { ...this.state };
        newState.productList = result.data.filter((x) => x.pc_id == 1 )
        this.setState(newState);
        // console.log(newState.productList)
    }



}





export default Product3;