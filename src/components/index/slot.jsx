import React, { Component } from 'react';
import slotstyle from "../../css/slot.css"
class slot extends Component {
    state = { 
        slotimg:["camping_1.jpg","camping_2.jpg","camping_3.jpg","camping_1.jpg","camping_2.jpg","camping_3.jpg","camping_1.jpg","camping_2.jpg","camping_3.jpg","camping_1.jpg"]
     } 
    render() { 
        {     
            return  <> 
           
                          {           
                    this.state.slotimg.map((x,index)=>(
                    <img  src={`/image/${x}`} className={`slotimg slotimgpos${index}   ${this.props.className}` }/> 
                    ))   
                    }
               
                    </>
                          
               
        }
      
    }
}
 
export default slot;