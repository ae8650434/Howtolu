import React, { Component } from 'react';
import axios from 'axios';
import Productlink from './productlc.jsx'
import plstyle from '../../css/about.module.css'
class productlink extends Component {
    state = {}
    render() {
        return (
            <>
                <div class={plstyle.favorable}>
                    <Productlink />
                    <Productlink />
                    <Productlink />
                </div>
                <div class={plstyle.favorable}>
                    <Productlink />
                    <Productlink />
                    <Productlink />
                </div>
            </>
        );
    }
    componentDidMount = async () => {
        var result = await axios.get('http://localhost:8000/productclass');
        var newState = { ...this.state };
        newState.productList = result.data;
        this.setState(newState);
        // console.log(newState.productList)
    }
}

export default productlink;