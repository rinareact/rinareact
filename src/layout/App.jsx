import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import Kind from '../pages/Kind';
import Cart from '../pages/Cart';
import User from '../pages/User';
import Login from '../pages/Login';
import Res from '../pages/Res';
import Nav from "../components/Nav/Nav";

class  App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div className="box">
                <Switch>
                    <Route path="/home" component = {Home}/>
                    <Route path="/kind" component = {Kind}/>
                    <Route path="/cart" component = {Cart}/>
                    <Route path="/user" component = {User}/>
                    <Route path="/login" component = {Login}/>
                    <Route path="/res" component = {Res}/>
                    <Redirect path="/" to="/home"/>
                </Switch>
                <Nav />
            </div>
            </BrowserRouter>
        )
    }
}
export default App

