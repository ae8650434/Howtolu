import React, { Component } from 'react';
import About from './index/about.jsx'
import Productlink from './index/productlink.jsx'
import Activity from './index/activity.jsx'
import Weather from './index/weatherapi.jsx'
import Map from './index/map.jsx'
 
const home = () => {
    return (
       <>
       <img src="/image/camping_1.jpg" alt="" />
         <About/>
          <Productlink/>
          <Activity/>
          <Weather/>
          <Map/>
        </>
       
    );
}
 
export default home;