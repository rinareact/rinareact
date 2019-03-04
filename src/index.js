import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import App from '@/layout/App';
import './main.scss';

ReactDOM.render(
    <BrowserRouter>
        <Route path = '/' component = { App } />
    </BrowserRouter>,
    document.getElementById('root')
);