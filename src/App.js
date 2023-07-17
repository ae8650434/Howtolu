import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/nav';
import Home from './components/index';
import Error from './components/error';
import Product from './components/product';
import Product2 from './components/product2';
import Login from './components/login';
import Register from './components/register';
import Revise from './components/revise';
import Reset from './components/reset';
import Info from './components/info';
import EquipDetail from './components/equip_detail';
import FoodDetail from './components/food_detail';
import Cart from './components/cart';
import Order_list from './components/order_list';
import Footer from './components/footer';
import ProductCopy from './components/product copy';
import cookie from 'react-cookies'

cookie.save(
    {
      path: '/',// cookie的使用路径，如果设置为“/”，则本域名下contextPath都可以访问该Cookie
      maxAge: 60 * 1000,// 从客户端收到 cookie 开始的相对过期时间
      secure: true,// 如果设置true，它将只能通过 https 访问
      httpOnly: true,// 如果设置true，它将只能在服务器上访问
    }
  )


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
          <Route path="/" component={Home} exact />
            <Route path="/product/:Classification" component={Product} exact /> 
            <Route path="/product2/:foodClass" component={Product2} exact /> 
            <Route path="/product3" component={ProductCopy} exact /> 
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/revise" component={Revise} exact />
            <Route path="/reset" component={Reset} exact />
            <Route path="/info" component={Info} exact />
            <Route path="/order_list" component={Order_list} exact />
            <Route path="/equip_detail/:pid" component={EquipDetail} exact />
            <Route path="/food_detail/:fid" component={FoodDetail} exact />
            <Route path="/cart" component={Cart} exact />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>


      </BrowserRouter>
    );
  }
}

export default App;