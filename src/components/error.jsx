import React from 'react';
import errstyle from "../css/error.module.css"
 
const Error = () => {
    return (
       <div>
          <p style={{fontSize:"50px" ,margin:"60px"}} className={errstyle.bounce}>沒有這頁啦 操 硬要點是不是</p>
       </div>
    );
}
 
export default Error;