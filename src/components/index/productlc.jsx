import React, { Component } from 'react';
import plcstyle from '../../css/about.module.css'
class protlinkc extends Component {
    state = {}
    render() {
        return (
            <div class={plcstyle.proFlex}>
                <a href="./product.html" class={plcstyle.proa}>
                    <div class={plcstyle.proinbox}>
                        <img src="./public/image/DOD3人印地安帳-removebg-preview.png" alt="" class={plcstyle.proimg} />
                        <span class={plcstyle.proSpan}>帳棚類</span>
                    </div>
                </a>
            </div>
        );
    }
}

export default protlinkc;