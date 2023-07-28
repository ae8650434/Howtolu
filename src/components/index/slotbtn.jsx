import React, { Component } from 'react';
import slotstyle from "../../css/slot.css"
import Slot from "./slot.jsx"

class slotbtn extends Component {
    state = {
     i:0
    }
    render() {
        return (
            <>
            <div className='slotoutdiv' >
                <div id='result0' className="slotdiv">
                        <Slot className='slotimg1' /> 
                          
                <div id='result1' className="slotdiv">             
                        <Slot className='slotimg2' /> 
                     
                     <div id='result2' className="slotdiv">                       
                        <Slot className='slotimg3' />    
                        </div> 
                           </div>   
                </div>
                </div>
                <button onClick={this.slot}>測試用按鈕</button>
                <button onClick={this.slots}>測試用按鈕</button>
            </>
        )
    }
    slot = () => {
        if (document.getElementById(`result0`)) {
            document.getElementById(`result0`).classList.add('isplay0');
            document.getElementById(`result0`).style.transform = 'none';

            }
        if (document.getElementById(`result1`)) {
            document.getElementById(`result1`).classList.add('isplay1');
            document.getElementById(`result1`).style.transform = 'none';
            }
        if (document.getElementById(`result2`)) {
            document.getElementById(`result2`).classList.add('isplay2');
            document.getElementById(`result2`).style.transform = 'none';
          

        }
        console.log(this.state.i)
        var newState={...this.state}
        var num=newState.i
        

        setTimeout(function(){
       

           if (document.getElementById(`result0`)) {
               document.getElementById(`result0`).classList.remove('isplay0');
               document.getElementById(`result0`).style.transform = `translateY(${num*100}%)`;
            }
            if (document.getElementById(`result1`)) {  
                document.getElementById(`result1`).classList.remove('isplay1');
                document.getElementById(`result1`).style.transform = `translateY(${0}%)`;
            }
            if (document.getElementById(`result2`)) {
                document.getElementById(`result2`).classList.remove('isplay2');
                document.getElementById(`result2`).style.transform = `translateY(${0}%)`;
            }
        

    } ,4100

        )
         num++
         if(num==3){
            num=0
         }
         newState.i=num;
         this.state=newState
         this.setState(this.state)
    }
   
}

export default slotbtn;