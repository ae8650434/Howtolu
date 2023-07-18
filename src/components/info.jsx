import React, { Component } from 'react';
import styles from '../css/Info_member.module.css'
import axios from 'axios';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                mname: '王大明',
                account: '0923232323',
                gender: '女性',
                email: 'aaa@gmail.com',
                address: '台中市大光街',
                old_password: '33333eeeee',
                new_password: '11111qqqqq',
                new_password2: '11111qqqqq',
            }

        }
    }
    render() {
        return (

            <div className={styles.short}>
                <ul className={styles.info_ul}>
                    <li className={styles.info_li}><a href="/info" style={{ textDecoration: "none" }}><p className={styles.info_li_first}>編輯會員資料</p></a></li>
                    <li className={styles.info_li}><a href="/order_list" style={{ textDecoration: "none" }}><p className={styles.form}>訂單查詢</p></a></li>
                    <li className={styles.info_li}>
                        <a href="" style={{ textDecoration: "none" }}>登出</a>
                    </li>
                </ul>

                <form action="" className={styles.form}>
                    <p className={styles.info_p_first}>我的大頭照</p>
                    <img src="/image/Head.png" className={styles.info_pic} />
                    <input type="file" className={styles.info_file} />
                    <p className={styles.info_file_limit}>*請傳.jpg檔</p>
                    <div style={{ textAlign: "center" }} className={styles.form}>
                        <div className={styles.info_from_div}>
                            <label htmlFor="" className={styles.info_label_word}>姓 名</label>
                            <input type="text" className={styles.info_label} value={this.state.user.mname}/>
                            <label htmlFor="" className={styles.info_label_word}>手機號碼</label>
                            <input type="tel" className={styles.info_label} value={this.state.user.account}/>
                        </div>
                        <div className={styles.info_from_div}>
                            <label htmlFor="" className={styles.info_label_word}>性 別 </label>
                            <select name="gender" id="" className={styles.info_select} value={this.state.user.gender}>
                                <option>請選擇</option>
                                <option>男性</option>
                                <option>女性</option>
                                <option>其他</option>
                            </select>
                            <label htmlFor="" className={styles.info_label_word}>e-mail</label>
                            <input type="email" className={styles.info_label} value={this.state.user.email}/>
                        </div>
                        <div className={styles.info_from_div}>
                            <label htmlFor="" className={styles.info_label_word}>居住地址（選填）</label>
                            <input type="text" className={styles.info_label_address} value={this.state.user.address}/>
                        </div>
                        <div className={styles.info_reset_password}>
                            <div className={styles.info_password_div}>
                                <img src="/image/member_icon.png" className={styles.info_member_icon} />
                                <p className={styles.info_pic_word}>修改密碼</p>
                            </div>
                            <div className={styles.info_password}>
                                <label htmlFor="" className={`${styles.info_label_word} ${styles.info_password_word}`}>舊密碼</label>
                                <input type="text" className={styles.info_label} />
                            </div>
                            <div className={styles.info_password}>
                                <label htmlFor="" className={`${styles.info_label_word} ${styles.info_password_word}`}>設定新密碼</label>
                                <input type="text" className={styles.info_label} />
                            </div>
                            <div className={styles.info_password}>
                                <label htmlFor="" className={`${styles.info_label_word} ${styles.info_password_word}`}>確認新密碼</label>
                                <input type="text" className={styles.info_label} />
                            </div>
                            <br /><br />
                            <div className={styles.info_submit_div}>
                                <input type="submit" value="儲存變更" className={styles.info_submit} />
                            </div>
                        </div>
                    </div>
                </form>
                <br /><br /><br /><br />
                {console.log(sessionStorage.getItem('account'))}
            </div>
        );
    }

    onButtonClick = async () => {
        var information =  await axios.get('http://localhost:8000/info', {
            account: sessionStorage.getItem('account')
        })
    }

}

export default Info;