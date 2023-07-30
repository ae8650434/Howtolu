import React, { Component } from 'react';
import axios from 'axios';
import weastyle from '../../css/about.module.css'




class Weather extends Component {
    state = {
        data: {
            records: {
                locations: [{
                    location: [
                        {
                            locationName: "",
                            weatherElement: [{},
                            {
                                time: [
                                    {
                                        elementValue: [{ value: null }]
                                    }
                                ]
                            },
                            {}, {}, {}, {},
                            {
                                time: [
                                    {
                                        elementValue: [{ value: null },{ value: null }]
                                    }
                                ]

                            }

                            ]

                        }

                    ]
                }
                ]
            }
        },
        date: [{ startTime: {} }],
        sel: 0,
        icon:[
            {day_clear:[1]},
            {day_cloudy_fog:[25, 26, 27, 28]},
            {day_cloudy:[2, 3, 4, 5, 6, 7]},
            {day_fog:[24]},
            {day_partially_clear_with_rain:[8, 9, 10, 11, 12,
                13, 14, 19, 20, 29, 30,
                31, 32, 38, 39]},
            {day_snowing:[23, 37, 42]},
            {day_thunderstorm:[15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41]}
        ]
    }


    render() {
        const cnt = 2;

        return (<div id={weastyle["weath"]}>
            <span>請選擇縣市：</span>
            <select id="selectWt" className={weastyle.weasel} onChange={this.cityChange}>

                {
                    this.state.data.records.locations[0].location.map((x, index) => {
                        // console.log("44343",x.weatherElement[6].time[0] )
                        return <option value={index} >{x.locationName}</option>
                    })}
            </select>

            <div>
                <table id={weastyle["weatb"]}>
                    <tr id={weastyle["thd"]}>
                        <th></th>
                        {
                            this.state.date.map((datetime, index) => {
                                if (index != 0 && index <= 7) {

                                    return <th>{datetime}</th>
                                }
                            })}


                    </tr>
                    <tr id={weastyle["tmort"]} className={weastyle.trwea}>
                        <td rowspan="2">早上</td>
                        {
                            this.state.data.records.locations[0].location[this.state.sel].weatherElement[1].time.map((datetime, index) => {
                               
                                if (this.state.data.records.locations[0].location[0].weatherElement[1].time.length > 14) {
                                    if (index % 2 == 1) {
                                        return <td>{datetime.elementValue[0].value}°C</td>
                                    }

                                } else {
                                    if (index % 2 == 0) {
                                        return <td>{datetime.elementValue[0].value}°C</td>
                                    }
                                }
                            })}

                    </tr>
                    <tr id="tmorr">
                        {
                            this.state.data.records.locations[0].location[this.state.sel].weatherElement[6].time.map((datetime, index) => {
                                var wicon=parseInt( datetime.elementValue[1].value)
                                if (this.state.data.records.locations[0].location[0].weatherElement[1].time.length > 14) {
                                    if (index % 2 == 1) {
                                        if(wicon==1){
                                            return <td>{<img src='image/day_clear.png' />}</td>
                                        }else if(wicon>=2 && wicon<=7){
                                            return <td>{<img src='image/day_cloudy.png' />}</td>
                                        }else if(wicon>=8 && wicon<=14 && wicon==19 && wicon==20 && wicon>=29 && wicon<=32 && wicon==38 &&wicon==39){
                                            return <td>{<img src='image/day_partially_clear_with_rain.png' />}</td>
                                        }else if(wicon==23 && wicon==37 && wicon==42){
                                            return <td>{<img src='image/day_snowing' />}</td>
                                        }else if(wicon>=25 && wicon<=28 ){
                                            return <td>{<img src='image/day_cloudy_fog.png' />}</td>
                                        }else{
                                            return <td>{<img src='image/day_thunderstorm.png' />}</td>
                                        }
                                        }

                                } else {
                                    if (index % 2 == 0) {
                                        if(wicon==1){
                                            return <td>{<img src='image/day_clear.png' />}</td>
                                        }else if(wicon>=2 && wicon<=7){
                                            return <td>{<img src='image/day_cloudy.png' />}</td>
                                        }else if(wicon>=8 && wicon<=14 && wicon==19 && wicon==20 && wicon>=29 && wicon<=32 && wicon==38 &&wicon==39){
                                            return <td>{<img src='image/day_partially_clear_with_rain.png' />}</td>
                                        }else if(wicon==23 && wicon==37 && wicon==42){
                                            return <td>{<img src='image/day_snowing' />}</td>
                                        }else if(wicon>=25 && wicon<=28 ){
                                            return <td>{<img src='image/day_cloudy_fog.png' />}</td>
                                        }else{
                                            return <td>{<img src='image/day_thunderstorm.png' />}</td>
                                        }
                                    }
                                }
                            })}

                    </tr>
                    <tr id="taft">
                        <td rowspan="2">下午</td>
                        {
                            this.state.data.records.locations[0].location[this.state.sel].weatherElement[1].time.map((datetime, index) => {

                                if (this.state.data.records.locations[0].location[0].weatherElement[1].time.length > 14) {
                                    if (index != 0 && index % 2 == 0) {
                                        return <td>{datetime.elementValue[0].value}°C</td>
                                    }

                                } else {
                                    if (index != 0 && index % 2 == 1) {
                                        return <td>{datetime.elementValue[0].value}°C</td>
                                    }
                                }
                            })}

                    </tr>
                    <tr id="tafr">
                        {
                            this.state.data.records.locations[0].location[this.state.sel].weatherElement[6].time.map((datetime, index) => {
                                var wicon=parseInt( datetime.elementValue[1].value)
                                console.log(parseInt( datetime.elementValue[1].value))
                                if (this.state.data.records.locations[0].location[0].weatherElement[1].time.length > 14) {
                                    if (index != 0 && index % 2 == 0) {
                                        if(wicon==1){
                                            return <td>{<img src='image/night_clear.png' />}</td>
                                        }else if(wicon>=2 && wicon<=7){
                                            return <td>{<img src='image/night_cloudy.png' />}</td>
                                        }else if(wicon>=8 && wicon<=14 && wicon==19 && wicon==20 && wicon>=29 && wicon<=32 && wicon==38 &&wicon==39){
                                            return <td>{<img src='image/night_partially_clear_with_rain.png' />}</td>
                                        }else if(wicon==23 && wicon==37 && wicon==42){
                                            return <td>{<img src='image/night_snowing' />}</td>
                                        }else if(wicon>=25 && wicon<=28 ){
                                            return <td>{<img src='image/night_cloudy_fog.png' />}</td>
                                        }else{
                                            return <td>{<img src='image/night_thunderstorm.png' />}</td>
                                        }
                                    }

                                } else {
                                    if (index != 0 && index % 2 == 1) {
                                       
                                        if(wicon==1){
                                            return <td>{<img src='image/night_clear.png' />}</td>
                                        }else if(wicon>=2 && wicon<=7){
                                            return <td>{<img src='image/night_cloudy.png' />}</td>
                                        }else if(wicon>=8 && wicon<=14 && wicon==19 && wicon==20 && wicon>=29 && wicon<=32 && wicon==38 &&wicon==39){
                                            return <td>{<img src='image/night_partially_clear_with_rain.png' />}</td>
                                        }else if(wicon==23 && wicon==37 && wicon==42){
                                            return <td>{<img src='image/night_snowing' />}</td>
                                        }else if(wicon>=25 && wicon<=28 ){
                                            return <td>{<img src='image/night_cloudy_fog.png' />}</td>
                                        }else{
                                            return <td>{<img src='image/night_thunderstorm.png' />}</td>
                                        }
                                    }
                                }
                            })}

                    </tr>
                </table>
            </div>
        </div>);
    }
    componentDidMount = async () => {
        var result = await axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=rdec-key-123-45678-011121314');
        var newState = { ...this.state };
        newState.data = result.data;


        var arr = result.data.records.locations[0].location[0].weatherElement[0].time

        if (arr.length % 2 != 0) {
            for (var i = 1; i <= 13; i += 2) {
                var a = arr[i].startTime.substr(5, 2) + "/" + arr[i].startTime.substr(8, 2)
                newState.date.push(a)

            }

        } else {
            for (var i = 0; i <= 12; i += 2) {
                var a = arr[i].startTime.substr(5, 2) + "/" + arr[i].startTime.substr(8, 2)
                newState.date.push(a)

                // console.log("dadsas",newState.date)
                // console.log("dadsas",i)
            }

        }

        // console.log("dadsas",newState.date)
        // console.log("das",newState.date)
        this.state = newState;
        this.setState(this.state);
        console.log(this.state)
    }
    cityChange = () => {
        var city = document.getElementById("selectWt").selectedIndex

        //   console.log(this.state)
        this.setState({ sel: city })
    }
}

export default Weather;