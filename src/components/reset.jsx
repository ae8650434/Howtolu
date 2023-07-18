import React, { Component } from 'react';
import styles from '../css/Reset.module.css'
import axios from 'axios';

class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {
        mail: '',
        verification: ''
      },

      mail: '',
      random: ''

    }
  }
  render() {

    const { error, mail } = this.state

    return (

      <div className={styles.short}>
        <div style={{ textAlign: "center" }}>
          <div id={styles["small-title"]}>忘記密碼</div>
          <hr />
          <div className={styles.reset_rule}>
            請輸入您註冊時輸入的e-mail，系統會自動發送驗證碼到您的信箱，<br />
            輸入驗證碼成功後，請在修改密碼。
          </div>
          <form action="" method="get">
            <div style={{ textAlign: "center" }} >
              <div className={styles.reset_first}>
                <label htmlFor="account" className={`${styles.reset_label} ${styles.reset_label_first}`}>e-mail</label>
                <input type="text"
                  name="mail"
                  id="account"
                  className={styles.reset_input_email}
                  value={this.state.mail}
                  onChange={
                    (e) => {
                      var newState = { ...this.state }
                      newState.mail = e.target.value
                      this.setState(newState)
                      // console.log(newState)
                    }
                  }
                />

                <input type="button" value="驗證碼" className={styles.reset_button} onClick={this.onButtonClick} />
              </div>
              {error.mail && (
                <div className={styles.warning_title}>
                  <img src="/image/warning.png" className={styles.pic} />
                  <span className={styles.warning}>{error.mail}</span>
                </div>
              )}
              <br /><br />
              <div className={styles.reset_first}>
                <label htmlFor="password" className={styles.reset_label}>驗證碼</label>
                <input type="text" name="password" id="password" className={styles.reset_input} />
              </div>
              {error.verification && (
                <div className={styles.warning_title}>
                  <img src="/image/warning.png" className={styles.pic} />
                  <span className={styles.warning}>{error.verification}</span>
                </div>
              )}
            </div>
            <hr />
            <br /><br />
            <div className={styles.send}>
              <input type="button" value="確定送出" className={styles.go} onClick={this.send}/>
            </div>
          </form>
        </div>
      </div>


    );
  }

  onButtonClick = async () => {
    // console.log('Button Clicked'); // 添加调试输出，检查按钮点击事件是否触发
    console.log(this.state.mail)
    try {
      var response = await axios.get(`http://localhost:8000/reset/${this.state.mail}`)


      console.log('Response:', response); // 添加调试输出，检查异步请求的响应


      if (response.status === 200) {
        var newState = {...this.state}
        newState.random = response.data.random
        this.setState(newState)
        console.log('3333',newState)
        console.log('成功')
      } else {
        // console.error(response.data);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          error.mail = '信箱尚未被註冊'
          this.setState({ error })
        } else if (error.response.status === 500) {
          error.mail = '郵件發送失敗'
          this.setState({ error });
        } else {
          console.error(error);
        }
      }
    }
  }

  send = () => {
    var p = document.getElementById('password').value
    var r = this.state.random
    console.log('look', r)

    if (p !== r) {
      this.setState({ error: { verification: '驗證碼錯誤' } }, () => {
        console.log(this.state.error);
      });
    } else {
      sessionStorage.setItem('mail',this.state.mail)
      window.location = '/revise';
    }
  }

}

export default Reset;