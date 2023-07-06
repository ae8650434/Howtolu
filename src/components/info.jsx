import React, { Component } from 'react';

class Info extends Component {
    state = {  } 
    render() { 
        return (
            
        <div class="form short">
            <ul class="info_ul">
            <li class="info_li"><a href="./Info.html" style="text-decoration: none"><p class="info_li_first">編輯會員資料</p></a></li>
            <li class="info_li"><a href="./Order.html" style="text-decoration: none"><p class="form">訂單查詢</p></a></li>
            <li class="info_li">
            <a href="" style="text-decoration: none" class="form">登出</a>
            </li>
            </ul>
        </div>
      
        );
    }
}
 
export default Info;