import React, { Component } from 'react';
import styles from '../css/Reset.module.css'

class Reset extends Component {
    state = {  } 
    render() { 
        return (
            
        <div className={styles.short}>
        <div style={{textAlign: "center"}}>
          <div id={styles["small-title"]}>忘記密碼</div>
          <hr />
          <div className={styles.reset_rule}>
            請輸入您註冊時輸入的e-mail，系統會自動發送驗證碼到您的信箱，<br/>
            輸入驗證碼成功後，請在修改密碼。
          </div>
          <form action="" method="">
            <div style={{textAlign:"center"}} >
              <div className={styles.reset_first}>
                <label for="account" className={`${styles.reset_label} ${styles.reset_label_first}`}>e-mail</label>
                <input type="text" name="account" id="account" className={styles.reset_input_email} />
                <input type="button" value="驗證碼" className={styles.reset_button}/>
              </div>
              <br/><br/>
              <div className={styles.reset_first}>
                <label for="password" className={styles.reset_label}>驗證碼</label>
                <input type="password" name="password" id="password" className={styles.reset_input}/>
              </div>
            </div>
            <hr />
            <br /><br />
            <div className={styles.send}>
              <input type="submit" value="確定送出" className={styles.go} />
            </div>
          </form>
        </div>
    </div>


        );
    }
}
 
export default Reset;