import React, { Component } from 'react';
import { Route, Redirect, HashRouter as Router, Switch} from 'react-router-dom';
import Home from '@/pages/Home/Home.jsx';
import Kind from '../pages/Kind';
import Cart from '../pages/Cart';
import User from '../pages/User';
import Nav from "../components/Nav/Nav.jsx";

class App extends Component{
    render(){
        return(
            <Router>
            <div className="box">
                <Switch>
                    <Route path="/home" component = {Home}/>
                    <Route path="/kind" component = {Kind}/>
                    <Route path="/cart" component = {Cart}/>
                    <Route path="/user" component = {User}/>
                </Switch>
                <Redirect  path="/" to="/home" />
                <Nav className='nav' />
            </div>
            </Router>
        )
    }
}
export default App

