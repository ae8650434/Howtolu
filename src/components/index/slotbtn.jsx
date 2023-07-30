import React, { Component } from 'react';
import slotstyle from "../../css/slot.css"
import Slot from "./slot.jsx"

class slotbtn extends Component {
    state = {
        i: 0
    }
    render() {
        return (
            <>

                <div className='slotoutdiv ' >
                    <div className='slotborder'>
                        <div id='result0' className="slotdiv isplayleft">
                            <Slot className='slotimg1' />
                            <div id='result1' className="slotdiv isplaymid">
                                <Slot className='slotimg2' />
                                <div id='result2' className="slotdiv isplayright">
                                    <Slot className='slotimg3' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="slotbtn" onClick={this.slot}>GO</button>
                </div>

            </>
        )
    }
    slot = () => {

        console.log(this.state.i)
        var newState = { ...this.state }
        var num = newState.i

        if (document.getElementById(`result0`)) {
            document.getElementById(`result0`).classList.add(`isplay${num}`);
            document.getElementById(`result0`).style.transform =`translateY(${num * 100}%)`;

        }
        if (document.getElementById(`result1`)) {
            document.getElementById(`result1`).classList.add('isplay0');
            document.getElementById(`result1`).style.transform =`translateY(${0}%)`;
        }
        if (document.getElementById(`result2`)) {
            document.getElementById(`result2`).classList.add('isplay0');
            document.getElementById(`result2`).style.transform =`translateY(${0}%)`;


        }

        
        setTimeout(async ()=> {
            console.log("123",num)

               if (document.getElementById(`result0`)) {
             
              switch (num) {
                case 0:
                     document.getElementById(`result0`).classList.remove(`isplay2`);
                    break;
                case 1:
                     document.getElementById(`result0`).classList.remove(`isplay0`);
                    break;
                case 2:
                     document.getElementById(`result0`).classList.remove(`isplay1`);
                    break;
              
                default:
                    break;
              }
              switch (num) {
                case 0:
                    document.getElementById(`result0`).style.transform = `translateY(200%)`;
                    break;
                case 1:
                    document.getElementById(`result0`).style.transform = `translateY(0%)`;
                    break;
                case 2:
                    document.getElementById(`result0`).style.transform = `translateY(100%)`;
                    break;
              
                default:
                    break;
              }
            }
            if (document.getElementById(`result1`)) {
                document.getElementById(`result1`).classList.remove('isplay0');
                document.getElementById(`result1`).style.transform = `translateY(${0}%)`;
            }
            if (document.getElementById(`result2`)) {
                document.getElementById(`result2`).classList.remove('isplay0');
                document.getElementById(`result2`).style.transform = `translateY(${0}%)`;
            }


        }, 4100

        )
        num++
        if (num == 3) {
            num = 0
        }
        newState.i = num;
        this.state = newState
        this.setState(this.state)
        
    }

}

export default slotbtn;