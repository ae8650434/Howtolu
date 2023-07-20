import React, { Component } from 'react';
import styles from '../css/Order_list.module.css'


class Order_empty extends Component {


  render() {

    return (
      <div className={styles.short}>
        <ul className={styles.info_ul}>
          <li className={styles.info_li}><a href="/info" style={{ textDecoration: "none", color: 'blue'}}><p className="form">編輯會員資料</p></a></li>
          <li className={styles.info_li}><a href="/order_list" style={{ textDecoration: "none", color: 'blue' }}><p className={styles.info_li_order}>訂單查詢</p></a></li>
          <li className={styles.info_li}>
            <a style={{color: 'blue'}}className={styles.form} onClick={this.logoutClick}>登出</a>
          </li>
        </ul>

        <p style={{fontSize: '32px', textAlign: 'center', alignItems: 'center', marginTop: '80px', marginLeft: '90px'}}>暫無歷史訂單</p>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
  }


  logoutClick = () => {
    sessionStorage.clear();
    window.location.href = '/';
  }
}

export default Order_empty;