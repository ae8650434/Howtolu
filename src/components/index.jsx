import React, { Component } from 'react';
import Slot from './index/slotbtn.jsx'
import About from './index/about.jsx'
import Productlink from './index/productlink.jsx'
import Activity from './index/activity.jsx'
import Weather from './index/weatherapi.jsx'
import Map from './index/map.jsx'


const home = () => {
  return (
    <>

      <Slot />
      <About />
      <Productlink />
      <Activity />
      <Weather />
      <Map />

    </>

  );
}

export default home;