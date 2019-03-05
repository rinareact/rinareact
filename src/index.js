import React from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from '@/layout/App';
import DetailApp from '@/layout/DetailApp';
import './main.scss';
import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(
    <Router>
      <Switch>
        <Route path = '/detail' component = { DetailApp }></Route>
        <Route path = '/' component = { App } />
      </Switch>
    </Router>,
    document.getElementById('root')
);