import React, { Component } from 'react';
import styles from '../css/Info_member.module.css'
import axios from 'axios';
import Modal from 'react-modal';


class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                mid: '',
                m_img: null,
                name: '',
                tel: '',
                gender: '請選擇',
                mail: '',
                address: '',
                password: '',
                new_password: '',
                new_password2: '',
            },
            registerSuccess: false,
            opacity: 0.6,

            errors: {
                password: '',
                mail: ''
            }

        }
    }

    componentDidMount = async () => {
        try {
            const account = sessionStorage.getItem('account')
            const response = await axios.get(`http://localhost:8000/info?account=${account}`);
            const userData = response.data.userdata;
            console.log('ccc', userData) // 假设响应的数据是用户对象

            if (userData.m_img) {
                this.setState((prevState) => ({
                    user: {
                        ...prevState.user,
                        m_img: `image/${userData.m_img}`,
                        mid: userData.mid,
                        name: userData.name,
                        tel: userData.tel,
                        gender: userData.gender,
                        mail: userData.mail,
                        address: userData.address,
                        password: userData.password,
                    },
                }));
            } else {
                this.setState((prevState) => ({
                    user: {
                        ...prevState.user,
                        m_img: '/image/Head.png',
                        mid: userData.mid,
                        name: userData.name,
                        tel: userData.tel,
                        gender: userData.gender,
                        mail: userData.mail,
                        address: userData.address,
                        password: userData.password,
                    },
                }));
            }
        } catch (error) {
            if (error.response.status === 401) {
                console.log('未登入');
            }
        }
    }





    render() {
        const { errors, registerSuccess, opacity } = this.state


        return (

            <div className={styles.short}>
                <ul className={styles.info_ul}>
                    <li className={styles.info_li}><a href="/info" style={{ textDecoration: "none", color: 'blue' }}><p className={styles.info_li_first}>編輯會員資料</p></a></li>
                    <li className={styles.info_li}><a href="/order_list" style={{ textDecoration: "none", color: 'blue' }}><p className={styles.form}>訂單查詢</p></a></li>
                    <li className={styles.info_li}>
                        <a style={{ textDecoration: "none", color: 'blue' }} onClick={this.logoutClick}>登出</a>
                    </li>
                </ul>

                <form action="http://localhost:8000/info/member" method='post' className={styles.form} encType="multipart/form-data">
                    {console.log('bbbbbbb', this.state)}
                    <p className={styles.info_p_first}>我的大頭照</p>
                    <img src={this.state.user.m_img}
                        className={styles.info_pic}
                    />
                    {console.log('aa', this.state.user.m_img)}
                    {/* {console.log('rr', this.state.user.m_img.substring(0,10))} */}
                    <input type="file" className={styles.info_file} accept='/image/jpg' onChange={this.handleFileChange} style={{ marginBottom: '50px' }} />
                    <p className={styles.info_file_limit}>*請傳.jpg檔</p>
                    <div style={{ textAlign: "center" }} className={styles.form}>
                        <div className={styles.info_from_div}>
                            <label htmlFor="" className={styles.info_label_word}>姓 名</label>
                            <input type="text"
                                className={styles.info_label}
                                value={this.state.user.name}
                                onChange={(e) => {
                                    var newState = { ...this.state }
                                    newState.opacity = 1
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
                                    newState.opacity = 1
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
                                    newState.opacity = 1
                                    newState.user.mail = e.target.value
                                    this.setState(newState)
                                }
                                }
                            />
                        </div>
                        {errors.mail && (
                            <div className={styles.warning_title} style={{ paddingLeft: '270px', marginTop: '-25px', textAlign: 'right', width: '280px' }}>
                                <img src="/image/warning.png" className={styles.pic} />
                                <span className={styles.warning}>{errors.mail}</span>
                            </div>
                        )}
                        <div className={styles.info_from_div}>
                            <label htmlFor="" className={styles.info_label_word}>居住地址（選填）</label>
                            <input type="text"
                                className={styles.info_label_address}
                                value={this.state.user.address}
                                onChange={(e) => {
                                    var newState = { ...this.state }
                                    newState.opacity = 1
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
                                <input type="password" id='new_password'
                                    className={styles.info_label}
                                    value={this.state.user.new_password}
                                    onChange={(e) => {
                                        var newState = { ...this.state }
                                        newState.opacity = 1
                                        newState.user.new_password = e.target.value
                                        this.setState(newState)
                                    }
                                    }
                                />
                            </div>
                            <div className={styles.info_password}>
                                <label htmlFor="" className={`${styles.info_label_word} ${styles.info_password_word}`}>確認新密碼</label>
                                <input type="password" id='new_password2'
                                    className={styles.info_label}
                                    value={this.state.user.new_password2}
                                    onChange={(e) => {
                                        var newState = { ...this.state }
                                        newState.opacity = 1
                                        newState.user.new_password2 = e.target.value
                                        this.setState(newState)
                                    }
                                    }
                                />
                            </div>
                            {errors.password && (
                                <div className={styles.warning_title}>
                                    <img src="/image/warning.png" className={styles.pic} />
                                    <span className={styles.warning}>{errors.password}</span>
                                </div>
                            )}
                            <br /><br />
                            <div className={styles.info_submit_div}>
                                <input type="submit"
                                    value="儲存變更"
                                    className={styles.info_submit}
                                    onClick={this.onButtonClick}
                                    style={{ opacity: opacity }} // 使用 opacity 屬性設置按鈕的不透明度
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <br /><br /><br /><br />
                <Modal
                    isOpen={registerSuccess}
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
                        <p className={styles.h2}>修改成功</p>
                        <button onClick={this.closeSuccessModal} className={styles.open_button}>關閉</button>
                    </div>
                </Modal>
            </div>
        );
    }

    logoutClick = () => {
        sessionStorage.clear();
        window.location.href = '/';
    }

    // 關閉彈窗
    closeSuccessModal = () => {
        this.setState({ registerSuccess: false });
    };

    handleFileChange = async (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        console.log('988', file)
        reader.onloadend = () => {
            // const base64String = reader.result;
            const base64String = reader.result.split(',')[1]; // 只取得 base64 部分;
            const extension = file.name.split('.').pop().toLowerCase(); // 從檔名中獲取副檔名
            this.setState((prevState) => ({
                user: {
                    ...prevState.user,
                    m_img: `data:image/${extension};base64,${base64String}`,
                },
            }));
        };
        console.log('3333', this.state)
        if (file) {
            reader.readAsDataURL(file);
        }
    };


    onButtonClick = async (e) => {
        e.preventDefault();
        const {opacity} = this.state
        const { password, mail, new_password, new_password2 } = this.state.user;
        console.log("Current opacity:", this.state.opacity);
        const regexPattern = {
            mail: /^\S+@\S+\.\S+$/,
            password: /^(?=.*[A-Za-z])(?=.*\d).{8,16}$/
        };

        const errors = {
            mail: '',
            password: ''
        };

        if (!regexPattern.mail.test(mail)) {
            errors.mail = '請輸入有效的e-mail';
        }

        // 如果用户输入了新密码，再进行密码格式检查
        if (new_password !== '' && !regexPattern.password.test(new_password)) {
            errors.password = '密碼長度需8-16字元，含一個英文字母與數字';
        }


        if (new_password !== '' && new_password !== new_password2) {
            errors.password = '請確認新密碼是否相同';
        }



        // 檢查是否有密碼錯誤
        if (errors.password || errors.mail || opacity === 0.6) {
            // 如果有密碼錯誤，直接退出函數，不發送數據到後端
            console.log('沒改')
            return;
        }

        this.setState({ errors });

        const { user } = this.state;

        const formData = new FormData();
        formData.append('image', user.m_img); // 将用户选择的图像文件添加到FormData对象中


        try {


            var response = await axios.post('http://localhost:8000/info/member', {
                account: sessionStorage.getItem('account'),
                formData,
                user: this.state.user
            },
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }

            )

            if (response.status === 200) {
                // 响应状态码为200，表示成功
                // 在此处处理成功响应的逻辑
                this.setState({ registerSuccess: true }); // 设置注册成功状态为 true
                console.log('OK')
                // alert('註冊成功')
            } else {
                // 其他状态码处理
                console.error(response.data);
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert('只允許上傳 JPG 格式的圖片');
            } else {
                console.error(error);
            }
        }
    }
}

export default Info;