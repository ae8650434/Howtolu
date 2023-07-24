import React, { Component,useState, useEffect } from 'react';
import axios from 'axios';
import weastyle from '../../css/about.module.css'


function Weather() {
   
    const [posts, setPosts] = React.useState([]);
  

  
    React.useEffect(() => {
        fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=rdec-key-123-45678-011121314')
           .then((response) => response.json())
           .then((data) => {
              console.log("這是",data.records.locations[0].location);
             
              
              setPosts(data);
              console.log("這是",posts);
              
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
    //}, [count])

    return (<div id="weath">
    <select id="selectWt" className={weastyle.weasel} onchange="cityChange()">
        
        
          </select>

    <div>
        <table id={weastyle["weatb"]}>
            <tr id={weastyle["thd"]}>
                <th></th>

            </tr>
            <tr id="tmort" className={weastyle.trwea}>
                <td rowspan="2">早上</td>

            </tr>
            <tr id="tmorr">


            </tr>
            <tr id="taft">
                <td rowspan="2">下午</td>

            </tr>
            <tr id="tafr">


            </tr>
        </table>
    </div>
</div>);
  }

export default Weather;