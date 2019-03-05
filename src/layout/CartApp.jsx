import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Cart from '../pages/Cart/Cart';


class CartApp extends Component {
    render () {
        return (
            <div className = "box">
                <Switch>
                    <Route path={"/cart"} component = {Cart}/>
                </Switch>
            </div>
        )
    }
}

export default CartApp;