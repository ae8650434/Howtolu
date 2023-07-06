import React, { Component, useState } from 'react';
import '../css/Login.css'

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
                <div className="short">
                <div id="rule">
                    【HowTo露反詐騙提醒】HowTo露客服人員不會要求您到ATM操作退款或信用卡退刷，這是詐騙手法，
                    請提高警覺!!如有接獲類似電話或簡訊，請立即撥打165防詐騙專線，或洽客服04-23265860確認，謝謝
                </div>
                <div style={{textAlign: 'center'}}>
                    <div id="smalltitle">登入HowTo露會員</div>
                    <hr />

                    <form action="" method="">
                    <div style={{textAlign: 'center', marginTop: '30px'}}>
                        <div className="first">
                        <label for="account" className="loginlabel">帳號</label>
                        <input type="text" name="account" id="account" className="login" />
                        </div>
                        <div className="warningtitle">  
                        <p className="warning"><img src="/image/warning.png" className="pic"
                        />  此手機號碼尚未註冊</p>
                        </div>

                        <div className="first"> 
                        <label for="password" className="loginlabel">密碼</label>
                        <input type={passwordType} name="password" id="password" className="login"/>
                        <img src={eyeSrc} style={{ opacity: eyeOpacity }} id="eye" onClick={this.eyeClick}/>
                        </div>

                        <div className="warningtitle">
                        <p className="warning"><img src="/image/warning.png" className="pic"/>  密碼錯誤</p>
                        </div>
                        <div className="remember">
                        <input type="checkbox" id="check" />
                        <label for="check" id="la">記住帳號密碼</label>
                        </div>
                    </div>
                    <hr />
                    <br /><br />
                    <div className="send">
                        <input type="submit" value="登入" className="go" id="log"/>
                        <a href="./Reset.html" id="forget">忘記密碼?</a>
                    </div>
                    </form>
                </div>
                </div>
        );


    }
  
}
 
export default Login;