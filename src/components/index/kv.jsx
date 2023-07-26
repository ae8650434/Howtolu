import React, { Component } from 'react';
import kvstyle from "../../css/slideshow.module.css"
class kv extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div class={kvstyle.outdiv}>

       
        <div class={`${kvstyle.mySlides} + " "+ ${kvstyle.fade}`}>
            <div class={kvstyle.numbertext}>1 / 3</div>
            <img src="/image/camping_1.jpg" class={kvstyle.kvimg} />
            <div class={kvstyle.text}>Caption Text</div>
        </div>

        <div class={`${kvstyle.mySlides} + " "+ ${kvstyle.fade}`}>
            <div class={kvstyle.numbertext}>2 / 3</div>
            <img src="/image/camping_2.jpg" class={kvstyle.kvimg}/>
            <div class={kvstyle.text}>Caption Two</div>
        </div>

        <div class={`${kvstyle.mySlides} + " "+ ${kvstyle.fade}`}>
            <div class={kvstyle.numbertext}>3 / 3</div>
            <img src="/image/camping_3.jpg" class={kvstyle.kvimg}/>
            <div class={kvstyle.text}>Caption Three</div>
        </div>


       
    </div>
    <br/>

    </>
        );
    }
}
 
export default kv;