import React, { Component } from 'react';
import styles from '../css/Revise.module.css'

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
        };
      }


    render() { 
        const { passwordType, eyeOpacity,eyeSrc } = this.state
        const { passwordType2, eyeOpacity2,eyeSrc2 } = this.state

        return (
            <div className={styles.short}>
            <div style={{textAlign: "center"}}>
              <div id={styles["small-title"]}>修改密碼</div>
              <hr />
              <div className={styles.revise_rule}>
                ***為保護您的個人資料安全，請務必修改密碼。
              </div>
              <form action="" method="" id={styles.revise_login}>
                <br />
                <div className={styles.revise_first}>
                  <label htmlFor="" className={styles.revise_from_title}>設定密碼</label>
                  <input type={passwordType} className={styles.register_from_input} id="password" pattern="[\da-zA-Z]{8,16}" required/>
                  <img src={eyeSrc} id="eye" style={{opacity: eyeOpacity}} className={styles.eye} onClick={this.eyeClick}/>
                </div>
                <br /><br />
                <div className={styles.revise_first}>
                  <label htmlFor="" className={styles.revise_from_title}>再次確認密碼</label>
                  <input type={passwordType2} className={styles.register_from_input} pattern="[\da-zA-Z]{8,16}" id='password2' required/>
                  <img src={eyeSrc2} id="eye1" style={{opacity: eyeOpacity2}} className={styles.eye} onClick={this.eyeClick2}/>
                </div>
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
            const {passwordType, eyeSrc} = this.state
    
            if (passwordType === 'text') {
                this.setState({
                    passwordType: 'password',
                    eyeOpacity: 1,
                    eyeSrc: './image/eye.png'
                })  
            }else {
                this.setState({
                    passwordType: 'text',
                    eyeOpacity: 0.5,
                    eyeSrc: eyeSrc === './image/eye.png' ? './image/EyeSlash.png' : './image/eye.png'
                })
            }
        }
        // 開眼2
        eyeClick2 = () => {
            const {passwordType2, eyeSrc2} = this.state
    
            if (passwordType2 === 'text') {
                this.setState({
                    passwordType2: 'password',
                    eyeOpacity2: 1,
                    eyeSrc2: './image/eye.png'
                })  
            }else {
                this.setState({
                    passwordType2: 'text',
                    eyeOpacity2: 0.5,
                    eyeSrc2: eyeSrc2 === './image/eye.png' ? './image/EyeSlash.png' : './image/eye.png'
                })
            }
        }

        //密碼不同時阻止表單送出

        handleRevise = (e) => {
          const password = document.getElementById('password')
          const password2 = document.getElementById('password2')

          if (password != password2) {
            alert('請確認密碼是否相同')
            e.preventDefault()
          }
        }
}
 
export default Revise;