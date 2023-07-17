import React, { Component } from 'react';
import aboutstyle from '../../css/about.module.css'

class about extends Component {
    state = {  } 
    render() { 
        return (  <>
            <div id={aboutstyle["about"]}>
            <p class={aboutstyle.title}>關於我們</p>
            <p class={aboutstyle.abouttext}>簡單、輕鬆、美好體驗</p>
            <br/>
            <p class={aboutstyle.abouttext}> 遠離都市塵囂與紛擾，擁抱大自然，沉澱心靈，使身心放鬆，創造美好時光
                走入自然，沈浸在盎然山林，讓雋永時刻停留記憶裡</p>
            <br/>
            <p class={aboutstyle.abouttext}> 堅持，選用頂級露營配備。用心，將露營界精品Snow Peak帶給您
                保證，每樣商品皆為我們精心挑選，提供您最美好的露營體驗</p>
        </div>
        
        </>
        );
    }
}
 
export default about;