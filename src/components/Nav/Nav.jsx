import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Nav.scss"

const Nav = props =>(
    <div className={"nav"}>
        <ul>
            <NavLink to = "/home">首页</NavLink>
            <NavLink to = "/kind">分类</NavLink>
            <NavLink to = "/cart">购物车</NavLink>
            <NavLink to = "/user">我的</NavLink>
        </ul>
    </div>
);
export default Nav;