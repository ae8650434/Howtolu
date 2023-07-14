import React, { Component } from 'react';
import styles from '../css/Revise.module.css'
import axios from 'axios';

class Revise extends Component {

  constructor(props) {
    super(props);
    this.state = {
      passwordType: 'password',
      eyeOpacity: 1,
      eyeSrc: './image/EyeSlash.png',

      passwordType2: 'password',
      eyeOpacity2: 1,
      eyeSrc2: './image/EyeSlash.png',

      user: {
        password: '',
        password2: ''
      },
      errors: {
        password: '',
        password2: ''
      }
    };
  }


  render() {
    const { passwordType, eyeOpacity, eyeSrc, passwordType2, eyeOpacity2, eyeSrc2, password, errors } = this.state

    return (
      <div className={styles.short}>
        <div style={{ textAlign: "center" }}>
          <div id={styles["small-title"]}>修改密碼</div>
          <hr />
          <div className={styles.revise_rule}>
            ***為保護您的個人資料安全，請務必修改密碼。
          </div>
          <form action="" method="post" id={styles.revise_login}>
            <br />
            <div className={styles.revise_first}>
              <label htmlFor="" className={styles.revise_from_title}>設定密碼</label>
              <input type={passwordType} 
              className={styles.register_from_input} 
              id="password" 
              pattern="[\da-zA-Z]{8,16}" 
              value={this.state.user.password}
              onChange={ (e) => {
                var newState = {...this.state}
                newState.user.password = e.target.value
                this.setState(newState)
              }
              }
              required />
              <img src={eyeSrc} id="eye" style={{ opacity: eyeOpacity }} className={styles.eye} onClick={this.eyeClick} />
            </div>
            {errors.password && (
              <div className={styles.warning_title}>
                <img src="/image/warning.png" className={styles.pic} />
                <span className={styles.warning}>{errors.password}</span>
              </div>
            )}
            <br /><br />
            <div className={styles.revise_first}>
              <label htmlFor="" className={styles.revise_from_title}>再次確認密碼</label>
              <input type={passwordType2} 
              className={styles.register_from_input} 
              pattern="[\da-zA-Z]{8,16}" 
              id='password2'
              value={this.state.user.password2}
              onChange={ (e) => {
                var newState = {...this.state}
                newState.user.password2 = e.target.value
                this.setState(newState)
              }
              } 
              required />
              <img src={eyeSrc2} id="eye1" style={{ opacity: eyeOpacity2 }} className={styles.eye} onClick={this.eyeClick2} />
            </div>
            {errors.password2 && (
              <div className={styles.warning_title}>
                <img src="/image/warning.png" className={styles.pic} />
                <span className={styles.warning}>{errors.password2}</span>
              </div>
            )}
            <br />
            <hr />
            <div className={styles.resive_from_send}>
              <input
                type="button"
                value="確定送出"
                id="register"
                className={styles.resive_go}
                onClick={this.handleRevise}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }


  // 開眼1
  eyeClick = () => {
    const { passwordType, eyeSrc } = this.state

    if (passwordType === 'text') {
      this.setState({
        passwordType: 'password',
        eyeOpacity: 1,
        eyeSrc: './image/eye.png'
      })
    } else {
      this.setState({
        passwordType: 'text',
        eyeOpacity: 0.5,
        eyeSrc: eyeSrc === './image/eye.png' ? './image/EyeSlash.png' : './image/eye.png'
      })
    }
  }
  // 開眼2
  eyeClick2 = () => {
    const { passwordType2, eyeSrc2 } = this.state

    if (passwordType2 === 'text') {
      this.setState({
        passwordType2: 'password',
        eyeOpacity2: 1,
        eyeSrc2: './image/eye.png'
      })
    } else {
      this.setState({
        passwordType2: 'text',
        eyeOpacity2: 0.5,
        eyeSrc2: eyeSrc2 === './image/eye.png' ? './image/EyeSlash.png' : './image/eye.png'
      })
    }
  }




  //密碼不同時阻止表單送出

  handleRevise = async (e) => {

    const { password} = this.state.user;

    const regexPattern = {
      password: /^(?=.*[A-Za-z])(?=.*\d)[^\s]{8,16}$/
    };

    const errors = {
      password: ''
    };

    if (!regexPattern.password.test(password)) {
      errors.password = '密碼長度需8-16字元，含一個英文字母與數字';
      errors.password2 = '密碼長度需8-16字元，含一個英文字母與數字';
    }

    this.setState({ errors });

    if (this.state.user.password != this.state.user.password2) {
      var newState = { ...this.state }
      newState.errors.password = '請確認密碼是否相同'
      newState.errors.password2 = '請確認密碼是否相同'
      this.setState(newState)
      e.preventDefault()
    }

    try {
      var response = await axios.post('http://localhost:8000/revise')

      console.log('Response', response)



      if (response.status === 200) {
        console.log('密碼設定成功')
      }
    } catch (error) {

    }

  }



}

export default Revise;