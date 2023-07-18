import React, { Component } from 'react';
import actstyle from '../../css/about.module.css'
class activity extends Component {
    state = {  } 
    render() { 
        return (
            <div id={actstyle["activity"]}>
            <p>優惠活動～～～</p>
            <ol>
                <li>到店購買出租設備買一送二，但我們只租不賣</li>
                <li>凡是去與我們合作的露營地露營，出租設備打75折</li>
                <li></li>
            </ol>
        </div>
        );
    }
}
 
export default activity;
