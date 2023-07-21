import React, { Component } from 'react';
import cartstyle from '../css/cart.module.css';

class Cartproduct extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div id={cartstyle['shopping']}>
                    <div id={cartstyle['null']}>{this.renderProducts()}
<<<<<<< HEAD
                        <div>
=======
                        <div >
>>>>>>> c173aec0ff0725811ffba198969e0de1bfb7f2f9
                            <img id={cartstyle['imgw']} src="./image/product_19.png" alt="" />
                            <div id={cartstyle['shopping3']}>
                                <span style={{ fontSize: 40 }}><b></b></span>
                                <br /><br /><br /><br />
                                <span><b id={cartstyle['dateSize']}>可租借天數: 共日</b></span>
                                <p></p>
                                <div id={cartstyle['disFlex']}>
<<<<<<< HEAD
                                    <b id={cartstyle['moneySize']}>金額:{}</b>
=======
                                    <b id={cartstyle['moneySize']}>金額:100</b>
>>>>>>> c173aec0ff0725811ffba198969e0de1bfb7f2f9
                                    <input
                                        id={cartstyle['numberstyle']}
                                        type="number"
                                        min={1}
<<<<<<< HEAD
                                        value={1}
=======
                                        value="10"
                                        // onChange={(e) => this.updateQuantity(product.id, e.target.value)}
>>>>>>> c173aec0ff0725811ffba198969e0de1bfb7f2f9
                                         />
                                    <button id={cartstyle['butRubbish']}  >
                                        <img id={cartstyle['imgRubbish']} src="/image/Rubbish.png" alt="" />
                                    </button>
                                </div><br /><br />
                            </div>
                        </div>
                    </div>
                </div><br />
            </React.Fragment>
        );
    }
}
export default Cartproduct;