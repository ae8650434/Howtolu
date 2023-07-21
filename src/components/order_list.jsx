import React, { Component } from 'react';
import styles from '../css/Order_list.module.css'
import axios from 'axios';
import Modal from 'react-modal';

class Order_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOrderList: false,

      user: [],
      list:[],
      selectedOrderNumber: '',
      statusMap: {
        0: '租借中',
        1: '完成',
        2: '取消',
        3: '未歸還',
        4: '未完成',
      },
      addtocartSuccess: false,
    };
  }

  componentDidMount = async () => {
    try {
      const account = sessionStorage.getItem('account')
      const response = await axios.get(`http://localhost:8000/order?account=${account}`)
      if (response.status === 200) {
        const data = response.data.data;
        const updatedUser = data.map(order => {
          let osText = '';
          switch (order.os) {
            case 0:
              osText = '租借中';
              break;
            case 1:
              osText = '完成';
              break;
            case 2:
              osText = '取消';
              break;
            case 3:
              osText = '未歸還';
              break;
            case 4:
              osText = '未完成';
              break;
            default:
              osText = '未知狀態';
          }
          return {
            ...order,
            os: osText
          };
        });
        this.setState({ user: updatedUser }); // 存儲在user狀態中
        console.log(data); // 這將打印後端回傳的資料
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('沒有歷史訂單');
        window.location.href='/order_empty'
      } else {
        console.log('發生錯誤：', error.message);
      }
    }  
  }

  render() {
    const { displayOrderList, user, selectedOrderNumber, list, addtocartSuccess } = this.state; // 解構出user變數

    let orderDate = '';
    let customerName = '';
    let phoneNumber = '';

  if (list.length > 0) {
    orderDate = list[0].order_date.split('T')[0];
  }

  if(user.length > 0) {
    customerName = user[0].name;
    phoneNumber = user[0].tel;
  }

    return (
      <div className={styles.short}>
        <ul className={styles.info_ul}>
          <li className={styles.info_li}><a href="/info" style={{ textDecoration: "none", color: 'blue' }}><p className="form">編輯會員資料</p></a></li>
          <li className={styles.info_li}><a href="/order_list" style={{ textDecoration: "none", color: 'blue' }}><p className={styles.info_li_order}>訂單查詢</p></a></li>
          <li className={styles.info_li}>
            <a style={{ color: 'blue' }} className={styles.form} onClick={this.logoutClick}>登出</a>
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
          
          
            {user.map((order, index) => (
            <tr key={order.order_number}>
              <td className={styles.info_td}>{order.order_number}</td>
              <td className={styles.info_td}>{order.order_date.split('T')[0]}</td>
              <td className={styles.info_td}>{order.price}</td>
              <td className={styles.info_td}>{order.use_date.split('T')[0]}</td>
              <td className={styles.info_td}>{order.return_date.split('T')[0]}</td>
              <td className={styles.info_td}>{order.os}</td>
              <td>
                <tr>
                  <input
                    type="button"
                    value="查看明細"
                    className={styles.info_order_button}
                    id={index}
                    onClick={() => this.handleChecklistClick(order.order_number)}
                  />
                </tr>
                <tr>
                  <td><input type="button" value="訂單下載" className={`${styles.info_order_button} ${styles.info_last_buttom}`} /></td>
                </tr>
              </td>
            </tr>
            ))}
        </table>
        <div style={{ display: displayOrderList ? 'table' : 'none' }}>
          <p className={styles.info_order_name}>訂單明細</p>
          <table className={styles.order_list_table}>
            <tr>
              <td colspan={6} className={styles.info_order_list_title}>訂購者資料</td>
            </tr>
            <tr>
              <td className={styles.info_order_word}>訂單編號</td>
              <td colspan={2} className={styles.info_order_word}>訂單日期</td>
              <td colspan={2} className={styles.info_order_word}>訂購者姓名</td>
              <td className={styles.info_order_word}>手機號碼</td>
            </tr>
            <tr >
              <td className={styles.info_order_word}>{this.state.selectedOrderNumber}</td>
              <td colspan={2} className={styles.info_order_word}>{orderDate}</td>
              <td colspan={2} className={styles.info_order_word}>{customerName}</td>
              <td className={styles.info_order_word}>{phoneNumber}</td>
            </tr>
            <tr>
              <td colspan={6} className={styles.info_order_list_title} style={{ backgroundColor: "#D4C19F", color: "black" }}>訂購明細</td>
            </tr>
            <tr>
              <td className={`${styles.info_order_word} ${styles.info_order_word_bg}`}>項次</td>
              <td className={`${styles.info_order_word} ${styles.info_order_word_bg}`}>商品圖片</td>
              <td className={`${styles.info_order_word} ${styles.info_order_word_bg}`}>商品名稱</td>
              <td className={`${styles.info_order_word} ${styles.info_order_word_bg}`}>數量</td>
              <td className={`${styles.info_order_word} ${styles.info_order_word_bg}`}>價格</td>
              <td className={`${styles.info_order_word} ${styles.info_order_word_bg}`}>狀態</td>
            </tr>
            {list.map((orderDetial, index) => (
            <tr key={index}>
              <td className={`${styles.info_order_list_word} ${styles.info_order_num}`}>{index + 1}</td>
              <td className={styles.info_order_list_word} ><img src={orderDetial.p_img ? `/image/${orderDetial.p_img}`: `/image/${orderDetial.f_img}`} className={styles.info_p_img} /></td>
              <td className={`${styles.info_order_list_word} ${styles.info_order_pname}`}>{orderDetial.pname !== null ? orderDetial.pname : orderDetial.fname}</td>
              <td className={`${styles.info_order_list_word} ${styles.info_order_num}`}>{orderDetial.quantity}</td>
              <td className={`${styles.info_order_list_word} ${styles.info_order_num}`}>{`NT${orderDetial.price}`}</td>
              <td className={`${styles.info_order_list_word} ${styles.info_order_num}`}>{this.state.statusMap[orderDetial.os]}</td>
            </tr>
            ))} 
            </table>
              <input type="button" value="再次購買" style={{marginTop:'30px',marginLeft: '1440px'}} className={styles.info_order_button}  onClick={this.addToCart}/>
        </div>
        <br /><br /><br /><br />

        <Modal
          isOpen={addtocartSuccess}
          onRequestClose={this.closeSuccessModal}
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <div className={styles.content2}>
            <svg width="300" height="300">
              <circle
                fill="none"
                stroke="#68E534"
                strokeWidth="8"
                cx="140" cy="140" r="120"
                className={styles.circle}
              />
              <polyline
                fill="none"
                stroke="#68E534"
                strokeWidth="8"
                points="80,150 140,220 220,75"
                className={styles.tick}
              />
            </svg>
            <p className={styles.h2}>歷史訂單已加入購物車</p>
            <button onClick={this.closeSuccessModal} className={styles.open_button}>關閉</button>
          </div>
        </Modal>
      </div>
    );
  }

  // 關閉彈窗
  closeSuccessModal = () => {
    this.setState({ addtocartSuccess: false });
    const { history } = this.props;
  };


  handleChecklistClick = async (orderNumber) => {
    this.setState(
      (prevState) => ({
        displayOrderList: !prevState.displayOrderList,
        selectedOrderNumber: orderNumber, // 立即更新 selectedOrderNumber
      }),
      async () => {
        try {
          const order_number = this.state.selectedOrderNumber;
          console.log('訂單編號：', order_number);
          const response2 = await axios.get(
            `http://localhost:8000/order/order_list?order_number=${order_number}`
          );
          if (response2.status === 200) {
            const list = response2.data;
            console.log('訂單明細：', list);
            // 將取得的資料更新到 list 狀態中
            this.setState({ list });
            console.log('訂單明細：', this.state.list);
            this.setState((prevState) => ({
              user: prevState.user.map((order) =>
                order.order_number === orderNumber ? { ...order, list } : order
              )}
            ));
          }
          console.log('訂單明細：', this.state.list);
        } catch (error) {
          // ... 處理 GET 請求錯誤 ...
        }
      }
    );
  };

   // 加入購物車的函式
   addToCart = async () => {
    try {
      
      const { selectedOrderNumber, list } = this.state;
      console.log('再次購買 - 訂單編號：', selectedOrderNumber);
      console.log('333',list)
      // 檢查是否有選取訂單
      if (!selectedOrderNumber) {
        console.log('找不到選取的訂單');
        return;
      }
  
      // 檢查是否有訂單明細資料
      if (!list || list.length === 0) {
        console.log('找不到訂單明細資料');
        return;
      }
  
  
      // 接下來，您可以執行購物車處理，例如呼叫 API 將該筆訂單的明細資料加入購物車
  
      // 以下是一個範例，將資料組成要傳送給後端的物件，然後呼叫加入購物車的 API
      const response = await axios.post('http://localhost:8000/add_to_cart', list);
  
      if (response.status === 200) {
        console.log('商品已加入購物車');
        this.setState({ addtocartSuccess: true })
        // 在此處執行購物車更新的動作，例如重新拉取購物車資料
        // updateCart();
      }
    } catch (error) {
      console.log('加入購物車失敗:', error.message);
    }
  };

  logoutClick = () => {
    sessionStorage.clear();
    window.location.href = '/';
  }
}

export default Order_list;