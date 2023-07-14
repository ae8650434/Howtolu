import React, { Component } from 'react';
import About from './index/about.jsx'
import Productlink from './index/productlink.jsx'
 
const home = () => {
    return (
       <>
       <img src="/image/camping_1.jpg" alt="" />
          <About/>
          <Productlink/>
        </>
       
    );
}
 
export default home;