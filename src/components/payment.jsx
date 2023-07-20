import React, { Component } from 'react';
import Process2 from './Process2.jsx';
// import axios from 'axios';
import styles from '../css/payment.module.css';
class Payment extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <br /><Process2 /><br />               
                <div id={styles["confirm"]}>
                    <div className={styles.container}>
                        <h2>訂購資訊</h2>
                        <div className={styles.details}>
                            <ul>
                                <li>
                                    <span>商品名稱:鐘型帳(2~6人)</span>
                                    <span className={`${styles.material_symbols_outlined} ${styles.align_bottom}`}>
                                        arrow_drop_down
                                    </span>
                                    <ul>
                                        <li>數量:2</li>
                                        <li>租借日:2023/12/29</li>
                                        <li>歸還日:2023/12/31</li>
                                        <li>金額:500</li>
                                    </ul>
                                </li>
                                <li>商品名稱:皎白筍
                                    <span className={`${styles.material_symbols_outlined} ${styles.align_bottom}`}>
                                        arrow_drop_down
                                    </span>
                                    <ul>
                                        <li>數量:2</li>
                                        <li>金額:500</li>
                                    </ul>
                                </li>
                                <li>商品名稱:鐘型帳(2~6人)</li>
                            </ul>
                        </div>
                        <div className={`${styles.personinformation} ${styles.mt_5}`}>
                            <div className={`${styles.row} ${styles.d_flex} ${styles.justify_content_between}`}>
                                <div className={`${styles.col_3} ${styles.text_end}`}>訂購人</div>
                                <div className={`${styles.col_9} ${styles.text_start} ${styles.ps_3}`}>王大明</div>
                            </div>
                            <div className={`${styles.row} ${styles.d_flex} ${styles.justify_content_between}`}>
                                <div className={`${styles.col_3} ${styles.text_end}`}>手機號碼</div>
                                <div className={`${styles.col_9} ${styles.text_start} ${styles.ps_3}`}>0912345678</div>
                            </div>
                            <div className={`${styles.row} ${styles.d_flex} ${styles.justify_content_between}`}>
                                <div className={`${styles.col_3} ${styles.text_end}`}>電子信箱</div>
                                <div className={`${styles.col_9} ${styles.text_start} ${styles.ps_3}`}>1234@gmail.com</div>
                            </div>
                            <div className={`${styles.row} ${styles.d_flex} ${styles.justify_content_between}`}>
                                <div className={`${styles.col_3} ${styles.text_end}`}>取貨日期</div>
                                <div className={`${styles.col_9} ${styles.text_start} ${styles.ps_3}`}>2023/12/31</div>
                            </div>
                            <div className={`${styles.row} ${styles.d_flex} ${styles.justify_content_between}`}>
                                <div className={`${styles.col_3} ${styles.text_end}`}>付款方式</div>
                                <div className={`${styles.col_9} ${styles.text_start}`}>
                                    <div className={styles.ps_3}>
                                        <input type="radio" name="" id="" />金融卡/信用卡
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className={`${styles.text_center} ${styles.mt_5}`}>信用卡付款</p>
                        <hr />
                        <div className={`${styles.row} ${styles.d_flex} ${styles.justify_content_between}`}>
                            <div className={`${styles.col_3} ${styles.text_end}`}>訂單金額</div>
                            <div className={`${styles.col_9} ${styles.text_start} ${styles.ps_3}`}>NT$50000</div>
                        </div>
                        <div className={`${styles.row} ${styles.d_flex} ${styles.justify_content_between}`}>
                            <div className={`${styles.col_3} ${styles.text_end}`}>信用卡號</div>
                            <div className={`${styles.col_9} ${styles.text_start} ${styles.ps_3} ${styles.credit}`}>
                                <input id={styles["input1"]} className={styles.credit_card_input} type="tel" maxlength="4" />
                                -
                                <input id={styles["input2"]} className={styles.credit_card_input} type="tel" maxlength="4" />
                                -
                                <input id={styles["input3"]} className={styles.credit_card_input} type="tel" maxlength="4" />
                                -
                                <input id={styles["input4"]} className={styles.credit_card_input} type="tel" maxlength="4" />
                            </div>
                        </div>
                        <div className={`${styles.check} ${styles.mt_5}`}>
                            <p className={styles.text_center}>三碼檢查碼<input type="text" name="" id="" maxlength="3" />末三碼</p>
                            <p className={styles.text_center}>信用卡到期<input type="text" name="" id="" maxlength="2" placeholder="MM" />/
                                <input type="text" name="" id="" maxlength="2" placeholder="DD" /></p>
                            <button type="button" className={`${styles.d_block} ${styles.ms_auto}`}>確認</button>
                        </div>
                    </div>


                </div>
            </React.Fragment >
        );
    }
}

export default Payment;