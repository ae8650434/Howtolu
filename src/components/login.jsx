import React, { Component, useState } from 'react';
import styles from '../css/Login.module.css'
import axios from 'axios';



class Login extends Component {

  // constructor(props)：構造函數接收props作為參數，並調用super(props)，繼承父類的所有屬性和方法。
  constructor(props) {
    super(props);
    this.state = {
      passwordType: 'password',
      eyeOpacity: 0.5,
      eyeSrc: './image/EyeSlash.png',
      user: {
        account: '',
        password: '',
        isComplete: 1
      },

      errors: {
        account: '',
        password: ''
      }

    };
  }

  eyeClick = () => {
    const { passwordType, eyeSrc } = this.state;
    if (passwordType === 'text') {
      this.setState({
        passwordType: 'password',
        eyeOpacity: 0.5,
        eyeSrc: './image/EyeSlash.png'
      });
    } else {
      this.setState({
        passwordType: 'text',
        eyeOpacity: 1,
        eyeSrc: './image/eye.png'
      });
    }
  };

  render() {
    const { passwordType, eyeOpacity, eyeSrc, errors } = this.state;
    return (
      <div className={styles.short}>
        <div id={styles['rule']}>
          【HowTo露反詐騙提醒】HowTo露客服人員不會要求您到ATM操作退款或信用卡退刷，這是詐騙手法，
          請提高警覺!!如有接獲類似電話或簡訊，請立即撥打165防詐騙專線，或洽客服04-23265860確認，謝謝
        </div>
        <div style={{ textAlign: 'center' }}>
          <div id={styles['smalltitle']}>登入HowTo露會員</div>
          <hr />

          <form action="http://localhost:8000/login/member" method="post" onSubmit={this.okButtonClick}>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <div className={styles.first}>
                <label htmlFor="account" className={styles.loginlabel}>帳號</label>
                <input type="text" name="account"
                  id="account"
                  className={styles.login}
                  value={this.state.user.account}
                  onChange={
                    (e) => {
                      var newState = { ...this.state };
                      newState.user.account = e.target.value;
                      this.setState(newState);
                    }
                  }
                  onBlur={
                    this.aku
                  }
                />
              </div>

              <div className={styles.first}>
                <label htmlFor="password" className={styles.loginlabel}>密碼</label>
                <input type={passwordType} name="password"
                  id="password"
                  className={styles.login}
                  value={this.state.user.password}
                  onChange={
                    (e) => {
                      var newState = { ...this.state };
                      newState.user.password = e.target.value;
                      this.setState(newState);
                    }
                  }

                  onBlur={
                    this.aku
                  }
                />
                <img src={eyeSrc} style={{ opacity: eyeOpacity }} id={styles['eye']} onClick={this.eyeClick} />
              </div>
              <div className={styles.warningtitle}>
                {errors.password && (
                  <p className={styles.warning}>
                    <img src="/image/warning.png" className={styles.pic} /> {errors.password}
                  </p>
                )}
              </div>
              <div className={styles.remember}>
                <input type="checkbox" id='check' className={styles.check}checked={this.state.user.isComplete ? 0 : 1}
                  onChange={
                    (e) => {
                      var newState = { ...this.state };
                      newState.user.isComplete = e.target.checked ? 0 : 1
                      this.setState(newState);
                    }
                  }

                  onBlur={
                    this.aku
                  }
                />
                <label htmlFor="check" id={styles['la']} name='remember'>記住帳號密碼</label>
              </div>
            </div>
            <hr />

            <br /><br />
            <div className={styles.send}>
              <input type="submit"
                value="登入"
                className={styles.go}
                id="log"
              />
              <a href="/reset" id={styles["forget"]}>忘記密碼?</a>
              <br /><br /><br /><br />
            </div>
          </form>
        </div>
      </div>
    );
  }

  


  okButtonClick = async (e) => {
    e.preventDefault(); // 阻止表單提交的默認行為

    this.aku()

    try {
      const response = await axios.post(
        "http://localhost:8000/login/member", // 修改为正确的后端路由
        this.state.user, // 直接传递对象作为请求体数据
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.status === 200) {
        // 响应状态码为200，表示成功
        console.log("Account:", this.state.user.account); // 在控制台输出账号值
        console.log("Password:", this.state.user.password); // 在控制台输出密码值
        console.log(response.data); // 在控制台打印响应数据
        // 根据业务需求进行其他操作，例如页面跳转等
        window.location = "/"; // 重定向到首页
      } else {
        // 其他状态码处理
        console.error(response.data);
        // 进行相应的错误处理逻辑
        this.setState({
          errors: {
            account: "帳號或密碼錯誤", // 根据实际情况设置错误信息
            password: "帳號或密碼錯誤" // 根据实际情况设置错误信息
          }
        });
      }
    } catch (error) {
      // 处理错误响应
      if (error.response) {
        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
        this.setState({
          errors: {
            account: "帳號或密碼錯誤", // 根据实际情况设置错误信息
            password: "帳號或密碼錯誤" // 根据实际情况设置错误信息
          }
        });
      } else if (error.request) {
        // 请求已发出，但未收到响应
        this.setState({
          errors: {
            account: "帳號或密碼錯誤", // 根据实际情况设置错误信息
            password: "帳號或密碼錯誤" // 根据实际情况设置错误信息
          }
        });
      } else {
        // 其他错误
        this.setState({
          errors: {
            account: "帳號或密碼錯誤", // 根据实际情况设置错误信息
            password: "帳號或密碼錯誤" // 根据实际情况设置错误信息
          }
        });
      }
    }
  };


  aku = () => {
    var s = document.getElementById('account').value
    localStorage.setItem('account',s)
    sessionStorage.setItem('account',s)
    var p = document.getElementById('password').value
    localStorage.setItem('password', p)
    sessionStorage.setItem('password', p)
    var c = this.state.user.isComplete
    localStorage.setItem('check', String(c))

    this.componentDidMount()
  }

  componentDidMount = () => {
    var a = localStorage.getItem('account')
    var p = localStorage.getItem('password')
    var c = localStorage.getItem('check')
    var newState = {...this.state}
    newState.user.account = a
    newState.user.password = p
    newState.user.isComplete = parseInt(c)
    this.setState(newState)
  }
}



export default Login;