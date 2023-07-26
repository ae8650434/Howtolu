export default Process;
import React from 'react';
import './nav.css';
import './process.css';

function Navigation() {
  return (
    <div id="nav_bar">
      <a href="/index.html">
        <img id="logo" src="./public/image/logo-removebg-preview.png" alt="" />
      </a>
      <div id="selnav">
        <ul id="navul">
          <a href="/index.html">
            <li className="tili">首頁</li>
          </a>
          <a className="nava" href="">
            <li className="tili">
              所有商品
              <ul>
                <a href="/index.html">
                  <li className="conli">設備出租</li>
                </a>
                <a href="">
                  <li className="conli">食材購買</li>
                </a>
              </ul>
            </li>
          </a>
          <a className="nava" href="">
            <li className="tili">
              租借內容
              <ul>
                <a href="">
                  <li className="conli">租借流程</li>
                </a>
                <a href="">
                  <li className="conli">租借規範</li>
                </a>
              </ul>
            </li>
          </a>
          <a href="">
            <li className="tili">
              表單訂購
              <ul>
                <a href="">
                  <li className="conli">表單上傳</li>
                </a>
                <li className="conli">
                  表單填寫
                  <ul id="a">
                    <a href="">
                      <li>Google表單</li>
                    </a>
                    <a href="./public/image/logo-removebg-preview.png" download>
                      <li>Excel表單下載</li>
                    </a>
                  </ul>
                </li>
              </ul>
            </li>
          </a>
          <li className="tili">
            <a href="">會員專區
              <ul>
                <a href="">
                  <li className="conli">會員資料</li>
                </a>
                <a href="">
                  <li className="conli">訂單查詢</li>
                </a>
              </ul>
            </a>
          </li>
        </ul>
      </div>
      <div id="nav_icon">
        <a href="/index.html">
          <button id="navcarbtn"></button>
        </a>
        <button id="navmembtn"></button>
        <ul id="memul" className="memul">
          <a href="">
            <li>會員登入</li>
          </a>
          <a href="">
            <li>註冊會員</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

function Process() {
  return (
    <div id="process">
      <h1>租借流程</h1>
      <hr />
      <div className="container">
        <p className="step">Step1</p>
        <div className="row  d-flex align-items-center">
          <div className="card flex-grow-1">
            <div className="card--header">
              <p>線上訂購</p>
            </div>
            <div className="card--body">
              <ol>
                <li>於官網上選擇欲租借的裝備及數量</li>
                <li>於月曆中選擇要租借的日期</li>
                <li>按下立即預約鍵將裝備加入購物車</li>
                <li>至購物車確認租借清單</li>
              </ol>
            </div>
          </div>
          <img src="./public/image/online-purchase_1.png" alt="" />
        </div>
        <p className="text-center step">或</p>
        <div className="row  d-flex align-items-center">
          <div className="card flex-grow-1">
            <div className="card--header">
              <p>表單訂購</p>
            </div>
            <div className="card--body">
              <ol>
                <li>Google表單填寫</li>
                <li>Excel表下載，接著表單上傳</li>
                <li>至購物車確認租借清單</li>
              </ol>
            </div>
          </div>
          <img src="./public/image/exam_1.png" alt="" />
        </div>

        <p className="step mt-row">Step2</p>
        <div className="row  d-flex align-items-center">
          <div className="card flex-grow-1">
            <div className="card--header">
              <p>結帳</p>
            </div>
            <div className="card--body">
              <ol>
                <li>確認無誤後再進行信用卡結帳</li>
              </ol>
            </div>
          </div>
          <img src="./public/image/checkout.png" alt="" />
        </div>

        <p className="step mt-row">Step3</p>
        <div className="row  d-flex align-items-center">
          <div className="card flex-grow-1">
            <div className="card--header">
              <p>取件</p>
            </div>
            <div className="card--body">
              <ol>
                <li>請攜帶取件人之身分證供現場核對複印留存 (影本上會註記僅供租賃露營設備使用)</li>
                <li>依約定時間至店面取件</li>
                <li>於店面確認裝備的項目及數量無誤後即完成取件</li>
              </ol>
            </div>
          </div>
          <img src="./public/image/box.png" alt="" />
        </div>

        <p className="step mt-row">Step4</p>
        <div className="row  d-flex align-items-center">
          <div className="card flex-grow-1">
            <div className="card--header">
              <p>歸還</p>
            </div>
            <div className="card--body">
              <ol>
                <li>歸還當日請於店面營業時間內將租借的裝備歸還</li>
                <li>並在門市人員清點完畢後完成歸還程序。</li>
              </ol>
            </div>
          </div>
          <img src="./public/image/return.png" alt="" />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navigation />
      <Process />
    </div>
  );
}

export default App;


