import React, { Component } from 'react';
import styles from '../css/Info_member.module.css'
import axios from 'axios';


class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                m_img: null,
                name: '王大明',
                tel: '0923232323',
                gender: '請選擇',
                mail: 'aaa@gmail.com',
                address: 'aaaaaa',
                password: '33333eeeee',
                new_password: '',
                new_password2: '',
            }

        }
    }

    componentDidMount=  async () =>{
      try {
          const account = sessionStorage.getItem('account')
          const response = await axios.get(`http://localhost:8000/info?account=${account}`); 
          const userData = response.data.userdata;
          console.log('ccc',userData) // 假设响应的数据是用户对象
         
          if(userData.m_img) {
              console.log('666',userData.m_img)
              userData.m_img = userData.m_img
            console.log('33',this.state.user.m_img)
          }else {
            userData.m_img = 'Head.png'
            console.log('44',userData.m_img )
          }
          console.log("fhlkdsa",this.state.user.userData)
          this.setState({ user: userData });
        } catch (error) {
            // 处理错误
            if(error.response.data == 401) {
                console.log('未登入')
            }
        }
        console.log('777',this.state )
        
    }


    render() {
        return (

            <div className={styles.short}>
                <ul className={styles.info_ul}>
                    <li className={styles.info_li}><a href="/info" style={{ textDecoration: "none" }}><p className={styles.info_li_first}>編輯會員資料</p></a></li>
                    <li className={styles.info_li}><a href="/order_list" style={{ textDecoration: "none" }}><p className={styles.form}>訂單查詢</p></a></li>
                    <li className={styles.info_li}>
                        <a href="" style={{ textDecoration: "none" }}>登出</a>
                    </li>
                </ul>

                <form action="" className={styles.form}>
                {console.log('bbbbbbb',this.state)}
                    <p className={styles.info_p_first}>我的大頭照</p>
                    <img src={`/image/${this.state.user.m_img}`} 
                    className={styles.info_pic} 
                
            
                    />
                    {console.log('aa',this.state.user.m_img)}
                    <input type="file" className={styles.info_file} />
                    <p className={styles.info_file_limit}>*請傳.jpg檔</p>
                    <div style={{ textAlign: "center" }} className={styles.form}>
                        <div className={styles.info_from_div}>
                            <label htmlFor="" className={styles.info_label_word}>姓 名</label>
                            <input type="text"
                                className={styles.info_label}
                                value={this.state.user.name}
                                onChange={(e) => {
                                    var newState = { ...this.state }
                                    newState.user.name = e.target.value
                                    this.setState(newState)
                                }
                                }
                            />
                            <label htmlFor="" className={styles.info_label_word}>手機號碼</label>
                            <input type="tel" className={styles.info_label} value={this.state.user.tel} style={{ backgroundColor: 'gray' }} />
                        </div>
                        <div className={styles.info_from_div}>
                            <label htmlFor="" className={styles.info_label_word}>性 別 </label>
                            <select name="gender" id=""
                                className={styles.info_select}
                                value={this.state.user.gender}
                                onChange={(e) => {
                                    var newState = { ...this.state }
                                    newState.user.gender = e.target.value
                                    this.setState(newState)
                                }
                                }
                            >
                                <option>請選擇</option>
                                <option>男性</option>
                                <option>女性</option>
                                <option>其他</option>
                            </select>
                            <label htmlFor="" className={styles.info_label_word}>e-mail</label>
                            <input type="email"
                                className={styles.info_label}
                                value={this.state.user.mail}
                                onChange={(e) => {
                                    var newState = { ...this.state }
                                    newState.user.mail = e.target.value
                                    this.setState(newState)
                                }
                                }
                            />
                        </div>
                        <div className={styles.info_from_div}>
                            <label htmlFor="" className={styles.info_label_word}>居住地址（選填）</label>
                            <input type="text"
                                className={styles.info_label_address}
                                value={this.state.user.address}
                                onChange={(e) => {
                                    var newState = { ...this.state }
                                    newState.user.address = e.target.value
                                    this.setState(newState)
                                }
                                }
                            />
                        </div>
                        <div className={styles.info_reset_password}>
                            <div className={styles.info_password_div}>
                                <img src="/image/member_icon.png" className={styles.info_member_icon} />
                                <p className={styles.info_pic_word}>修改密碼</p>
                            </div>
                            <div className={styles.info_password}>
                                <label htmlFor="" className={`${styles.info_label_word} ${styles.info_password_word}`}>舊密碼</label>
                                <input type="password" className={styles.info_label} value={this.state.user.password} style={{ backgroundColor: 'gray' }} />
                            </div>
                            <div className={styles.info_password}>
                                <label htmlFor="" className={`${styles.info_label_word} ${styles.info_password_word}`}>設定新密碼</label>
                                <input type="password"
                                    className={styles.info_label}
                                    value={this.state.user.new_password}
                                    onChange={(e) => {
                                        var newState = { ...this.state }
                                        newState.user.new_password = e.target.value
                                        this.setState(newState)
                                    }
                                    }
                                />
                            </div>
                            <div className={styles.info_password}>
                                <label htmlFor="" className={`${styles.info_label_word} ${styles.info_password_word}`}>確認新密碼</label>
                                <input type="password"
                                    className={styles.info_label}
                                    value={this.state.user.new_password2}
                                    onChange={(e) => {
                                        var newState = { ...this.state }
                                        newState.user.new_password2 = e.target.value
                                        this.setState(newState)
                                    }
                                    }
                                />
                            </div>
                            <br /><br />
                            <div className={styles.info_submit_div}>
                                <input type="submit" value="儲存變更" className={styles.info_submit} />
                            </div>
                        </div>
                    </div>
                </form>
                <br /><br /><br /><br />
            </div>
        );
    }

    
    // onButtonClick = async () => {
    //         var information = await axios.get('http://localhost:8000/info', {
    //             account: sessionStorage.getItem('account')
    //         })
    //     }

    }

export default Info;