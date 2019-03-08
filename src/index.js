import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './layout/App';
import UserApp from './layout/UserApp';

import 'antd-mobile/dist/antd-mobile.css';
import './main.scss';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/userapp' component ={UserApp}/>
            <Route path='/' component ={App}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);