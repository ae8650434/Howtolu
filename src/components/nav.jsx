import React, { Component } from 'react';
import navstyle from '../css/nav.module.css'
import axios from 'axios';



class Navigation extends Component {
    state = {
        id: "nav_bar"
    }
    states= {
        
    }
    render() {

        return (
            <div id={navstyle[this.state.id]}>
                <a href="/"><img id={navstyle["logo"]} src="/image/logo.png" alt="" /></a>
                <div id={navstyle['selnav']} >
                    <ul id={navstyle["navul"]}>
                        <a href="/"><li className={navstyle.tili}>首頁</li></a>
                        <li className={navstyle.tili}>所有商品
                            <ul>
                                <a href="/product/all"><li className={navstyle.conli}>裝備出租</li></a>
                                <a href="/product2/all"><li className={navstyle.conli}>食材購買</li></a>
                            </ul>
                        </li>
                        <li className={navstyle.tili}>租借內容
                            <ul>
                                <a href="../process.html"><li className={navstyle.conli}>租借流程</li></a>
                                <a href="" ><li className={navstyle.conli}>租借規範</li></a>

                            </ul>
                        </li>

                        <li className={navstyle.tili}>表單訂購
                            <ul>
                                <a href="/cart"><li className={navstyle.conli}>表單上傳</li></a>
                                <li className={navstyle.conli}>表單填寫
                                    <ul id={navstyle['a']}>
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfBpC90D4LAPmwi5iGMOShmuA6D1Lj0IvsvNUr7HUmzzhWzrQ/viewform"><li >Google表單</li></a>
                                        <a href="/excel/HowTo露.xlsx" download><li >Excel表單下載</li></a>

                                    </ul>
                                </li>

                            </ul>
                        </li>



                    </ul>
                </div>
                <div id={navstyle['nav_icon']}>

                    <div id="navcartnum" className={navstyle.navcartnum}>
                        <span>{this.states.length}</span>
                        
                    </div>
                    <a href="/cart"> <button id={navstyle['navcarbtn']}></button></a>
                    <button id={navstyle['navmembtn']} onClick={this.btnmem}><img id='navmemimg' src='/image/mem.png' className={navstyle.navmemimg} /></button>
                    <ul id='memulin' className={navstyle.memul}>
                        <a href="/login"><li>會員登入</li></a>
                        <a href="/register"><li>註冊會員</li></a>
                    </ul>
                    <ul id='memulout' className={navstyle.memul}>
                        <a href="/info"><li className={navstyle.conli}>會員資料</li></a>
                        <a href="/order_list"><li className={navstyle.conli}>訂單查詢</li></a>
                        <a href="/" onClick={this.logoutbtn}><li>會員登出</li></a>

                    </ul>

                </div>
            </div>
        );
    }

    btnmem = () => {
        if (sessionStorage.getItem('account')) {
       
            if (document.getElementById("memulout").style.display == "block") {
                document.getElementById("memulout").style.display = "none";
            } else {
                document.getElementById("memulout").style.display = "block";
            }
        }
        else {

            if (document.getElementById("memulin").style.display == "block") {
                document.getElementById("memulin").style.display = "none";
            } else {
                document.getElementById("memulin").style.display = "block";
            }
        }
    }

    logoutbtn = () => {
        sessionStorage.clear();

    }
    componentDidMount=async ()=>{
        if (sessionStorage.getItem('account')) {
        var result=await axios.get("http://localhost:8000/cart") 
           
            this.states= result.data.filter((x)=>x.tel==sessionStorage.getItem('account'))
             var  navcartnum=document.getElementById("navcartnum")
      
        if(this.states.length>=28){
            navcartnum.display="inlineBlock";
        }else{
            navcartnum.display="none";
        }
            console.log(this.states.length)
            this.setState(this.states)
        }
    }

}
window.onload = () => {
    console.log(this)
    if (sessionStorage.getItem('account')) {
     

//         document.getElementById("navmemimg").src ='/image/food_11.png'
    }

}
export default Navigation;