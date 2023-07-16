import React, { Component } from 'react';
import axios from 'axios';
import styles from '../css/food_detail.module.css';
class FoodDetail extends Component {
    state = {}
    states = {
        food:
            [{
                "fid": 1, "fname": "賀呷套餐", "price": 2500, "f_img": "food_1.png", "fc_id": 1, "fdetails_image": "fdetails_1.png"
            }]
    }
    stateAll = {
        foodList:
            [{
                "fid": 1, "fname": "賀呷套餐", "price": 2500, "f_img": "food_1.png", "fc_id": 1, "fdetails_image": "fdetails_1.png"
            },
            {
                "fid": 1, "fname": "賀呷套餐", "price": 2500, "f_img": "food_1.png", "fc_id": 1, "fdetails_image": "fdetails_1.png"
            },
            {
                "fid": 1, "fname": "賀呷套餐", "price": 2500, "f_img": "food_1.png", "fc_id": 1, "fdetails_image": "fdetails_1.png", "fdetails_text": "套餐明細"
            }
            ]
    }
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
        const { fidNum } = this.props;
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
                        <a target="_blank" href={`/image/${this.states.food[0].f_img}`}>
                            <img src={`/image/${this.states.food[0].f_img}`} /></a>
                    </div>
                    <div className={styles.commodityall_food}>
                        <div className={styles.commodity_food}>
                            <p>{this.states.food[0].fname}</p>
                            <p>
                                <span>NT$</span>
                                <span>{this.states.food[0].price}</span>
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
                <div >
                    <div className={styles.food_information}>
                        <p>套餐明細</p>
                        <div className={styles.image_fdetails}>
                            <img className={styles.image_f} src={`/image/${this.states.food[0].fdetails_image}`} />
                        </div>
                    </div>
                </div>
                <div className={styles.informationImg_food}>
                    <p>經常一起選購食材：</p>
                    <div>
                        <div className={styles.container_food}>
                            <a href="/product2"> <img src={`/image/${this.stateAll.foodList[0].f_img}`} alt="Avatar"
                                style={{ width: '350px', height: '350px' }} className={styles.cimage_food} />
                                <div className={styles.overlay_food}>
                                    <div className={styles.imgtext_food}>
                                        <p>{this.stateAll.foodList[0].fname}</p>
                                        <p>
                                            <span>NT$</span>
                                            <span>{this.stateAll.foodList[0].price}</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={styles.container_food}>
                            <a href="/product2"><img src={`/image/${this.stateAll.foodList[1].f_img}`} alt="Avatar"
                                style={{ width: '350px', height: '350px' }} className={styles.cimage_food} />
                                <div className={styles.overlay_food}>
                                    <div className={styles.imgtext_food}>
                                        <p>{this.stateAll.foodList[1].fname}</p>
                                        <p>
                                            <span>NT$</span>
                                            <span>{this.stateAll.foodList[1].price}</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={styles.container_food}>
                            <a href="/product2"><img src={`/image/${this.stateAll.foodList[2].f_img}`} alt="Avatar"
                                style={{ width: '350px', height: '350px' }} className={styles.cimage_food} />
                                <div className={styles.overlay_food}>
                                    <div className={styles.imgtext_food}>
                                        <p>{this.stateAll.foodList[2].fname}</p>
                                        <p>
                                            <span>NT$</span>
                                            <span>{this.stateAll.foodList[2].price}</span>
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
    componentDidMount = async () => {
        // 查單一商品
        var fid = this.props.match.params.fid;
        if (fid>5) {
            window.location="/reviseknjbl"
        }
        var url = `http://localhost:8000/food/${fid}`;
        var result = await axios.get(url);
        var newStates = { ...this.states };
        newStates.food = result.data;
        // console.log("555",newStates.food)
        this.states = newStates;
        this.setState(this.states);
     

        // 查全部商品
        var urlAll = "http://localhost:8000/food/list";
        var resultAll = await axios.get(urlAll);
        var newStateAll = { ...this.stateAll };
        newStateAll.foodList = resultAll.data;
        // console.log("123",newStateAll.productList);
        this.stateAll = newStateAll;
        this.setState(this.stateAll);
        // console.log(typeof this.props.match.params.pid)
        var abc = parseInt(this.props.match.params.fid);
        abc += 5
        var bbb = abc + 1
        var ccc = abc + 2
        // console.log("555",newStateAll.productList[abc]);
        if (abc >= 18) {
            abc -= 18
        } else {
            abc = abc
        }

        if (bbb >= 18) {
            bbb -= 18
        } else {
            bbb = bbb
        }

        if (ccc >= 18) {
            ccc -= 18
        } else {
            ccc = ccc
        }
        // console.log(abc);
        this.stateAll.foodList[0] = this.stateAll.foodList[abc]
        this.stateAll.foodList[1] = this.stateAll.foodList[bbb]
        // console.log(this.stateAll.productList[1])
        this.stateAll.foodList[2] = this.stateAll.foodList[ccc]

    }
}

export default FoodDetail;



