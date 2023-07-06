import React, { Component } from 'react';
import styles from '../css/equip_detail.module.css';

class EquipDetail extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={styles.categories}>
                    <p>商品分類</p>
                    <ul className={styles.categoriesUl}>
                        <li><a href="">寢室帳篷</a></li>
                        <li><a href="">客廳帳&天幕</a></li>
                        <li><a href="">寢室用具</a></li>
                        <li><a href="">戶外用品</a></li>
                        <li><a href="">爐具</a></li>
                        <li><a href="">保鮮保冷</a></li>
                        <li><a href="">燈具</a></li>
                        <li><a href="">影音設備</a></li>
                        <li><a href="">保暖裝備</a></li>
                        <li><a href="">常用配件</a></li>
                    </ul>
                </div>
                <div>
                    <div className={styles.image}>
                        <a target="_blank" href="/image/p123.png">
                            <img src="/image/p123.png" /></a>
                    </div>
                    <div className={styles.commodityall}>
                        <div className={styles.commodity}>
                            <p>鐘型帳(2~6人)</p>
                            <p>
                                <span>NT$</span>
                                <span>1,800</span>
                                <span>— 3日</span>
                            </p>
                            <ul>
                                <li>純棉材質具有防水、透氣及抗紫外線的功能，適用於4季各種不同的氣候下使用</li>
                                <li>建議適用人數：2人(奢華)/4人(舒適)/最多6人(睡袋)</li>
                                <li>建議搭帳人數：1人以上</li>
                                <li>適用場地 : 草皮區</li>
                            </ul>
                            <p className={styles.warn}>*提醒您請於預約下單後3日內完成付款，逾時訂單將會取消並釋出商品供他人預訂。</p>
                        </div>
        
                        <div className={styles.myform}>
                            <form id={styles['myform']} method='get' action='#'>
                                <div id={styles["datepicker_div"]}></div>
                                <label for="">數量：</label>
                                <input type='button' value='-' className={styles.qtyminus} field='quantity' />
                                <input type='button' name='quantity' value='0' className={styles.qty} />
                                <input type='button' value='+' className={styles.qtyplus} field='quantity' />
                                <input type='submit' value='立即預約' className={styles.reserve} />
                                <p><span>庫存量:</span><span>10個</span></p>
                                <p id={styles["bee"]}></p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.information}>
                    <p>商品資訊</p>
                    <ul>
                        <li>套裝內容 : 帳篷本體、本體營柱x1、A型門柱x1、本體營釘X13、側裙營樁X14、附調節片營繩 X14、本體攜行袋、營柱收納袋、營釘收納袋</li>
                        <li>隨附配件：營槌、防水地布(先鋪設再搭帳)、帳內地墊</li>
                        <li>面積：4.83坪</li>
                        <li>直徑：450cm</li>
                        <li>高度：274cm</li>
                        <li>門高：167cm</li>
                        <li>最大容量：6人</li>
                        <li>總重量: 36 kg</li>
                    </ul>
                </div>
                <div className={styles.informationImg}>
                    <p>經常一起選購商品：</p>
                    <div>
                        <div className={styles.container}>
                            <a href=""> <img className={styles.cimage} src="/image/Barebones LED手提鐵路復古營燈(白).jpg" alt="Avatar" />
                                <div className={styles.overlay}>
                                    <div className={styles.imgtext}>
                                        <p>LED手提鐵路復古營燈(白)</p>
                                        <p>
                                            <span>NT$</span>
                                            <span>200</span>
                                            <span>— 3日</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={styles.container}>
                            <a href=""><img className={styles.cimage} src="/image/DOD 來日天幕 TT5-631-TN.png" alt="Avatar" />
                                <div className={styles.overlay}>
                                    <div className={styles.imgtext}>
                                        <p>天幕</p>
                                        <p>
                                            <span>NT$</span>
                                            <span>300</span>
                                            <span>— 3日</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={styles.container}>
                            <a href=""><img className={styles.cimage} src="/image/KZM KAZMI 可調式高背摺疊椅(沙色).jpg" alt="Avatar" />
                                <div className={styles.overlay}>
                                    <div className={styles.imgtext}>
                                        <p>可調式高背摺疊椅(沙色)</p>
                                        <p>
                                            <span>NT$</span>
                                            <span>150</span>
                                            <span>— 3日</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.categories_min}>
                    <p>商品分類</p>
                    <ul className={styles.categoriesUl_min}>
                        <li><a href="">寢室帳篷</a></li>
                        <li><a href="">客廳帳&天幕</a></li>
                        <li><a href="">寢室用具</a></li>
                        <li><a href="">戶外用品</a></li>
                        <li><a href="">爐具</a></li>
                        <li><a href="">保鮮保冷</a></li>
                        <li><a href="">燈具</a></li>
                        <li><a href="">影音設備</a></li>
                        <li><a href="">保暖裝備</a></li>
                        <li><a href="">常用配件</a></li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default EquipDetail;