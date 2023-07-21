<<<<<<< HEAD
// import React, { Component } from 'react';
// import cartstyle from '../css/cart.module.css';

// class Cartproduct extends Component {
//     state = {}
//     render() {
//         return (
//             <React.Fragment>
//                 <div id={cartstyle['shopping']}>
//                     <div id={cartstyle['null']}>{this.renderProducts()}
//                         <div key={product.id}>
//                             <img id={cartstyle['imgw']} src="./image/product_19.png" alt="" />
//                             <div id={cartstyle['shopping3']}>
//                                 <span style={{ fontSize: 40 }}><b></b></span>
//                                 <br /><br /><br /><br />
//                                 <span><b id={cartstyle['dateSize']}>可租借天數: 共日</b></span>
//                                 <p></p>
//                                 <div id={cartstyle['disFlex']}>
//                                     <b id={cartstyle['moneySize']}>金額:{product.price}</b>
//                                     <input
//                                         id={cartstyle['numberstyle']}
//                                         type="number"
//                                         min={1}
//                                         value={product.quantity}
//                                         onChange={(e) => this.updateQuantity(product.id, e.target.value)} />
//                                     <button id={cartstyle['butRubbish']}  >
//                                         <img id={cartstyle['imgRubbish']} src="/image/Rubbish.png" alt="" />
//                                     </button>
//                                 </div><br /><br />
//                             </div>
//                         </div>
//                     </div>
//                 </div><br />
//             </React.Fragment>
//         );
//     }
// }
// export default Cartproduct;
=======
import React, { Component } from 'react';
import cartstyle from '../css/cart.module.css';
import axios from 'axios';

class CartProduct extends Component {
    state = {
        cartProductList: []
    }
    render() {
        const { cartProductList } = this.state
        return (
            <React.Fragment>
                        {cartProductList.map((product) => (
                            <div key={product.cid}>
                                <img id={cartstyle['imgw']} src={`/image/${product.p_img}`} alt="" />
                                <div id={cartstyle['shopping3']}>
                                    <span style={{ fontSize: 40 }}><b>{product.pname}</b></span>
                                    <br /><br /><br /><br />
                                    <span><b id={cartstyle['dateSize']}>可租借天數:{product.use_date}~ 共{product.c_day}日</b></span>
                                    <p></p>
                                    <div id={cartstyle['disFlex']}>
                                        <b id={cartstyle['moneySize']}>金額:{product.price}</b>
                                        <input
                                            id={cartstyle['numberstyle']}
                                            type="number"
                                            min={1}
                                            value={product.quantity} />
                                        <button id={cartstyle['butRubbish']}>
                                            <img id={cartstyle['imgRubbish']} src="/image/Rubbish.png" alt="" />
                                        </button>
                                    </div><br /><br />
                                </div>
                            </div>
                        ))}                  
            </React.Fragment>
        );
    }
    componentDidMount = async () => {
        var result = await axios.get('http://localhost:8000/cart');
        var newState = { ...this.state };
        newState.cartProductList = result.data;
        this.setState(newState);
    }
}
export default CartProduct;
>>>>>>> refs/remotes/origin/main
