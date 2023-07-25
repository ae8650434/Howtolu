import React, { Component,useState, useEffect } from 'react';
import axios from 'axios';
import weastyle from '../../css/about.module.css'



class  Weather extends Component {
    state = {
        data:{
            records:{
                locations:[{
                    location:[
                        {locationName:"",
                        
                        weatherElement:[{},
                            {time:[
                                {elementValue:[{value:null}]
                                }
                            ]},
                            {},{},{},{},
                            {time:[
                                {elementValue:[{value:null}]
                                }
                            ]

                            }

                        ]
                        
                    }

                    ]}
                ]
            }
        }

      } 
    render() { 
        
        return (<div id="weath">
        <select id="selectWt" className={weastyle.weasel} onchange="cityChange()">
            
            {  
            this.state.data.records.locations[0].location.map((x,index)=>{
                console.log("44343",x.weatherElement[6].time[0] )
             return   <option value={index}>{x.locationName}</option>
            })}
              </select>
              
        <div>
            <table id={weastyle["weatb"]}>
                <tr id={weastyle["thd"]}>
                    <th>
                    {  
            this.state.data.records.locations[0].location[0].weatherElement[1].time.map((x,index)=>{
                // console.log("44343",x.weatherElement[6].time[0].elementValue[0].value )
                console.log("44343",x )
          var a = x.startTime
            
                return   <th>{a }</th>
            })}
                    </th>
    
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
    componentDidMount=async ()=>{
        var result = await axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=rdec-key-123-45678-011121314');
        var newState = { ...this.state };
        newState = result;
        
        this.state=newState;
        this.setState(this.state);
        console.log(this.state.data.records.locations[0].location
            )
    }
}
 
export default Weather;