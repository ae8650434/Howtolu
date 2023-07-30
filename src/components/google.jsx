import React, { Component } from "react";
import cartstyle from '../css/cart.module.css';

const readGoogleSheet = () => {
    return fetch('https://sheetdb.io/api/v1/5rctxpm3syzj9')
        .then((response) => response.json())
        .then((googleSheet) => googleSheet);
}

class Google extends Component {
    state = {
        googleSheet: []
    };

    componentDidMount() {
        readGoogleSheet()
            .then((googleSheet) => {
                this.setState({ googleSheet });
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    render() {
        const { googleSheet } = this.state;
        return (
            <React.Fragment>

                <div id={cartstyle['shopping']}>
                    <div id={cartstyle['null']}>

                        {/* {googleSheet.map((google) => (
                            <div key={google.id}>

                                <img id={cartstyle["imgw"]} src={`/image/${google}`} alt="" />
                                {console.log(`/image${google}`)}
                                <div id={cartstyle['shopping3']}>
                                    <span style={{ fontSize: 40 }}>{google}</span>
                                    <br /><br /><br /><br />
                                    {rentStartDate && rentEndDate && (
                                        <div>
                                            <span><p id={cartstyle["dateSize"]}>可租借天數:{rentStartDate} ～ {rentEndDate} 共3日</p></span>
                                        </div>
                                    )}
                                    <p></p>
                                    <div id={cartstyle['disFlex']}>
                                        <p id={cartstyle["moneySize"]}>金額:{google['']}</p>
                                        <input id={cartstyle["numberstyle"]} type="number" min={1} value={google['']} />
                                        <button id={cartstyle["butRubbish"]} onClick='del'>
                                            <img id={cartstyle["imgRubbish"]} src="/image/Rubbish.png" alt="" />
                                        </button>
                                    </div> <br /><br />
                                </div>

                            </div>
                        ))} */}

                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Google;
