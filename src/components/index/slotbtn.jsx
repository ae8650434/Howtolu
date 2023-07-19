import React, { Component } from 'react';
import slotstyle from "../../css/slot.module.css"
import Slot from "./slot.jsx"
class slotbtn extends Component {
    state = {
        slotimg: ["camping_1.jpg", "camping_2.jpg", "camping_3.jpg"]
    }
    render() {
        return (
            <div className={slotstyle.slotdiv}>
                <Slot/>
                <button onClick={this.slot}>測試的按鈕</button>
            </div>
        )
    }
    slot=()=>{

    }
}
 
export default slotbtn;