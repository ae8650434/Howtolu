import React, { Component } from 'react';
import cartstyle from '../css/cart.module.css';

class CartFood extends Component {
    state = { 
        
     } 
    render() { 
        return (
            <React.Fragment> 
                <div>
                    <img id={cartstyle["imgw"]} src="./public/image/筊白筍.jpeg" alt=""/>
                    <div id={cartstyle["shopping3"]}>
                        <span style={{fontSize: 40}}><b>筊白筍</b></span>
                        <br /><br /><br /><br /><br />
                        <div>
                            <div style={this.styles}>
                                <b id={cartstyle["moneySize"]}>金額:</b>
                                <input id={cartstyle["numberstyle"]} type="number" value="1" min="1"/>
                                <button id={cartstyle["butRubbish"]}
                                    onclick="del(2)"><img id={cartstyle["imgRubbish"]} src="/image/Rubbish.png" alt=""/></button>
                            </div>
                        </div><br /><br />
                    </div>
                </div>
            </React.Fragment> 
        );
    }
}
 
export default CartFood;