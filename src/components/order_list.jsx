import React, { Component } from 'react';
import styles from '../css/Order_list.module.css'

class Order_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOrderList: false
    };
  }
  render() {
    const { displayOrderList } = this.state;

    return (
      <div className={styles.short}>
        <ul className={styles.info_ul}>
          <li className={styles.info_li}><a href="/info" style={{ textDecoration: "none" }}><p className="form">編輯會員資料</p></a></li>
          <li className={styles.info_li}><a href="/order_list" style={{ textDecoration: "none" }}><p className={styles.info_li_order}>訂單查詢</p></a></li>
          <li className={styles.info_li}>
            <a href="" style={{ textDecoration: "none" }} className={styles.form}>登出</a>
          </li>
        </ul>

        <table className={styles.info_table}>
          <tr>
            <th className={styles.info_th}>訂單編號</th>
            <th className={styles.info_th}>訂單日期</th>
            <th className={styles.info_th}>合計</th>
            <th className={styles.info_th}>租借日</th>
            <th className={styles.info_th}>歸還日</th>
            <th className={styles.info_th}>結案</th>
            <th className={styles.info_th}></th>
          </tr>
          <tr>
            <td rowspan={3} className={styles.info_td}>20230602123</td>
            <td rowspan={3} className={styles.info_td}>2023/06/02</td>
            <td rowspan={3} className={styles.info_td}>NT$3,000</td>
            <td rowspan={3} className={styles.info_td}>2023/05/30</td>
            <td rowspan={3} className={styles.info_td}>2023/06/01</td>
            <td rowspan={3} className={styles.info_td}>未歸還</td>
            <td><input type="button" value="查看明細" className={styles.info_order_button} id="checklist" onClick={this.handleChecklistClick} /></td>
          </tr>
          <tr>
            <td><input type="button" value="再次購買" className={styles.info_order_button} /></td>
          </tr>

          <tr>
            <td><input type="button" value="訂單下載" className={`${styles.info_order_button} ${styles.info_last_buttom}`} /></td>
          </tr>

        </table>

        <div style={{ display: displayOrderList ? 'table' : 'none' }}>
          <p className={styles.info_order_name}>王小明 訂單明細</p>
          <table className={styles.order_list_table}>
            <tr>
              <td colspan={5} className={styles.info_order_list_title}>訂購者資料</td>
            </tr>
            <tr>
              <td className={styles.info_order_word}>訂單編號</td>
              <td colspan={2} className={styles.info_order_word}>訂單日期</td>
              <td className={styles.info_order_word}>訂購者姓名</td>
              <td className={styles.info_order_word}>手機號碼</td>
            </tr>
            <tr>
              <td className={styles.info_order_word}>20230602123</td>
              <td colspan={2} className={styles.info_order_word}>2023/06/02 19:20:36</td>
              <td className={styles.info_order_word}>王小明</td>
              <td className={styles.info_order_word}>0911123666</td>
            </tr>
            <tr>
              <td colspan={5} className={styles.info_order_list_title} style={{backgroundColor:"#D4C19F",color:"black"}}>訂購明細</td>
            </tr>
            <tr>
              <td className={`${styles.info_order_word} ${styles.info_order_word_bg}`}>項次</td>
              <td className={`${styles.info_order_word} ${styles.info_order_word_bg}`}>商品圖片</td>
              <td className={`${styles.info_order_word} ${styles.info_order_word_bg}`}>商品名稱</td>
              <td className={`${styles.info_order_word} ${styles.info_order_word_bg}`}>數量</td>
              <td className={`${styles.info_order_word} ${styles.info_order_word_bg}`}>價格</td>
            </tr>
            <tr>
              <td className={`${styles.info_order_list_word} ${styles.info_order_num}`}>1</td>
              <td className={styles.info_order_list_word} ><img src="/image/pimg.png" className={styles.info_p_img} /></td>
              <td className={`${styles.info_order_list_word} ${styles.info_order_pname}`}>韓國甲珍雙人電熱毯(不指定花色)</td>
              <td className={`${styles.info_order_list_word} ${styles.info_order_num}`}>2</td>
              <td className={`${styles.info_order_list_word} ${styles.info_order_num}`}>NT$150</td>
            </tr>
          </table>
        </div>
        <br /><br /><br /><br />
      </div>
    );
  }

  handleChecklistClick = () => {
    this.setState(prevState => ({
      displayOrderList: !prevState.displayOrderList
    }));
  }
}

export default Order_list;