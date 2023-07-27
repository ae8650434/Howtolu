import React, { Component } from 'react';
import axios from 'axios';
import styles from '../css/payment.module.css';
import Process from './Process2.jsx';




class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayOrderList: false,
            dataIndex: false,
            paym: false,
            inputValues: ['', '', '', ''],
            month: '',
            year: '',
            cartMid: [{ name: null }],
            // cartMid: [{ name: null, use_date: null, return_date: null }],
            // totalSum: '',

        }
    }

    // // 計算總計
    // tableTotal=()=>{
    //     const{cartMid}=
    // }
    render() {
        const { displayOrderList, dataIndex, paym, inputValues, month, year, cartMid, } = this.state;
        // 保存小計的總和
        let totalSum = 0;

        return (
            <React.Fragment>
                <br /><br /><br /><br /><br />
                <Process></Process>
                <div className={styles.orderdiv}>

                    <div className={styles.ordertitle}>
                        <p>訂購資訊</p>
                    </div>
                    <div className={styles.orderdivA}>
                        {cartMid.map((data, index) => {
                            let useDate = data.use_date;
                            let returnDate = data.return_date;

                            // console.log("皮卡", useDate)
                            if (useDate && returnDate) {
                                useDate = useDate.slice(0, 10);
                                returnDate = returnDate.slice(0, 10)
                                // console.log("123456", useDate)
                            };
                            // 將小計加到總計中
                            const subTotal = (data.p_price * data.quantity) ? (data.p_price * data.quantity) : (data.f_price * data.quantity);
                            totalSum += subTotal;
                            // var total = totalSum + subTotal;
                            // var newSate = { ...this.state };
                            // newSate.totalSum = total
                            // this.setState(newSate);
                            // console.log(total)


                            return (<div key={index}>
                                <table className={styles.detailsTable}>
                                    <tr >
                                        <td className={styles.info_td}>商品名稱：</td>
                                        <td className={styles.info_td}>{data.pname ? data.pname : data.fname}</td>
                                        <td>
                                            <tr>
                                                <input
                                                    type="button"
                                                    value="查看明細"
                                                    className={styles.order_bnA}
                                                    id="checklist"
                                                    onClick={() => this.handleChecklistClick(index)}
                                                />
                                            </tr>
                                        </td>

                                    </tr>
                                </table>
                                {displayOrderList && dataIndex === index && (
                                    <div style={{ display: 'table' }}>
                                        <table className={styles.order_table}>
                                            <tr>
                                                <td className={styles.order_word}>數量：</td>
                                                <td colspan={2} className={styles.order_word}>{data.quantity}</td>
                                            </tr>
                                            <tr>
                                                <td className={styles.order_word}>租借日：</td>
                                                <td colspan={2} className={styles.order_word}>{useDate}</td>
                                            </tr>
                                            <tr>
                                                <td className={styles.order_word}>歸還日：</td>
                                                <td colspan={2} className={styles.order_word}>{returnDate}</td>
                                            </tr>
                                            <tr>
                                                <td className={styles.order_word}>小計：</td>
                                                <td colspan={2} className={styles.order_word}>
                                                    <p>
                                                        <span>NT$</span>
                                                        <span>{(data.p_price * data.quantity) ? (data.p_price * data.quantity) : (data.f_price * data.quantity)}</span>
                                                    </p>
                                                </td>
                                                <td>{console.log("小白", data)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                )
                                }
                            </div>
                            )
                        }
                        )}
                        <table className={styles.detailsTableA}>
                            <tr >
                                <td className={styles.info_td}><p>訂購人：</p></td>
                                <td className={styles.info_tdA}><p>{this.state.cartMid[0].name}</p></td>
                            </tr>
                            <tr >
                                <td className={styles.info_td}>手機號碼：</td>
                                <td className={styles.info_tdA}><p>{this.state.cartMid[0].tel}</p></td>
                            </tr>
                            <tr >
                                <td className={styles.info_td}>電子信箱：</td>
                                <td className={styles.info_tdA}><p>{this.state.cartMid[0].mail}</p></td>
                            </tr>
                            <tr >
                                <td className={styles.info_td}>付款方式：</td>
                                <td className={styles.info_tdA}>
                                    <input
                                        type="radio"
                                        className={styles.order_bnC}
                                        id="checklist"
                                        onClick={this.ChecklistCard}
                                    />
                                    <span>金融卡/信用卡</span>
                                </td>
                                <td className={styles.info_tdA}>
                                    <input
                                        type="radio"
                                        className={styles.order_bnC}
                                    // id="checklist"
                                    // onClick={this.ChecklistCard}
                                    />
                                    <span>現金支付</span>
                                </td>

                            </tr>
                        </table>

                        <div style={{ display: paym ? 'table' : 'none' }}>
                            <table className={styles.detailsTableB}>
                                <tr>
                                    <td colspan={2} className={styles.order_word}>信用卡付款</td>
                                </tr>
                                <tr>
                                    <td className={styles.order_word}>訂購金額：</td>
                                    <td colspan={2} className={styles.order_wordA}>
                                        <p>
                                            <span>NT$</span>
                                            <span id='total'>{totalSum}</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.order_word}>信用卡號碼：</td>
                                    <td colspan={2} className={styles.order_wordA}>
                                        <label htmlFor=""></label>
                                        {inputValues.map((value, index) => (
                                            <React.Fragment key={index}>
                                                <input
                                                    type="tel"
                                                    name=""
                                                    id=""
                                                    maxLength="4"
                                                    value={value}
                                                    onChange={(event) => this.handleInputChange(event, index)}
                                                    ref={(input) => (this[`input${index}`] = input)}
                                                />
                                                {index < 3 && '-'}
                                            </React.Fragment>
                                        ))}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.order_word}>有效期限：</td>
                                    <td colspan={2} className={styles.order_wordA}>
                                        <label htmlFor=""></label>
                                        <input type="tel" name="" id="" placeholder="MM" maxLength="2"
                                            value={month}
                                            onChange={this.handleMonthChange}
                                            ref={(input) => (this.monthInputRef = input)} />/
                                        <input type="tel" name="" id="" placeholder="YY" maxLength="2"
                                            value={year}
                                            onChange={this.handleYearChange}
                                            ref={(input) => (this.yearInputRef = input)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.order_word}>末3碼：</td>
                                    <td colspan={2} className={styles.order_wordA}>
                                        <label htmlFor=""></label>
                                        <input type="tel" name="" id="" placeholder="末3碼" maxlength="3" />
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className={styles.orderdivB}>
                            <label for=""></label>
                            <input className={styles.order_bnB} type="button" value="結帳"
                                onClick={this.handleReserve} />
                        </div>
                    </div>
                </div>
              
            </React.Fragment >
        );
    }
    componentDidMount = async () => {

        // 篩選 當前mid的訂單
        if (sessionStorage.getItem('account')) {
            var result = await axios.get("http://localhost:8000/cart")
            var cartMid = result.data.filter((x) => x.tel == sessionStorage.getItem('account'))
            var newcartMid = { ...this.state };
            newcartMid.cartMid = cartMid;
            this.state = newcartMid;
            this.setState(this.state);
            console.log("我看1", this.state.cartMid);
            console.log("我看2", cartMid);

        }



    }

    // 查看明細 展開
    handleChecklistClick = (index) => {
        this.setState(prevState => ({
            displayOrderList: !prevState.displayOrderList,
            dataIndex: index
        }));
    }
    // 刷卡 展開
    ChecklistCard = () => {
        this.setState(prevState => ({
            paym: !prevState.paym
        }));
    }
    // 輸入卡號 自動下一格
    handleInputChange = (event, index) => {
        const { value } = event.target;
        const nextIndex = index + 1;

        if (value.length === event.target.maxLength && nextIndex < 4) {
            this[`input${nextIndex}`].focus();
        }

        this.setState((prevState) => {
            const updatedValues = [...prevState.inputValues];
            updatedValues[index] = value;
            return { inputValues: updatedValues };
        });
    };
    // 信用卡-月 自動下一格
    handleMonthChange = (event) => {
        const { value } = event.target;
        if (value.length === 2) {
            this.setState({ month: value }, () => {
                this.yearInputRef.focus();
            });
        } else {
            this.setState({ month: value });
        }
    };
    // 信用卡-年 自動下一格
    handleYearChange = (event) => {
        const { value } = event.target;
        if (value.length === 2) {
            this.setState({ year: value });
        } else {
            this.setState({ year: value });
        }
    };
    // 結帳
    handleReserve = async (e) => {
        var bee = this.state.cartMid.filter((x) => x.fid === null)
        var today = new Date();
        var year = today.getFullYear()
        var month = ((today.getMonth() + 1)).toString().padStart(2, '0');
        var day = ((today.getDate())).toString().padStart(2, '0');
        // var mids = this.state.cartMid[0].mid.toString().padStart(3, '0')
        // console.log("bee", typeof mids);
        var todayMid = `${year}` + month + day
        // console.log("日期", month);
        var neworder = {
            mid: this.state.cartMid[0].mid,
            order_number: todayMid,
            use_date: bee[0].use_date.slice(0, 10),
            return_date: bee[0].return_date.slice(0, 10),
            price: document.getElementById('total').textContent,

        }
        console.log("556666", neworder)
        const newoederListArray = [];
        // console.log("8888", this.state.cartMid)
        // console.log("666", neworder.mid);
        await Promise.all(
            this.state.cartMid.map(async (data, index) => {
                var pid = data.pid;
                var fid = data.fid;

                const newoederList = {
                    oid: '',
                    pid: data.pid,
                    pname: data.pname,
                    p_img: data.p_img,
                    fid: data.fid,
                    fname: data.fname,
                    f_img: data.f_img,
                    p_quantity: (pid === null) ? null : data.quantity,
                    f_quantity: (fid === null) ? null : data.quantity,
                    p_os: (pid === null) ? null : 0,
                    f_os: (fid === null) ? null : 1,
                    p_price: data.p_price,
                    f_price: data.f_price

                };
                newoederListArray.push(newoederList);
            }))
        console.log("8888888888", newoederListArray)

        // 新增至order_list資料庫
        try {
            const orders = await axios.post(
                "http://localhost:8000/toorder",
                {
                    neworder: neworder,
                    newoederList: newoederListArray
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                },

            );
            if (orders.status === 200) {
                // 表示成功
                console.log("新增order成功:mid", neworder.mid);

                axios.delete('http://localhost:8000/cart')
                    .then(() => {
                        this.setState({ cartList: [] });
                    })
                    .catch((err) => {
                        console.error(err);
                    });

                window.location.href = "/";

            } else {
                console.log(orders.data);
            };
            // console.log("總計", this.state.totalSum)
        } catch {

        }

    };

  
}

export default Payment;

