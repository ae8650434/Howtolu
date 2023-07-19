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
                    <img src={`/image/${x}`} alt=""  className={slotstyle.slotimg}/> 
                    <img src={`/image/${x}`} alt=""  className={slotstyle.slotimg}/> 
                    <img src={`/image/${x}`} alt=""  className={slotstyle.slotimg}/> 
                    </>
                    );      
                }))
        }
      
    }
}
 
export default slot;