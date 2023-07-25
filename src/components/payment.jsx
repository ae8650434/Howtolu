import React, { Component } from 'react';
import axios from 'axios';
import styles from '../css/payment.module.css';


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

        }
    }

    // // 計算總計
    // tableTotal=()=>{
    //     const{cartMid}=
    // }
    render() {
        const { displayOrderList, dataIndex, paym, inputValues, month, year, cartMid } = this.state;
        // 保存小計的總和
        let totalSum = 0;

        return (
            <React.Fragment>
                <div className={styles.orderdiv}>

                    <div className={styles.ordertitle}>
                        <p>訂購資訊</p>
                    </div>
                    <div className={styles.orderdivA}>
                        {cartMid.map((data, index) => {
                            let useDate = data.use_date;
                            let returnDate = data.return_date;

                            console.log("皮卡", useDate)
                            if (useDate && returnDate) {
                                useDate = useDate.slice(0, 10);
                                returnDate = returnDate.slice(0, 10)
                                console.log("123456", useDate)
                            };
                            // 將小計加到總計中
                            const subTotal = (data.p_price * data.quantity) ? (data.p_price * data.quantity) : (data.f_price * data.quantity);
                            totalSum += subTotal; 


                            return (<div key={index}>
                                <table className={styles.detailsTable}>
                                    <tr >
                                        <td className={styles.info_td}>商品名稱：</td>
                                        <td className={styles.info_td}>{data.fname ? data.fname : data.pname}</td>
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
                                                    {(data.p_price * data.quantity) ? (data.p_price * data.quantity) : (data.f_price * data.quantity)}</td>
                                                <td>{console.log("小白", data)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                )}
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
                                            <span>{totalSum}</span>
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
                            <input className={styles.order_bnB} type="button" value="結帳" />
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
}

export default Payment;