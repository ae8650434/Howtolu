import React, { Component } from 'react';
import styles from '../css/process_me.module.css'


class Process extends Component {
    state = {  } 
    render() { 
        return (

            <div className={styles.all}>
                <br /><br /><br />
            <p className={styles.title}>租借流程</p>
            <br />
            <hr style={{border: '2px solid black'}}/>
            <br /><br />
            <div className={styles.second_all}>
              <div className={styles.step}>Step1</div>
              <br />
              <div className={styles.inside_title}>線上訂購</div>
              <div>
                <ol className={styles.inside_word}>
                  <li>於官網上選擇欲租借的裝備及數量</li>
                  <li>於月曆中選擇要租借的日期</li>
                  <li>按下立即預約鍵將裝備加入購物車</li>
                  <li>至購物車確認租借清單</li>
                </ol>
              </div>
            </div>
            <img className={styles.img} src={'./image/online.png'} />
      
            <p className={styles.step} style={{textAlign: 'center', marginLeft: '-300px', marginTop:'20px'}}>或</p>
      
            <div className={styles.second_all}>
              <div className={styles.inside_title}>表單訂購</div>
              <div>
                <ol className={styles.inside_word}>
                  <li>Google表單填寫</li>
                  <li>Excel表下載，接著表單上傳</li>
                  <li>至購物車確認租借清單</li>
                </ol>
              </div>
            </div>
            <img className={styles.img} src={'./image/from.png'} />
            <br /><br /><br /><br /><br />
            
            <div className={styles.second_all}>
            <div className={styles.step}>Step2</div>
            <br />
              <div className={styles.inside_title}>結帳</div>
              <div>
                <ol className={styles.inside_word}>
                  <li>信用卡結帳</li>
                  <li>於月曆中選擇要租借的日期</li>
                  <li>按下立即預約鍵將裝備加入購物車</li>
                  <li>至購物車確認租借清單</li>
                  <li>確認無誤後再進行結帳</li>
                </ol>
              </div>
            </div>
            <img className={styles.img} src={'./image/pay.png'} />
            <br /><br /><br /><br /><br />

            <div className={styles.second_all}>
            <div className={styles.step}>Step3</div>
            <br />
              <div className={styles.inside_title}>取件</div>
              <div>
                <ol className={styles.inside_word}>
                  <li>
                    請攜帶取件人之身分證供現場核對複印留存
                    (影本上會註記僅供租賃露營設備使用)
                  </li>
                  <li>依約定時間至店面取件</li>
                  <li>於店面確認裝備的項目及數量無誤後即完成取件</li>
                </ol>
              </div>
            </div>
            <img className={styles.img} src={'./image/takeout.png'} />
            <br /><br /><br /><br /><br />

            <div className={styles.second_all}>
            <div className={styles.step}>Step4</div>
            <br />
              <div className={styles.inside_title}>歸還</div>
              <div>
                <ol className={styles.inside_word}>
                  <li>歸還當日請於店面營業時間內將租借的裝備歸還，</li>
                  <li>並在門市人員清點完畢後完成歸還程序。</li>
                </ol>
              </div>
            </div>
            <img className={styles.img} src={'./image/return.png'} />
          </div>
        );
    }
}
 
export default Process;