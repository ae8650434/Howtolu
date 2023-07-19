import React, { Component } from 'react';
import styles from '../css/Order_list.module.css'

class Order_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOrderList: false,

      user: {
        order_number: '20230802001',
        order_date: '2023/07/24',
        price: 3000,
        use_date: '2023/08/02',
        return_date: '2023/08/05',
        os: '未歸還'
      },
      user2:{
        name: '王大明',
        tel: '0911111111',
        ol_id: '1',
        p_img: '/image/product_1.png',
        pname: '韓國甲珍雙人電熱毯(不指定花色)',
        quantity: 3,
        price: 300
      }
        
      
    };
  }
  render() {
    const { displayOrderList } = this.state;

    return (
      <div className={styles.short}>
        <ul className={styles.info_ul}>
          <li className={styles.info_li}><a href="/info" style={{ textDecoration: "none", color: 'blue'}}><p className="form">編輯會員資料</p></a></li>
          <li className={styles.info_li}><a href="/order_list" style={{ textDecoration: "none", color: 'blue' }}><p className={styles.info_li_order}>訂單查詢</p></a></li>
          <li className={styles.info_li}>
            <a style={{color: 'blue'}}className={styles.form} onClick={this.logoutClick}>登出</a>
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
            <td rowspan={3} className={styles.info_td}>{this.state.user.order_number}</td>
            <td rowspan={3} className={styles.info_td}>{this.state.user.order_date}</td>
            <td rowspan={3} className={styles.info_td}>{this.state.user.price}</td>
            <td rowspan={3} className={styles.info_td}>{this.state.user.use_date}</td>
            <td rowspan={3} className={styles.info_td}>{this.state.user.return_date}</td>
            <td rowspan={3} className={styles.info_td}>{this.state.user.os}</td>
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
              <td className={styles.info_order_word}>{this.state.user.order_number}</td>
              <td colspan={2} className={styles.info_order_word}>{this.state.user.order_date}</td>
              <td className={styles.info_order_word}>{this.state.user2.name}</td>
              <td className={styles.info_order_word}>{this.state.user2.tel}</td>
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
              <td className={`${styles.info_order_list_word} ${styles.info_order_num}`}>{this.state.user2.ol_id}</td>
              <td className={styles.info_order_list_word} ><img src={this.state.user2.p_img} className={styles.info_p_img} /></td>
              <td className={`${styles.info_order_list_word} ${styles.info_order_pname}`}>{this.state.user2.pname}</td>
              <td className={`${styles.info_order_list_word} ${styles.info_order_num}`}>{this.state.user2.quantity}</td>
              <td className={`${styles.info_order_list_word} ${styles.info_order_num}`}>{`NT$${this.state.user2.price}`}</td>
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

  logoutClick = () => {
    sessionStorage.clear();
    window.location.href = '/';
  }
}

export default Order_list;