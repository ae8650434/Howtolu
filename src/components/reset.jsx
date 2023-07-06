import React, { Component } from 'react';
import '../css/Reset.css'

class Reset extends Component {
    state = {  } 
    render() { 
        return (
            
        <div class="short">
        <div style={{textAlign: "center"}}>
          <div id="small-title">忘記密碼</div>
          <hr />
          <div class="reset_rule">
            請輸入您註冊時輸入的e-mail，系統會自動發送驗證碼到您的信箱，<br/>
            輸入驗證碼成功後，請在修改密碼。
          </div>
          <form action="" method="">
            <div style={{textAlign:"center"}} >
              <div class="reset_first">
                <label for="account" class="reset_label reset_label_first">e-mail</label>
                <input type="text" name="account" id="account" class="reset_input_email" />
                <input type="button" value="驗證碼" class="reset_button"/>
              </div>
              <br/><br/>
              <div class="reset_first">
                <label for="password" class="reset_label">驗證碼</label>
                <input type="password" name="password" id="password" class="reset_input"/>
              </div>
            </div>
            <hr />
            <br /><br />
            <div class="send">
              <input type="submit" value="確定送出" class="go" />
            </div>
          </form>
        </div>
    </div>


        );
    }
}
 
export default Reset;