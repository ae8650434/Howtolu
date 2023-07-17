import React, { Component } from 'react';
import axios from 'axios';
import Productlink from './productlc.jsx'
import plstyle from '../../css/about.module.css'
class productlink extends Component {
    state = {productList:[{"pc_id":1,"class":"寢室帳篷","image":"product_1.png","classname":"tent"},{"pc_id":2,"class":"客廳帳&天幕","image":"product_7.png","classname":"canopy"},{"pc_id":3,"class":"寢室用具","image":"product_10.png","classname":"mattress"},{"pc_id":4,"class":"戶外用品","image":"product_14.png","classname":"outdoor"},{"pc_id":5,"class":"爐具","image":"product_19.png","classname":"stove"},{"pc_id":6,"class":"保鮮保冷","image":"product_20.png","classname":"fresh"},{"pc_id":7,"class":"燈具","image":"product_22.png","classname":"lamp"},{"pc_id":8,"class":"影音設備","image":"product_26.png","classname":"audio"},{"pc_id":9,"class":"保暖裝備","image":"product_29.png","classname":"warm"},{"pc_id":10,"class":"常用配件","image":"product_31.png","classname":"accessories"}]}
    render() {
        var productList=this.state
        return (
            <>
                <div class={plstyle.favorable}>
                    <Productlink 
                    classn={this.state.productList[0].class}
                    image={this.state.productList[0].image}
                    linkn={this.state.productList[0].classname}
                    />
                    <Productlink 
                    classn={this.state.productList[1].class}
                    image={this.state.productList[1].image}
                    linkn={this.state.productList[1].classname}
                    />
                    <Productlink 
                    classn={this.state.productList[2].class}
                    image={this.state.productList[2].image}
                    linkn={this.state.productList[2].classname}
                    />
                    
                </div>
                <div class={plstyle.favorable}>
                <Productlink 
                    classn={this.state.productList[3].class}
                    image={this.state.productList[3].image}
                    linkn={this.state.productList[3].classname}
                    />
                    <Productlink 
                    classn={this.state.productList[4].class}
                    image={this.state.productList[4].image}
                    linkn={this.state.productList[4].classname}
                    />
                    <Productlink 
                    classn={this.state.productList[5].class}
                    image={this.state.productList[5].image}
                    linkn={this.state.productList[5].classname}
                    />
                </div>
            </>
        );
    }
    componentDidMount = async () => {
        var result = await axios.get('http://localhost:8000/productclass');
        var newState = { ...this.state };
        newState.productList = result.data;
        for(var n=0 ;n<1000;n++){
            var a=newState.productList
            let i=Math.floor(Math.random()*a.length);
            let j=Math.floor(Math.random()*a.length);
            let tmp=a[i]
            a[i]=a[j]
            a[j]=tmp
        }
        this.state=newState;
        this.setState(newState);
        console.log(this.state.productList[0])
    }
}

export default productlink;