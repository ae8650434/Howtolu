import React, { Component } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import styles from '../css/equip_detail.module.css';
import Productbarr from './productbar';
import '../css/calendar.css';
// import Modal from 'react-modal';

// Modal.setAppElement('#root'); // 設定應用的根元素

class EquipDetail extends Component {
    // state = { isFlying: false }
    // state = {
    //     product:
    //         [{
    //             pid: 1, pname: "鐘型帳(2-6人)", price: 1800, day: 3, reserve: 20, p_img: "product_1.png",
    //             description: "純棉材質具有防水、透氣及抗紫外線的功能，適用於4季各種不同的氣候下使用;建議適用人數：2人(奢華)/4人(舒適)/最多6人(睡袋);建議搭帳人數：1人以上;適用場地 : 草皮區",
    //             pc_id: 1, information: "套裝內容 : 帳篷本體、本體營柱x1、A型門柱x1、本體營釘X13、側裙營樁X14、附調節片營繩 X14、本體攜行袋、營柱收納袋、營釘收納袋;隨附配件：營槌、防水地布(先鋪設再搭帳)、帳內地墊;面積：4.83坪;直徑：450cm;高度：274cm;門高：167cm;最大容量：6人;總重量: 36 kg"
    //         }]
    // }
    // state = {
    //     productList:
    //         [{
    //             pid: 1, pname: "鐘型帳(2-6人)", price: 1800, day: 3, reserve: 20, p_img: "produc_1.png",
    //             description: "純棉材質具有防水、透氣及抗紫外線的功能，適用於4季各種不同的氣候下使用;建議適用人數：2人(奢華)/4人(舒適)/最多6人(睡袋);建議搭帳人數：1人以上;適用場地 : 草皮區",
    //             pc_id: 1, information: "套裝內容 : 帳篷本體、本體營柱x1、A型門柱x1、本體營釘X13、側裙營樁X14、附調節片營繩 X14、本體攜行袋、營柱收納袋、營釘收納袋;隨附配件：營槌、防水地布(先鋪設再搭帳)、帳內地墊;面積：4.83坪;直徑：450cm;高度：274cm;門高：167cm;最大容量：6人;總重量: 36 kg"
    //         },
    //         {
    //             pid: 1, pname: "鐘型帳(2-6人)", price: 1800, day: 3, reserve: 20, p_img: "produc_1.png",
    //             description: "純棉材質具有防水、透氣及抗紫外線的功能，適用於4季各種不同的氣候下使用;建議適用人數：2人(奢華)/4人(舒適)/最多6人(睡袋);建議搭帳人數：1人以上;適用場地 : 草皮區",
    //             pc_id: 1, information: "套裝內容 : 帳篷本體、本體營柱x1、A型門柱x1、本體營釘X13、側裙營樁X14、附調節片營繩 X14、本體攜行袋、營柱收納袋、營釘收納袋;隨附配件：營槌、防水地布(先鋪設再搭帳)、帳內地墊;面積：4.83坪;直徑：450cm;高度：274cm;門高：167cm;最大容量：6人;總重量: 36 kg"
    //         },
    //         {
    //             pid: 1, pname: "鐘型帳(2-6人)", price: 1800, day: 3, reserve: 20, p_img: "produc_1.png",
    //             description: "純棉材質具有防水、透氣及抗紫外線的功能，適用於4季各種不同的氣候下使用;建議適用人數：2人(奢華)/4人(舒適)/最多6人(睡袋);建議搭帳人數：1人以上;適用場地 : 草皮區",
    //             pc_id: 1, information: "套裝內容 : 帳篷本體、本體營柱x1、A型門柱x1、本體營釘X13、側裙營樁X14、附調節片營繩 X14、本體攜行袋、營柱收納袋、營釘收納袋;隨附配件：營槌、防水地布(先鋪設再搭帳)、帳內地墊;面積：4.83坪;直徑：450cm;高度：274cm;門高：167cm;最大容量：6人;總重量: 36 kg"
    //         }
    //         ]
    // }

    constructor(props) {
        super(props);

        // 設定星期
        const today = new Date();
        const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate());
        const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        this.state = {
            product:
            [{
                pid: 1, pname: "鐘型帳(2-6人)", price: 1800, day: 3, reserve: 20, p_img: "product_1.png",
                description: "純棉材質具有防水、透氣及抗紫外線的功能，適用於4季各種不同的氣候下使用;建議適用人數：2人(奢華)/4人(舒適)/最多6人(睡袋);建議搭帳人數：1人以上;適用場地 : 草皮區",
                pc_id: 1, information: "套裝內容 : 帳篷本體、本體營柱x1、A型門柱x1、本體營釘X13、側裙營樁X14、附調節片營繩 X14、本體攜行袋、營柱收納袋、營釘收納袋;隨附配件：營槌、防水地布(先鋪設再搭帳)、帳內地墊;面積：4.83坪;直徑：450cm;高度：274cm;門高：167cm;最大容量：6人;總重量: 36 kg"
            }],
            productList:
            [{
                pid: 1, pname: "鐘型帳(2-6人)", price: 1800, day: 3, reserve: 20, p_img: "produc_1.png",
                description: "純棉材質具有防水、透氣及抗紫外線的功能，適用於4季各種不同的氣候下使用;建議適用人數：2人(奢華)/4人(舒適)/最多6人(睡袋);建議搭帳人數：1人以上;適用場地 : 草皮區",
                pc_id: 1, information: "套裝內容 : 帳篷本體、本體營柱x1、A型門柱x1、本體營釘X13、側裙營樁X14、附調節片營繩 X14、本體攜行袋、營柱收納袋、營釘收納袋;隨附配件：營槌、防水地布(先鋪設再搭帳)、帳內地墊;面積：4.83坪;直徑：450cm;高度：274cm;門高：167cm;最大容量：6人;總重量: 36 kg"
            },
            {
                pid: 1, pname: "鐘型帳(2-6人)", price: 1800, day: 3, reserve: 20, p_img: "produc_1.png",
                description: "純棉材質具有防水、透氣及抗紫外線的功能，適用於4季各種不同的氣候下使用;建議適用人數：2人(奢華)/4人(舒適)/最多6人(睡袋);建議搭帳人數：1人以上;適用場地 : 草皮區",
                pc_id: 1, information: "套裝內容 : 帳篷本體、本體營柱x1、A型門柱x1、本體營釘X13、側裙營樁X14、附調節片營繩 X14、本體攜行袋、營柱收納袋、營釘收納袋;隨附配件：營槌、防水地布(先鋪設再搭帳)、帳內地墊;面積：4.83坪;直徑：450cm;高度：274cm;門高：167cm;最大容量：6人;總重量: 36 kg"
            },
            {
                pid: 1, pname: "鐘型帳(2-6人)", price: 1800, day: 3, reserve: 20, p_img: "produc_1.png",
                description: "純棉材質具有防水、透氣及抗紫外線的功能，適用於4季各種不同的氣候下使用;建議適用人數：2人(奢華)/4人(舒適)/最多6人(睡袋);建議搭帳人數：1人以上;適用場地 : 草皮區",
                pc_id: 1, information: "套裝內容 : 帳篷本體、本體營柱x1、A型門柱x1、本體營釘X13、側裙營樁X14、附調節片營繩 X14、本體攜行袋、營柱收納袋、營釘收納袋;隨附配件：營槌、防水地布(先鋪設再搭帳)、帳內地墊;面積：4.83坪;直徑：450cm;高度：274cm;門高：167cm;最大容量：6人;總重量: 36 kg"
            }
            ],
            value: new Date(),
            today: today,
            maxDate: maxDate,
            minDate: minDate,
            selectedDate: null,
            count: 0,
            car: {
                mid:'',
                pid:'',
                fid:'',
                c_day:'',
                use_dat:'',
                return_date:'',
                quantity:''
            },
        };
    }


    // 星期二、五可以點選 其他禁用
    isDisabled(date) {
        const day = date.getDay();
        return day !== 2 && day !== 5;
    }

    // 點選星期二 會選取星期三、四；點選星期五 會選取星期六、日
    onClickDay(date) {
        this.setState({
            selectedDate: date,
        });
    }

    // 格式化日期 yyyy/mm/dd
    formatDateString(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // 渲染選定日期的連續三天的日期
    renderDates() {
        const { selectedDate } = this.state;
        if (selectedDate) {
            const startDate = new Date(selectedDate);
            const endDate = new Date(selectedDate);
            endDate.setDate(endDate.getDate() + 2);
            // 存儲格式化後的日期
            const dates = [];

            while (startDate <= endDate) {
                dates.push(this.formatDateString(startDate));
                startDate.setDate(startDate.getDate() + 1);
            }

            const arryDate = dates.map((date, index) => (
                <span key={index}>{date}</span>
            ));
            return (
                <React.Fragment>
                    <p>租借日：{arryDate[0]}</p>
                    <p >歸還日：{arryDate[2]}</p>
                </React.Fragment>
            );
        }
        return null;
    }
    // 數量按鈕 & 上限為庫存
    handleAdd = () => {
        if (this.state.count < this.state.product[0].reserve) {
            this.setState(prevState => ({
                count: prevState.count + 1
            }));
        }
    };
    handleMinus = () => {
        this.setState((prevState) => ({
            count: prevState.count > 0 ? prevState.count - 1 : 0,
        }));
    };

    // 要寫按鈕送出後 1.要回到商品頁2.進購物車資料庫


    render() {
        const { value, maxDate, minDate, handleOpen } = this.state;
        // { console.log(this.state.product[0]) }
        const productArray = this.state.product[0].description.split(";");
        const productInfArray = this.state.product[0].information.split(";");
        // const totop = () => {
        //     this.setState({ isFlying: true });
        //     window.scrollTo({
        //         top: 0,
        //         behavior: "smooth"
        //     });
        // };
        return (
            <React.Fragment>
                <div id="container">
                    <Productbarr />
                </div>

                <div>
                    <div className={`${styles.image} ${this.state.isFlying ? styles.flyAway : ""}`}>
                        <a target="_blank" href={`/image/${this.state.product[0].p_img}`}>
                            <img src={`/image/${this.state.product[0].p_img}`} /></a>
                    </div>
                    <div className={styles.commodityall}>
                        <div className={styles.commodity}>
                            <p>{this.state.product[0].pname}</p>
                            <p>
                                <span>NT$</span>
                                <span>{this.state.product[0].price}</span>
                                <span>— {this.state.product[0].day}日</span>
                            </p>
                            <ul>
                                {productArray.map((data, index) => (
                                    <li key={index}>{data.trim()}</li>
                                ))}
                            </ul>
                            <p className={styles.warn}>*提醒您請於預約下單後3日內完成付款，逾時訂單將會取消並釋出商品供他人預訂。</p>
                        </div>

                        <div className={styles.myform}>
                            <form id={styles['myform']} method='get' action='#' onSubmit={this.formSubmit}>
                                <div>
                                    <Calendar
                                        locale="en-US"
                                        onClickDay={this.onClickDay.bind(this)}
                                        value={value}
                                        maxDate={maxDate}
                                        minDate={minDate}
                                        tileDisabled={({ date }) => this.isDisabled(date)}
                                    />
                                </div>
                                <div>{this.renderDates()}</div>
                                <label htmlFor='quantity'>數量：</label>
                                <input onClick={this.handleMinus} type='button' value='-' className={styles.qtyminus} />
                                <input type='button' name='quantity' value={this.state.count} className={styles.qty} />
                                <input onClick={this.handleAdd} type='button' value='+' className={styles.qtyplus} />
                                <input type='button' value='立即預約' className={styles.reserve} onClick={this.handleReserve} />
                                <p><span>庫存量:</span><span>{this.state.product[0].reserve}</span></p>
                            </form>
                        </div>
                    </div>
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

                <div className={styles.information}>
                    <p>商品資訊</p>
                    <ul>
                        {productInfArray.map((data, index) => (
                            <li key={index}>{data.trim()}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.informationImg}>
                    <p>經常一起租借裝備：</p>
                    <div>
                        <div className={styles.container}>
                            <a href={`/equip_detail/${this.state.productList[0].pid}`}> <img className={styles.cimage} style={{ width: '350px', height: '350px' }}
                                src={`/image/${this.state.productList[0].p_img}`} alt="Avatar" />
                                <div className={styles.overlay}>
                                    <div className={styles.imgtext}>
                                        <p>{this.state.productList[0].pname}</p>
                                        <p>
                                            <span>NT$</span>
                                            <span>{this.state.productList[0].price}</span>
                                            <span>— {this.state.productList[0].day}日</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={styles.container}>
                            <a href={`/equip_detail/${this.state.productList[1].pid}`}><img className={styles.cimage} style={{ width: '350px', height: '350px' }}
                                src={`/image/${this.state.productList[1].p_img}`} alt="Avatar" />
                                <div className={styles.overlay}>
                                    <div className={styles.imgtext}>
                                        <p>{this.state.productList[1].pname}</p>
                                        <p>
                                            <span>NT$</span>
                                            <span>{this.state.productList[1].price}</span>
                                            <span>— {this.state.productList[1].day}日</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={styles.container}>
                            <a href={`/equip_detail/${this.state.productList[2].pid}`}><img className={styles.cimage} style={{ width: '350px', height: '350px' }}
                                src={`/image/${this.state.productList[2].p_img}`} alt="Avatar" />
                                <div className={styles.overlay}>
                                    <div className={styles.imgtext}>
                                        <p>{this.state.productList[2].pname}</p>
                                        <p>
                                            <span>NT$</span>
                                            <span>{this.state.productList[2].price}</span>
                                            <span>— {this.state.productList[2].day}日</span>
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
    componentDidMount = async () => {
        // 查單一商品
        var pid = this.props.match.params.pid;
        var url = `http://localhost:8000/product/${pid}`;
        var result = await axios.get(url);
        var newstate = { ...this.state };
        newstate.product = result.data;
        // console.log("555",newState.product)
        this.state = newstate;
        this.setState(this.state);
        // console.log("123",newState.product); 

        // 查全部商品
        var urlAll = "http://localhost:8000/product/list";
        var resultAll = await axios.get(urlAll);
        var newstate = { ...this.state };
        var newstateto = { ...this.state };
        newstate.productList = resultAll.data;
        var newstateto = JSON.parse(JSON.stringify(newstate));
        // console.log("123",newstate.productList);
        this.state = newstate;
        this.setState(this.state);
        // console.log(typeof this.props.match.params.pid)
        var abc = parseInt(this.props.match.params.pid);
        abc += 4
        var bbb = abc + 1
        var ccc = abc + 2
        // console.log("555",newstate.productList[abc]);
        if (abc >= 32) {
            abc -= 32
        } else {
            abc = abc
        }

        if (bbb >= 32) {
            bbb -= 32
        } else {
            bbb = bbb
        }

        if (ccc >= 32) {
            ccc -= 32
        } else {
            ccc = ccc
        }
   
        this.state.productList[2] = newstateto.productList[ccc]
        this.state.productList[1] = newstateto.productList[bbb]
        this.state.productList[0] = newstateto.productList[abc]
   

    }

    // 判斷 是否有登入會員
    handleReserve = async (e) => {
        const mtel = sessionStorage.getItem('account')
        if (mtel == null) {
            this.setState({ handleOpen: true })
        } else {
            var response = await axios.get(`http://localhost:8000/mid?tel=${mtel}`);
            var newCar={...this.state.car} ;
          
          newCar=  {
                mid:response.data.data[0].mid,
                pid:this.state.product[0].pid,
                fid:null,
                c_day:this.state.product[0].day,
                // use_dat:this.state.arryDate[0],
                // return_date:this.state.arryDate[2],
                quantity:this.state.count
            }
            this.state.car=newCar
            this.setState(newCar)
            console.log("hdsad",this)
            console.log("123",window)
            console.log("123",this.state.car)
            // console.log(mtel);
            // console.log('租借日',this.state.arryDate[0]);
            // console.log('歸還日',this.state.arryDate[2]);

            const cars = await axios.post(
                "http://localhost:8000/mid/tocar",
                this.state.car, // 直接傳對象作為請求值
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }

            );
            if (cars.status === 200) {
                // 表示成功
               console.log("OK")
             
            } else {
                console.error(cars.data);
            }



        }
    }

    // 關閉 請登入會員彈窗
    handleCloseClick = () => {
        this.setState({ handleOpen: false });
        const { history } = this.props;
        history.push('/login');
    }

}

export default EquipDetail;




