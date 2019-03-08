import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Login from "../pages/Login";
import Res from "../pages/Res";


class UserApp extends Component {
    render () {
        return (
            <div className = "box">
                <Switch>
                    <Route path={"/userapp/login"} component={Login} />
                    <Route path={"/userapp/res"} component={Res} />
                </Switch>
            </div>
        )
    }
}

export default UserApp;