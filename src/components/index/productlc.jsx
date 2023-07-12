import React, { Component } from 'react';
import plcstyle from '../../css/about.module.css'
class protlinkc extends Component {
    state = {productlink:[{"pc_id":1,"class":"寢室帳篷","image":"product_1.png","classname":"tent"}]}
    render() {
        return (
            <div class={plcstyle.proFlex}>
                <a href="./product.html" class={plcstyle.proa}>
                    <div class={plcstyle.proinbox}>
                        <img src="/image/product_1.png" alt="" class={plcstyle.proimg} />
                        <span class={plcstyle.proSpan}>客廳帳&天幕</span>
                    </div>
                </a>
            </div>
        );        
    }
}

export default protlinkc;