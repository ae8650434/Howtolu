import React, { Component } from 'react';
import mapstyle from '../../css/about.module.css'

class mapa extends Component {
    state = {  } 
    render() { 
        return (  <>
            <div id={mapstyle["divmap"]}>
    <iframe id={mapstyle["imap"]} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.53764966770115!2d120.65087595147934!3d24.15059769484931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d9650edec05%3A0x187d42c91fca1bb0!2zNDA45Y-w5Lit5biC5Y2X5bGv5Y2A5YWs55uK6Lev5LqM5q61NTHomZ8z5qiTQjLlrqQ!5e0!3m2!1szh-TW!2stw!4v1687919311351!5m2!1szh-TW!2stw"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
        </>
        );
    }
}
 
export default mapa;