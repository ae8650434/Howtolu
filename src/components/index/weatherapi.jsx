import React, { Component } from 'react';
import axios from 'axios';
import weastyle from '../../css/about.module.css'
class weather extends Component {
    state = {records:{
        locations:[{
            location:[{
                locationName:"ahsdal"
            }]
        }]
    }  } 
    componentDidMount = async () => {
        var result = await axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=rdec-key-123-45678-011121314');
        var newState = { ...this.staten };
        newState = result.data;
        this.setState(newState);
        console.log(newState.records.locations[0].location   )
    }
    render() { 
        return (<div id="weath">
        <select id="selectWt" onchange="cityChange()">
        {
            this.state.records.locations[0].location.map((x)=>{

                <option>x.locationName</option>
            }
            )

        }

           
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
}
 
export default weather;