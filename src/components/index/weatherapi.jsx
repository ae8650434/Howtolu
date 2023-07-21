import React, { Component } from 'react';
import axios from 'axios';
import weastyle from '../../css/about.module.css'
class weather extends Component {
    state = {
        records: {
            locations: [{
                location: [{
                    locationName: null
                }]
            }]
        }
    }
    render() {
        const { records } = this.state;
        return (<div id="weath">
            <select id="selectWt" className={weastyle.weasel} onchange="cityChange()">
                {
                    this.state.records.locations[0].location.map((x) => {

                        return <option>{x.locationName}</option>
                    })
                }  </select>

            <div>
                <table id={weastyle["weatb"]}>
                    <tr id={weastyle["thd"]}>
                        <th></th>

                    </tr>
                    <tr id="tmort" className={weastyle.trwea}>
                        <td rowspan="2">早上</td>
{/* {this.state.records.locations[0].location[1].weatherElement[0].time[0]} */}
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
    componentDidMount = async () => {
        var result = await axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=rdec-key-123-45678-011121314');
        var newState = { ...this.state };
        newState = result.data;
        this.setState(newState);
        console.log(newState.records.locations[0].location)
    }
}

export default weather;