import React, { Component, useState } from 'react';
import styles from '../css/Login.module.css'

class Login extends Component {
    // constructor(props)：構造函數接收props作為參數，並調用super(props)，繼承父類的所有屬性和方法。
    constructor(props) {
        super(props);
        this.state = {
          passwordType: 'password',
          eyeOpacity: 1,
          eyeSrc: './image/eye.png'
        };
      }

      eyeClick = () => {
        const { passwordType, eyeSrc } = this.state;
        if (passwordType === 'text') {
          this.setState({
            passwordType: 'password',
            eyeOpacity: 1,
            eyeSrc: './image/eye.png'
          });
        } else {
          this.setState({
            passwordType: 'text',
            eyeOpacity: 0.5,
            eyeSrc: eyeSrc === './image/eye.png' ? './image/EyeSlash.png' : './image/eye.png'
          });
        }
      };

    render() {
        const { passwordType, eyeOpacity, eyeSrc } = this.state;
        return (
                <div className={styles.short}>
                <div id={styles['rule']}>
                    【HowTo露反詐騙提醒】HowTo露客服人員不會要求您到ATM操作退款或信用卡退刷，這是詐騙手法，
                    請提高警覺!!如有接獲類似電話或簡訊，請立即撥打165防詐騙專線，或洽客服04-23265860確認，謝謝
                </div>
                <div style={{textAlign: 'center'}}>
                    <div id={styles['smalltitle']}>登入HowTo露會員</div>
                    <hr />

                    <form action="" method="">
                    <div style={{textAlign: 'center', marginTop: '30px'}}>
                        <div className={styles.first}>
                        <label for="account" className={styles.loginlabel}>帳號</label>
                        <input type="text" name="account" id="account" className={styles.login} />
                        </div>
                        <div className={styles.warningtitle}>  
                        <p className={styles.warning}><img src="/image/warning.png" className={styles.pic}
                        />  此手機號碼尚未註冊</p>
                        </div>

                        <div className={styles.first}> 
                        <label for="password" className={styles.loginlabel}>密碼</label>
                        <input type={passwordType} name="password" id="password" className={styles.login}/>
                        <img src={eyeSrc} style={{ opacity: eyeOpacity }} id={styles['eye']} onClick={this.eyeClick}/>
                        </div>

                        <div className={styles.warningtitle}>
                        <p className={styles.warning}><img src="/image/warning.png" className={styles.pic}/>  密碼錯誤</p>
                        </div>
                        <div className={styles.remember}>
                        <input type="checkbox" id={styles['check']} />
                        <label for="check" id={styles['la']}>記住帳號密碼</label>
                        </div>
                    </div>
                    <hr />
                    <br /><br />
                    <div className={styles.send}>
                        <input type="submit" value="登入" className={styles.go} id="log"/>
                        <a href="./Reset.html" id={styles["forget"]}>忘記密碼?</a>
                    </div>
                    </form>
                </div>
                </div>
        );
    }
    
   

}
 
export default Login;