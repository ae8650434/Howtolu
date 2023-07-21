import React, { Component } from 'react';
import axios from 'axios';
import styles from '../css/food_detail.module.css';
import Productbar2 from './productbar2'
class FoodDetail extends Component {
    constructor(props) {
        super(props);
        var foodId = null;
        this.state = {
            food:
                [{
                    "fid": 1, "fname": "賀呷套餐", "price": 2500, "f_img": "food_1.png", "fc_id": 1, "fdetails_image": "fdetails_1.png"
                }],
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
                ],
            count: 0,
            car: {
                mid: '',
                fid: '',
                quantity: ''
            },
            quantity: sessionStorage.getItem(`foodval${foodId}`)
        }
    }
    handleAdd = () => {
        this.setState((prevState) => ({
            quantity: prevState.quantity + 1
        }), () => {
            const foodId = null;
            sessionStorage.setItem(`foodval${foodId}`, this.state.quantity.toString());
        });
    };
    
    handleMinus = () => {
        this.setState((prevState) => ({
            quantity: prevState.quantity > 0 ? prevState.quantity - 1 : 0
        }), () => {
            const foodId = null;
            sessionStorage.setItem(`foodval${foodId}`, this.state.quantity.toString());
        });
    };

    foodClick = (category) => {
        this.setState({ fcidFood: category, selectedFood: null });

    };

    render() {
        const { handleOpen, handleOK } = this.state;
        const foodId = null; // 
        const quantity = sessionStorage.getItem(`foodval${foodId}`);

        return (
            <React.Fragment>
                <div className={styles.categories_food}>
                    <Productbar2 className={styles.categories_food} />
                    {/* <p>商品分類</p>
                    <ul className={styles.categoriesUl_food}>
                        <li><a href="http://localhost:3000/product2/combo">套餐</a>
                            <ul>
                                <li><a href="http://localhost:3000/food_detail/1">賀呷套餐</a></li>
                                <li><a href="http://localhost:3000/food_detail/2">滿漢全席</a></li>
                                <li><a href="http://localhost:3000/food_detail/3">雙人套餐</a></li>
                                <li><a href="http://localhost:3000/food_detail/4">素食套餐</a></li>
                                <li><a href="http://localhost:3000/food_detail/5">快樂分享餐</a></li>
                            </ul>
                        </li>
                        <li><a href="http://localhost:3000/product2/SinglePoint">單點</a></li>
                    </ul> */}
                </div>
                <div>
                    <div className={styles.image_food}>
                        <a target="_blank" href={`/image/${this.state.food[0].f_img}`}>
                            <img src={`/image/${this.state.food[0].f_img}`} /></a>
                    </div>
                    <div className={styles.commodityall_food}>
                        <div className={styles.commodity_food}>
                            <p>{this.state.food[0].fname}</p>
                            <p>
                                <span>NT$</span>
                                <span>{this.state.food[0].price}</span>
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
                            <form id={styles['myform_food']} method='get' action='#'>
                                <label htmlFor='quantity'>數量：</label>
                                <input onClick={this.handleMinus} type='button' value='-' className={styles.qtyminus} field='quantity' />
                                <input type='button' name='quantity' value={this.state.quantity} className={styles.qty} ref={(input) => (this.quantity = input)} />
                                <input onClick={this.handleAdd} type='button' value='+' className={styles.qtyplus} field='quantity' />
                                <input type='button' value='選購' className={styles.reserve} onClick={this.handleReserve} />

                            </form>
                        </div>
                    </div>
                </div>
                <div >
                    <div className={styles.food_information}>
                        <p>套餐明細</p>
                        <div className={styles.image_fdetails}>
                            <img className={styles.image_f} src={`/image/${this.state.food[0].fdetails_image}`} />
                        </div>
                    </div>
                </div>
                <div className={styles.informationImg_food}>
                    <p>經常一起選購食材：</p>
                    <div>
                        <div className={styles.container_food}>
                            <a href="/product2"> <img src={`/image/${this.state.foodList[0].f_img}`} alt="Avatar"
                                style={{ width: '350px', height: '350px' }} className={styles.cimage_food} />
                                <div className={styles.overlay_food}>
                                    <div className={styles.imgtext_food}>
                                        <p>{this.state.foodList[0].fname}</p>
                                        <p>
                                            <span>NT$</span>
                                            <span>{this.state.foodList[0].price}</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={styles.container_food}>
                            <a href="/product2"><img src={`/image/${this.state.foodList[1].f_img}`} alt="Avatar"
                                style={{ width: '350px', height: '350px' }} className={styles.cimage_food} />
                                <div className={styles.overlay_food}>
                                    <div className={styles.imgtext_food}>
                                        <p>{this.state.foodList[1].fname}</p>
                                        <p>
                                            <span>NT$</span>
                                            <span>{this.state.foodList[1].price}</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={styles.container_food}>
                            <a href="/product2"><img src={`/image/${this.state.foodList[2].f_img}`} alt="Avatar"
                                style={{ width: '350px', height: '350px' }} className={styles.cimage_food} />
                                <div className={styles.overlay_food}>
                                    <div className={styles.imgtext_food}>
                                        <p>{this.state.foodList[2].fname}</p>
                                        <p>
                                            <span>NT$</span>
                                            <span>{this.state.foodList[2].price}</span>
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
                        <li><a href="http://localhost:3000/product2/combo">套餐</a>
                            <ul>
                                <li><a href="http://localhost:3000/food_detail/1">賀呷套餐</a></li>
                                <li><a href="http://localhost:3000/food_detail/2">滿漢全席</a></li>
                                <li><a href="http://localhost:3000/food_detail/3">雙人套餐</a></li>
                                <li><a href="http://localhost:3000/food_detail/4">素食套餐</a></li>
                                <li><a href="http://localhost:3000/food_detail/5">快樂分享餐</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {handleOpen &&
                    <React.Fragment>
                        <div id={styles["background"]}>
                            <div id={styles["div1"]} className={styles.content}>
                                <div id={styles["close"]}>
                                    <span id={styles["close-button"]} onClick={this.handleCloseClick}>×</span>
                                    <p>HowTo露</p>
                                </div>
                                <div id={styles["div2"]}>
                                    <h1>請登入會員！</h1>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }
                {handleOK &&
                    <React.Fragment>
                        <div id={styles["background"]}>
                            <div id={styles["div1"]} className={styles.content}>
                                <div id={styles["close"]}>
                                    <span id={styles["close-button"]} onClick={this.handleCloseOK}>×</span>
                                    <p>HowTo露</p>
                                </div>
                                <div id={styles["div2"]}>
                                    <h1>商品已加入購物車</h1>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }

            </React.Fragment>

        );
    }
    componentDidMount = async () => {
        // var foodId = null;
        // const quantity = sessionStorage.getItem(`foodval${foodId}`);
        // this.setState({ quantity: parseInt(quantity) || 0 });
        // 查單一商品
        var fid = this.props.match.params.fid;
        if (fid > 5) {
            window.location = "/reviseknjbl"
        }
        var url = `http://localhost:8000/food/${fid}`;
        var result = await axios.get(url);
        var newstate = { ...this.state };
        newstate.food = result.data;
        // console.log("555",newstate.food)
        this.state = newstate;
        this.setState(this.state);


        // 查全部商品
        var urlAll = "http://localhost:8000/food/list";
        var resultAll = await axios.get(urlAll);
        var newstate = { ...this.state };
        newstate.foodList = resultAll.data;
        // console.log("123",newstate.productList);
        this.state = newstate;
        this.setState(this.state);
        // console.log(typeof this.props.match.params.pid)
        var abc = parseInt(this.props.match.params.fid);
        abc += 5
        var bbb = abc + 1
        var ccc = abc + 2
        // console.log("555",newstate.productList[abc]);
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
        this.state.foodList[0] = this.state.foodList[abc]
        this.state.foodList[1] = this.state.foodList[bbb]
        // console.log(this.state.productList[1])
        this.state.foodList[2] = this.state.foodList[ccc]

    }
    // 判斷 是否有登入會員
    handleReserve = async (e) => {
        const mtel = sessionStorage.getItem('account')
        if (mtel == null) {
            this.setState({ handleOpen: true })
        } else {
            var response = await axios.get(`http://localhost:8000/mid?tel=${mtel}`);
            var newCar = { ...this.state.car };

            newCar = {
                mid: response.data.data[0].mid,
                fid: this.state.food[0].fid,
                quantity: this.state.count
            }
            this.state.car = newCar
            this.setState(newCar)
            console.log("123", this.state.car)
            // console.log(mtel);
            this.setState({ handleOK: true })

            const cars = await axios.post(
                "http://localhost:8000/mid/foodadd",
                this.state.car, // 直接傳對象作為請求值
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }

            );
            if (cars.status === 200) {
                // 表示成功
                console.log("OK");

            } else {
                console.error(cars.data);
            }



        }
    }

    // 關閉 請登入會員 彈窗
    handleCloseClick = () => {
        this.setState({ handleOpen: false });
        const { history } = this.props;
        history.push('/login');
    }
    // 關閉 已加入購物 彈窗
    handleCloseOK = () => {
        this.setState({ handleOK: false });
        const { historys } = this.props;
        window.location.href = 'http://localhost:3000/product2/all';
    }

}

export default FoodDetail;



