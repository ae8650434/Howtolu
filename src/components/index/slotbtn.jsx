import React, { Component } from 'react';
import slotstyle from "../../css/slot.css"
import Slot from "./slot.jsx"

class slotbtn extends Component {
    state = {
     
    }
    render() {
        return (
            <>
            <div className='slotoutdiv' >
                <div id='result' className="slotdiv">
                        <Slot className='slotimg1' />                
                        <Slot className='slotimg2' />                    
                        <Slot className='slotimg3' />        
                </div>
                </div>
                <button onClick={this.slot}>測試用按鈕</button>
                <button onClick={this.slots}>測試用按鈕</button>
            </>
        )
    }
    slot = () => {
        if (document.getElementById(`result`)) {
            document.getElementById(`result`).classList.add('isplay');
            document.getElementById(`result`).style.transform = 'none';
            console.log(document.getElementById(`result`))

        }
    }
    slots = () => {
        if (document.getElementById(`result`)) {
            const num = Math.floor(Math.random() * 10);
            document.getElementById(`result`).classList.remove('isplay');
            document.getElementById(`result`).style.transform = `translateY(${ 100}%)`;
        }
    }
}

export default slotbtn;