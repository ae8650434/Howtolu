import React, { Component } from 'react';
import slotstyle from "../../css/slot.module.css"
class slot extends Component {
    state = { 
        slotimg:["camping_1.jpg","camping_2.jpg","camping_3.jpg"]
     } 
    render() { 
        {       
         return  ( this.state.slotimg.map((x)=>{ 
                return (
                    <>   
                    <img id="result" src={`/image/${x}`} alt=""  className={`${slotstyle.slotimg} ${slotstyle.slotimg1}`}/> 
                    <img src={`/image/${x}`} alt=""  className={`${slotstyle.slotimg} ${slotstyle.slotimg2}`}/> 
                    <img src={`/image/${x}`} alt=""  className={`${slotstyle.slotimg} ${slotstyle.slotimg3}`}/> 
                    </>
                    );      
                }))
        }
      
    }
}
 
export default slot;