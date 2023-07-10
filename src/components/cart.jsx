import React, { Component } from 'react';
import cartstyle from '../css/cart.module.css';

class cart extends Component {
    state = {    }
    styleO = {
        color: 'orange'
    }

    render() {
        return (
            <>
                <br /><br /><br />
            {/* 上傳excel */}
                <div style={{ fontSize: 40 }}>
                    上傳檔案(excel)：<input style={{ fontSize: 20 }} type="file" />
                    <input style={{ fontSize: 25 }} type="submit" value="上傳" />
                </div><br /><br /><br />
            {/* 購物流程 */}
                <div id={cartstyle['process']}>
                    <span style={this.styleO}><b><ins>1.購物車確認</ins></b></span><b>&gt;</b>
                    <span><b><ins>2.確認訂單資訊</ins></b></span><b>&gt;</b>
                    <span><b><ins>3.訂單完成</ins></b></span>
                </div><br /><br /><br /><br /><br />
            {/* 放大鏡 */}
                <div id={cartstyle["magnifier"]}>
                    <img style={{width: 220}} src="/image/magnifier.png" alt=""/>
                    <a href="./product.html"><button id={cartstyle["nullshopping"]}><span>前往商城逛逛</span></button></a>
                </div>

                <div id={cartstyle['shopping']}>
                    <div id={cartstyle['null']}>
                        
                        <div id={cartstyle['text1']}>
                            <img id={cartstyle["imgw"]} src="/image/Snow Peak 卡式瓦斯爐.jpg" alt="" />
                            <div id={cartstyle['shopping3']}>
                                <span style={{ fontSize: 40 }}><b>Snow Peak 卡式瓦斯爐</b></span>
                                <br /><br /><br /><br />
                                <span><b id={cartstyle["dateSize"]}>可租借天數:1995/10/14 - 1995/10/16 共3日</b></span>
                                <p></p>
                                <div id={cartstyle['disFlex']}>
                                    <b id={cartstyle["moneySize"]}>金額:35000</b>
                                    <input id={cartstyle["numberstyle"]} type="number" min={1} />
                                    <button id={cartstyle["butRubbish"]}
                                        onclick={this.del}><img id={cartstyle["imgRubbish"]} src="/image/Rubbish.png" alt="" /></button>
                                </div> <br /><br />
                            </div>
                        </div>

                        <div id={cartstyle['text2']}>
                            <img id={cartstyle["imgw"]} src="/image/筊白筍.jpeg" alt="" />
                            <div id={cartstyle['shopping3']}>
                                <span style={{ fontSize: 40 }}><b>筊白筍</b></span>
                                <br /><br /><br /><br />
                                <div>
                                    <div id={cartstyle['disFlex']}>
                                        <b id={cartstyle["moneySize"]}>金額:35000</b>
                                        <input id={cartstyle["numberstyle"]} type="number" value="1" min="1" />
                                        <button id={cartstyle["butRubbish"]}
                                            onclick="del"><img id={cartstyle["imgRubbish"]} src="/image/Rubbish.png" alt="" /></button>
                                    </div>
                                </div><br /><br />
                            </div>
                        </div>

                        <div id={cartstyle['text3']}>
                            <img id={cartstyle["imgw"]} src="/image/Snow Peak Amenity Dome 寢室帳 L(SDE-003R)2-6人.png" alt="" />
                            <div id={cartstyle['shopping3']}>
                                <span style={{ fontSize: 40 }}><b>Snow Peak Amenity Dome 寢室帳 L(SDE-003R)2-6人</b></span>
                                <br /><br /><br /><br />
                                <span><b id={cartstyle["dateSize"]}>可租借天數:1995/10/14 - 1995/10/16 共3日</b></span>
                                <p></p>
                                <div id={cartstyle['disFlex']}>
                                    <b id={cartstyle["moneySize"]}>金額:35000</b>
                                    <input id={cartstyle["numberstyle"]} type="number" value="1" min="1" />
                                    <button id={cartstyle["butRubbish"]}
                                        onclick="del"><img id={cartstyle["imgRubbish"]} src="/image/Rubbish.png" alt="" /></button>
                                </div> <br /><br />
                            </div>
                        </div>

                        <div id={cartstyle['text4']}>
                            <img id={cartstyle["imgw"]} src="/image/黑胡椒牛小排.png" alt="" />
                            <div id={cartstyle['shopping3']}>
                                <span style={{ fontSize: 40 }}><b>黑胡椒牛小排</b></span>
                                <br /><br /><br /><br />
                                <div>
                                    <div id={cartstyle['disFlex']}>
                                        <b id={cartstyle["moneySize"]}>金額:35000</b>
                                        <input id={cartstyle["numberstyle"]} type="number" value="1" min="1" />
                                        <button id={cartstyle["butRubbish"]}
                                            onclick="del"><img id={cartstyle["imgRubbish"]} src="/image/Rubbish.png" alt="" /></button>
                                    </div>
                                </div><br /><br />
                            </div>
                        </div>
                    </div>
                </div><br />              
            {/* 總計跟前往結帳 */}
                <div id={cartstyle['shopping2']}>
                    <span style={{ fontSize: 40 }}>總計：NT100000</span>
                    <a href="./index.html"><button onclick="processBuy()" id={cartstyle["buy"]}><span>前往結帳</span></button></a>
                </div><br /><br />
            </>
        );
    }

}
export default cart;