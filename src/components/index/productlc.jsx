import React, { Component } from 'react';
import plcstyle from '../../css/about.module.css'
class protlinkc extends Component {
    state = {productlink:[{"pc_id":1,"class":"寢室帳篷","image":"product_1.png","classname":"tent"}]}
    render() {
        return (
            <div class={plcstyle.proFlex}>
               {console.log(this)}
                <a href={`/product/${this.props.linkn}`}  class={plcstyle.proa}>
                    <div class={plcstyle.proinbox}>
                        <img src={`/image/${this.props.image}`} alt="" class={plcstyle.proimg} />
                        <span class={plcstyle.proSpan}>{this.props.classn}</span>
                    </div>
                </a>
            </div>
        );        
    }
}

export default protlinkc;