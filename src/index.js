import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';


import App from './layout/App';
<<<<<<< HEAD
import CartApp from './layout/CartApp';
=======
import UserApp from './layout/UserApp';

>>>>>>> dev
import 'antd-mobile/dist/antd-mobile.css';
import './main.scss';


ReactDOM.render(
<<<<<<< HEAD
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/cart' component ={CartApp}/>
                <Route path='/' component ={App}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
=======
    <BrowserRouter>
        <Switch>
            <Route path='/userapp' component ={UserApp}/>
            <Route path='/' component ={App}/>
        </Switch>
    </BrowserRouter>,
>>>>>>> dev
    document.getElementById('root')
);