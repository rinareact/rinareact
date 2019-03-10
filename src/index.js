import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';


import App from './layout/App';

import UserApp from './layout/UserApp';
import DetailApp from './layout/DetailApp'
import 'antd-mobile/dist/antd-mobile.css';
import './main.scss';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/detail' component ={DetailApp}/>
                <Route path='/userapp' component ={UserApp}/>
                <Route path='/' component ={App}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);