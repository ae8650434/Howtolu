import React from 'react';
import navstyle from '../css/nav.module.css'
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>       
          <NavLink to="/"><img src="/image/logo.png" alt="" /></NavLink>
          <div id={navstyle['selnav']} >
                <ul id={navstyle["navul"]}>
                    <a href="/index.html"><li className={navstyle.tili}>首頁</li></a>
                   <li className={navstyle.tili}>所有商品
                        <ul>
                            <a href="/index.html"><li className={navstyle.conli}>設備出租</li></a>  
                            <a href=""><li className={navstyle.conli}>食材購買</li></a>                              
                        </ul>
                    </li>
                   <li className={navstyle.tili}>租借內容
                        <ul>
                            <a href=""><li className={navstyle.conli}>租借流程</li></a>  
                            <a href="" ><li className={navstyle.conli}>租借規範</li></a>  
                            
                        </ul>
                    </li>
                    
                    <li className={navstyle.tili}>表單訂購
                        <ul>
                            <a href=""><li className={navstyle.conli}>表單上傳</li></a>  
                            <li  className={navstyle.conli}>表單填寫
                                <ul id={navstyle['a']}>
                                    <a href=""><li >Google表單</li></a>  
                                    <a href="./public/image/logo-removebg-preview.png" download><li >Excel表單下載</li></a>  
                                    
                                </ul>
                            </li>  
                            
                        </ul>
                    </li>
                    
                    <li  className={navstyle.tili}>會員專區
                        <ul>
                            <a href=""><li className={navstyle.conli}>會員資料</li></a>  
                            <a href=""><li className={navstyle.conli}>訂單查詢</li></a>  
                            
                        </ul>
                    </li>
                    
                </ul>
            </div>
            <div id={navstyle['nav_icon']}>
                <a href="/index.html"> <button id={navstyle['navcarbtn']}></button></a>
                <button id={navstyle['navmembtn']}></button>
                <ul id={navstyle['memul']} className={navstyle.memul}>
                    <a href=""><li>會員登入</li></a>
                    <a href=""><li>註冊會員</li></a>
                </ul>
                
            </div>
       </div>
    );
}
 
export default Navigation;