import React, { Component } from "react";
import cartstyle from '../css/cart.module.css'

class Process extends Component {
    state = {}
    render() {
        return (
            <div id={cartstyle['process']}>
                <span style={{ color: 'orange' }}><b><ins>1.購物車確認</ins></b></span><b>&gt;</b>
                <span><b><ins>2.確認訂單資訊</ins></b></span><b>&gt;</b>
                <span><b><ins>3.訂單完成</ins></b></span>
            </div>
        );
    }
}

export default Process;



