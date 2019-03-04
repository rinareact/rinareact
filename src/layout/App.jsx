import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter, Switch} from 'react-router-dom';
import Home from '@/pages/home/Home.jsx';
import Kind from '../pages/Kind';
import Cart from '../pages/Cart';
import User from '../pages/User';
import Nav from "../components/Nav/Nav.jsx";

class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div className="box">
                <Switch>
                    <Route path="/home" component = {Home}/>
                    <Route path="/kind" component = {Kind}/>
                    <Route path="/cart" component = {Cart}/>
                    <Route path="/user" component = {User}/>
                    <Redirect path="/" to="/home"/>
                </Switch>
                <Nav className='nav' />
            </div>
            </BrowserRouter>
        )
    }
}
export default App
