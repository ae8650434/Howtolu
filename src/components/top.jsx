import React, { Component } from 'react';
import topstyle from '../css/gotop.module.css'
class gotop extends Component {
    state = {  } 
    render() { 
        return (
            <a href="#" className={topstyle.gotop}><img src="/image/gotop.png" alt="" /></a>
        );
    }
}
 
export default gotop;