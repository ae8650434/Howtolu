import React, { Component } from 'react';


class cart extends Component {
    state = {
        styleO: {
            color: 'orange'
        },
        styleG: {
            color: 'grey'
        }
    }
    render() {
        return (
            <>
                <div style={{ fontSize: 40 }}>
                    上傳檔案(excel)：<input style={{ fontSize: 20}} type="file" />
                    <input style={{ fontSize: 25}} type="submit" value="上傳" />
                </div>
                <div id="process">
                    <span style={this.styleO} id="process1"><b><ins>1.購物車確認</ins></b></span> <b>&gt;</b>
                    <span style={this.styleG} id="process2"><b><ins>2.確認訂單資訊</ins></b></span> <b>&gt;</b>
                    <span style={this.styleG} id="process3"><b><ins>3.訂單完成</ins></b></span>
                </div>
                <div id='shopping'>
                    <div id='null'>
                        <div id='text1'>
                            <img src="" alt="" />
                            <div id='shopping3'>
                                <span style={{fontSize: 40}}><b>Snow Peak 卡式瓦斯爐</b></span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </>


        );
    }
}

export default cart;