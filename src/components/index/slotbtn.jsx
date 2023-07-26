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
                <Slot />
            
               
            </div>
        )
    }
    slot=()=>{
        if (document.getElementById(`result`)) {
            document.getElementById(`result`).classList.add('isplay');
            document.getElementById(`result`).style.transform = 'none';
            console.log(document.getElementById(`result`))
           
          }
    }
    slots=()=>{
        if (document.getElementById(`result`)) {
            const num = Math.floor(Math.random() * 10);
            document.getElementById(`result`).classList.remove('isplay');
            document.getElementById(`result`).style.transform = `translateY(${-num * 10}%)`;
          }
    }
}
 
export default slotbtn;