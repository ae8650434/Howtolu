import React, { Component } from 'react';
import styles from '../css/food_detail.module.css';
class FoodDetail extends Component {
    state = {}
    qtyplusBn = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute('field');
        const currentVal = parseInt(this[fieldName].value);
        if (!isNaN(currentVal)) {
            this[fieldName].value = currentVal + 1;
        } else {
            this[fieldName].value = 0;
        }
    };

    qtyminusBn = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute('field');
        const currentVal = parseInt(this[fieldName].value);
        if (!isNaN(currentVal) && currentVal > 0) {
            this[fieldName].value = currentVal - 1;
        } else {
            this[fieldName].value = 0;
        }
    };

    // formSubmit = (e) => {
    //     e.preventDefault();
    // };
    render() {
        return (
            <React.Fragment>
                <div className={styles.categories_food}>
                    <p>商品分類</p>
                    <ul className={styles.categoriesUl_food}>
                        <li><a href="#">套餐</a>
                            <ul>
                                <li><a href="">賀呷套餐</a></li>
                                <li><a href="">滿漢全席</a></li>
                                <li><a href="">雙人套餐</a></li>
                                <li><a href="">素食套餐</a></li>
                                <li><a href="">快樂分享餐</a></li>
                            </ul>
                        </li>
                        <li><a href="">單點</a></li>
                    </ul>
                </div>
                <div>
                    <div className={styles.image_food}>
                        <a target="_blank" href="./public/image/比利時CanvasCamp鐘型帳(2~6人).png">
                            <img src="./public/image/比利時CanvasCamp鐘型帳(2~6人).png" /></a>
                    </div>
                    <div className={styles.commodityall_food}>
                        <div className={styles.commodity_food}>
                            <p>雙人套餐</p>
                            <p>
                                <span>NT$</span>
                                <span>1,300</span>
                                <span> — 1份</span>
                            </p>
                            <p>注意事項</p>
                            <ul>
                                <li>食材皆採「低溫冷凍」宅配出貨，須注意以下特別狀況:</li>
                                <li>收到食材請以「冷凍」方式保存，以維持生鮮產品的新鮮度。</li>
                                <li>生鮮蔬菜類皆有「凍熟」或「凍傷」的可能，若有疑慮請斟酌考量再下訂單。</li>
                                <li>因應環保，所以不提供餐具。</li>
                            </ul>
                            <p className={styles.warn}>*食材之背景擺設僅供參考。</p>
                        </div>
                        <div className={styles.myform_food}>
                            <form id={styles['myform_food']} method='POST' action='#'>
                                <label htmlFor='quantity'>數量：</label>
                                <input onClick={this.qtyminusBn} type='button' value='-' className={styles.qtyminus} field='quantity' />
                                <input type='button' name='quantity' value='0' className={styles.qty} ref={(input) => (this.quantity = input)} />
                                <input onClick={this.qtyplusBn} type='button' value='+' className={styles.qtyplus} field='quantity' />
                                <input type='button' value='選購' className={styles.reserve} />
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.food_information}>
                    <p>套餐明細</p>
                    <div className={styles.image_food}>
                        <img src="./public/image/比利時CanvasCamp鐘型帳(2~6人).png" />
                    </div>
                </div>
                <div className={styles.informationImg_food}>
                    <p>經常一起選購商品：</p>
                    <div>
                        <div className={styles.container_food}>
                            <a href=""> <img src="./public/image/Barebones LED手提鐵路復古營燈(白).jpg" alt="Avatar" className={styles.cimage} />
                                <div className={styles.overlay_food}>
                                    <div className={styles.imgtext_food}>
                                        <p>黑胡椒牛小排</p>
                                        <p>
                                            <span>NT$</span>
                                            <span>400</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={styles.container_food}>
                            <a href=""><img src="./public/image/DOD 來日天幕 TT5-631-TN.png" alt="Avatar" className={styles.cimage} />
                                <div className={styles.overlay_food}>
                                    <div className={styles.imgtext_food}>
                                        <p>筊白筍</p>
                                        <p>
                                            <span>NT$</span>
                                            <span>150</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={styles.container_food}>
                            <a href=""><img src="./public/image/KZM KAZMI 可調式高背摺疊椅(沙色).jpg" alt="Avatar" className={styles.cimage} />
                                <div className={styles.overlay_food}>
                                    <div className={styles.imgtext_food}>
                                        <p>枸杞絲瓜鋁盒</p>
                                        <p>
                                            <span>NT$</span>
                                            <span>90</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.categories_min_food}>
                    <p>商品分類</p>
                    <ul className={styles.categoriesUl_min_food}>
                        <li><a href="#">套餐</a>
                            <ul>
                                <li><a href="">賀呷套餐</a></li>
                                <li><a href="">滿漢全席</a></li>
                                <li><a href="">雙人套餐</a></li>
                                <li><a href="">素食套餐</a></li>
                                <li><a href="">快樂分享餐</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </React.Fragment>

        );
    }
}

export default FoodDetail;



