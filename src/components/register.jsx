import React, { Component, useState } from 'react';
import styles from '../css/Register.module.css'
import axios from 'axios';


class Register extends Component {
  // constructor(props)：構造函數接收props作為參數，並調用super(props)，繼承父類的所有屬性和方法。
  constructor(props) {
    super(props);
    this.state = {
      passwordType: 'password',
      eyeOpacity: 1,
      eyeSrc: './image/eye.png',

      passwordType2: 'password',
      eyeOpacity2: 1,
      eyeSrc2: './image/eye.png',

      verification: '',
      handleOpen: false,

      user: {
        mname: '',
        phone: '',
        email: '',
        password: ''
      },

      errors: {
        phone: '',
        email: '',
        password: ''
      }
    };
    this.generateCode = this.generateCode.bind(this)
  }


  render() {
    const {
      passwordType,
      eyeOpacity,
      eyeSrc,
      passwordType2,
      eyeOpacity2,
      eyeSrc2,
      handleOpen,
      errors
    } = this.state;

    return (

      <div className={styles.short}>
        <div id={styles["rule"]}>
          【HowTo露反詐騙提醒】HowTo露客服人員不會要求您到ATM操作退款或信用卡退刷，這是詐騙手法，
          請提高警覺!!如有接獲類似電話或簡訊，請立即撥打165防詐騙專線，或洽客服04-23265860確認，謝謝
        </div>

        <div style={{ textAlign: 'center' }}>
          <div id={styles["small-title"]}>註冊HowTo露會員</div>
          <hr />

          <form action="http://localhost:8000/register" method="post" className={styles.register_login}>
            <div className={styles.register_first}>
              <label htmlFor="" className={styles.register_from_title}>姓名</label>
              <input type="text"
                className={styles.register_from_input}
                value={this.state.user.mname}
                onChange={
                  (e) => {
                    var newState = { ...this.state };
                    newState.user.mname = e.target.value;
                    this.setState(newState);
                  }
                }
                required />
            </div>
            <div className={styles.register_first}>
              <label htmlFor="" className={styles.register_from_title}>手機號碼</label>
              <input type="text"
                placeholder="格式：0912345678"
                className={styles.register_from_input}
                pattern="0\d{9}"
                value={this.state.user.phone}
                onChange={
                  (e) => {
                    var newState = { ...this.state };
                    newState.user.phone = e.target.value;
                    this.setState(newState);
                  }
                }
                required />
                </div>
              {errors.phone && (
                <div className={styles.warning_title}>
                  <img src="/image/warning.png" className={styles.pic} />
                  <span className={styles.warning}>{errors.phone}</span>
                </div>
              )}
            
            <div className={styles.register_first}>
              <label htmlFor="" className={styles.register_from_title}>e-mail</label>
              <input type="email"
                className={styles.register_from_input}
                value={this.state.user.email}
                onChange={
                  (e) => {
                    var newState = { ...this.state };
                    newState.user.email = e.target.value;
                    this.setState(newState);
                  }
                }
                required /></div>
              {errors.email && (
                <div className={styles.warning_title}>
                  <img src="/image/warning.png" className={styles.pic} />
                  <span className={styles.warning}>{errors.email}</span>
                </div>
              )}
            
            
            <div className={styles.register_first}>
              <label htmlFor="" className={styles.register_from_title}>設定密碼</label>
              <input type={passwordType}
                className={styles.register_from_input}
                placeholder="  密碼長度需8-16字元，含一個英文字母與數字"
                id="password"
                pattern="^(?=.[a-zA-Z])(?=.\d)[^\s]{8,16}$"
                value={this.state.user.password}
                onChange={
                  (e) => {
                    var newState = { ...this.state };
                    newState.user.password = e.target.value;
                    this.setState(newState);
                  }
                }
                required />
              <img src={eyeSrc}
                style={{ opacity: eyeOpacity }}
                id="eye"
                className={styles.eye}
                onClick={this.eyeClick} /></div>
              {errors.password && (
                <div className={styles.warning_title}>
                  <img src="/image/warning.png" className={styles.pic} />
                  <span className={styles.warning}>{errors.password}</span>
                </div>
              )}
            
            <div className={styles.register_first}>
              <label htmlFor="" className={styles.register_from_title}>再次確認密碼</label>
              <input type={passwordType2}
                className={styles.register_from_input}
                placeholder="   再次確認密碼"
                id="checkeye"
                pattern="[\da-zA-Z]{8,16}"
                required />
              <img src={eyeSrc2} 
              style={{ opacity: eyeOpacity2 }} 
              className={styles.eye} 
              onClick={this.eyeClick2} />
            </div>
            <div className={styles.register_first}>
              <label htmlFor="" className={styles.register_from_title}>驗證碼</label>
              <input type="text" className={styles.register_from_input} id="cnumber" required />
            </div>
            <div className={styles.reflash_div}>
              <p id='verification' className={styles.verification}>{this.state.verification}</p>
              <img src="/image/reflash.png" id={styles["reflash"]} onClick={this.generateCode} />
            </div>
            <div className={styles.register_first}>
              <input type="checkbox" className={styles.register_from_checkbox} id="checkbox" />
              <p className={styles.register_from_checkbox_word} id='agree'>我同意</p>
              <a className={styles.register_from_checkbox_link} id="terms" onClick={this.handleTermsClick}>HowTo露會員服務條款</a>
            </div>
            <hr />
            <div className={styles.register_from_send}>
              <input type="button"
                value="註冊"
                id="register"
                className={`${styles.register_from_link} ${styles.register_from_button}`}
                onClick={this.handleRegisterClick} />
              <p className={styles.register_from_link}>我已經是會員了！</p>
              <a href="/login" className={styles.register_from_link}>請點這裡登入</a>
              <br />
              <a href="/reset" className={`${styles.register_from_link} ${styles.register_from_forget_password}`}>忘記密碼?</a>
            </div>
          </form>
        </div>

        {handleOpen &&
          <div id={styles["background"]}>
            <div id={styles["div1"]} className={styles.content}>
              <div id={styles["close"]}>
                <span id={styles["close-button"]} onClick={this.handleCloseClick}>×</span>
                <h2>HowTo露會員服務條款</h2>
              </div>
              <div id={styles["div2"]}>
                <h1>會員服務條款</h1>
                <h3>一、認知與接受條款</h3>
                <br />
                <p>
                  1. 當會員完成HowTo露之會員註冊手續、或開始使用本服務時，即表示已閱讀、瞭解並同意接受本服務條款之所有內容，並完全接受本服務現有與未來衍生的服務項目及內容。
                </p>
                <br />
                <p>本站有權於任何時間修改或變更本服務條款之內容，修改後的服務條款內容將公佈網站上，將不會個別通知會員，建議會員隨時注意該等修改或變更。會員於任何修改或變更後繼續使用本服務時，視為會員已閱讀、瞭解並同意接受該等修改或變更。若不同意上述的服務條款修訂或更新方式，或不接受本服務條款的其他任一約定，會員應立即停止使用本服務。</p>
                <p>2. 會員及本站雙方同意使用本服務之所有內容包括意思表示等，以電子文件作為表示方式。</p>
                <br />
                <h4>二、會員的註冊義務</h4>
                <p>為了能使用本服務，會員同意以下事項：</p>
                <p>依本服務註冊表之提示提供會員本人正確、最新的資料，且不得以第三人之名義註冊為會員。每位會員僅能註冊登錄一個帳號，不可重覆註冊登錄。</p>
                <p>即時維持並更新會員個人資料，確保其正確性，以獲取最佳之服務。</p>
                <p>若會員提供任何錯誤或不實的資料、或未按指示提供資料、或欠缺必要之資料、或有重覆註冊帳號等情事時，本站有權不經事先通知，逕行暫停或終止會員的帳號，並拒絕會員使用本服務之全部或一部。</p>
                <br />
                <h4>三、隱私權政策</h4>
                <p>關於會員的註冊以及其他特定資料依本站「隱私權政策」受到保護與規範。</p>
                <br />
                <h4>四、會員帳號、密碼及安全</h4>
                <p>1.完成本服務的登記程序之後，會員將取得一個特定之密碼及會員帳號，維持密碼及帳號之機密安全，是會員的責任。任何依照規定方法輸入會員帳號及密碼與登入資料一致時，無論是否由本人親自輸入，均將推定為會員本人所使用，利用該密碼及帳號所進行的一切行動，會員本人應負完全責任。</p>
                <p>2.會員同意以下事項：</p>
                <p>會員的密碼或帳號遭到盜用或有其他任何安全問題發生時，會員將立即通知本站每次連線完畢，均結束會員的帳號使用。</p>
                <p>會員的帳號、密碼及會員權益均僅供會員個人使用及享有，不得轉借、轉讓他人或與他人合用。</p>
                <p>帳號及密碼遭盜用、不當使用或其他本站無法辯識是否為本人親自使用之情況時，對此所致之損害，除證明係因可歸責於露營樂之事由所致，本站將不負任何責任。</p>
                <p>本站若知悉會員之帳號密碼確係遭他人冒用時，將立即暫停該帳號之使用(含該帳號所生交易之處理)。</p>
                <br />
                <h4>五、使用者的守法義務及承諾</h4>
                <p>1.會員承諾絕不為任何非法目的或以任何非法方式使用本服務，並承諾遵守中華民國相關法規及一切使用網際網路之國際慣例。會員若係中華民國以外之使用者，並同意遵守所屬國家或地域之法令。會員同意並保證不得利用本服務從事侵害他人權益或違法之行為，包括但不限於：</p>
                <p>2.公布或傳送任何誹謗、侮辱、具威脅性、攻擊性、不雅、猥褻、不實、違反公共秩序或善良風俗或其他不法之文字、圖片或任何形式的檔案</p>
                <p>3.侵害或毀損本站或他人名譽、隱私權、營業秘密、商標權、著作權、專利權、其他智慧財產權及其他權利</p>
                <p>4.違反依法律或契約所應負之保密義務</p>
                <p>5.冒用他人名義使用本服務</p>
                <p>6.傳輸或散佈電腦病毒</p>
                <p>7.從事未經露營樂事前授權的商業行為刊載、傳輸、發送垃圾郵件、連鎖信、違法或未經露營樂許可之多層次傳銷訊息及廣告等；或儲存任何侵害他人智慧財產權或違反法令之資料對本服務其他用戶或第三人產生困擾、不悅或違反一般網路禮節致生反感之行為其他不符本服務所提供的使用目的之行為或露營樂有正當理由認為不適當之行為</p>
                <br />
                <h4>六、交易行為</h4>
                <p>1.會員使用本服務進行交易時，應依據本站所提供之確認商品數量及價格機制進行。</p>
                <p>2.會員同意使用本服務訂購產品時，於本站通知確認交易成立前，本站仍保有不接受訂單或取消出貨之權利。會員向本站發出訂購通知後，系統將自動發出接受通知，但此通知並非訂單確認通知，關於交易成立與否本站將另行告知。若因訂單內容之標的商品或服務，其交易條件(包括但不限於規格、內容說明、圖片、)有誤時，本站仍得於下單後二工作日內拒絕該筆訂單。</p>
                <p>3.會員若於使用本服務訂購產品後倘任意退換貨、取消訂單、或有任何本站認為不適當而造成露營樂作業上之困擾或損害之行為，本站將可視情況採取拒絕交易，或永久取消會員資格辦理。若會員訂購之產品若屬於以下情形：（１）預購類商品（２）商品頁顯示無庫存，因商品交易特性之故，導致訂單無法成立時，本站將以最適方式(以電子郵件為主，再輔以電話、郵遞或傳真等)告知。</p>
                <p>4.會員使用本服務進行交易時，得依照消費者保護法之規定行使權利。因會員之交易行為而對本服務條款產生疑義時，應為有利於消費者之解釋。</p>
                <br />
              </div>
            </div>
          </div>}

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

  // 亂數驗證碼
  componentDidMount() {
    this.generateCode();
  }

  generateCode = () => {
    const num = Math.floor(Math.random() * 10000)
    const Newnum = num.toString().padStart(4, 0)
    this.setState({ verification: Newnum })
  }

  // 彈窗的開啟與關閉
  handleTermsClick = () => {
    this.setState({ handleOpen: true })
  }

  handleCloseClick = () => {
    this.setState({ handleOpen: false })
  }

  //密碼不同時阻止表單送出

  handleRegisterClick = async (e) => {
    e.preventDefault(); // 防止表單預設提交行為

    const { password, email, phone } = this.state.user;
    const { verification } = this.state;
    const isCheck = document.getElementById('checkbox').checked;

     // 進行表單驗證
  const regexPattern = {
    phone: /^0\d{9}$/,
    email: /^\S+@\S+\.\S+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[^\s]{8,16}$/
  };

  const errors = {
    phone: '',
    email: '',
    password: ''
  };

  if (!regexPattern.phone.test(phone)) {
    errors.phone = '請輸入有效的手機號碼';
  }

  if (!regexPattern.email.test(email)) {
    errors.email = '請輸入有效的e-mail';
  }

  if (!regexPattern.password.test(password)) {
    errors.password = '密碼長度需8-16字元，含一個英文字母與數字';
  }

  if (password !== document.getElementById('checkeye').value) {
    errors.password = '請再次確認密碼是否相同';
  }

  if (verification !== document.getElementById('cnumber').value) {
    errors.verification = '請確認驗證碼是否正確';
  }

  this.setState({ errors });
  
  if (!isCheck) {
      document.getElementById('agree').style.color = 'red';
      document.getElementById('terms').style.color = 'red';
      return;
    }

  if (Object.values(errors).some(error => error !== '')) {
    // 若有錯誤存在，不執行後續提交邏輯
    return;
  }



    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        this.state.user, // 直接传递对象作为请求体数据
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.status === 200) {
        // 响应状态码为200，表示成功
        // 在此处处理成功响应的逻辑
        alert('註冊成功')
      } else {
        // 其他状态码处理
        console.error(response.data);
        // 进行相应的错误处理逻辑
      }
    } catch (error) {
      // 处理错误响应
      if (error.response) {
        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
        console.error(error.response.data);
      } else if (error.request) {
        // 请求已发出，但未收到响应
        console.error("No Response");
      } else {
        // 其他错误
        console.error(error);
      }
    }
  };

}

export default Register;