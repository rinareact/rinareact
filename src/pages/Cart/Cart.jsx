import React, { Component } from 'react'
import "./Cart.scss"
import Cartpulgnone from "../../components/Cartpulg/Cartpulgnone";

class Com extends Component{
    render() {
        return(
            <div className={"content"}>
                <div className={"cart-top"}>
                    <span className={"iconfont icon-back cart-top-l"}></span>
                    <span className={"cart-top-c"}>购物车</span>
                    <span className={"cart-top-r"}>删除</span>
                </div>
                <Cartpulgnone />
            </div>

        )
    }
}
export default Com