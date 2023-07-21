import React, { Component } from 'react';
import cartstyle from '../css/cart.module.css'

class Nullcart extends Component {
    state = {}
    render() {
        return (
            <>
                <div id={cartstyle["magnifier"]}>
                    <img style={{ width: 220 }} src="/image/magnifier.png" alt="" />
                    <a href="/product/all">
                        <button id={cartstyle["nullshopping"]}>
                            <span>前往商城逛逛</span>
                        </button>
                    </a>
                </div>
            </>
        );
    }
}

export default Nullcart;