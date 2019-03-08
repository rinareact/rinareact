import React, {Component} from 'react'
import "./Cart.scss"
import Cartpulgnone from "../../components/Cartpulg/Cartpulgnone/Cartpulgnone";
import Cartpulglist from "../../components/Cartpulg/Cartpulglist/Cartpulglist";

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flag: ['a']
        }

    }

    render() {
        return (
            <div className={"content"}>
                <div className={"cart-top"}>
                    <span className={"iconfont icon-back cart-top-l"} onClick={() => {
                        this.props.history.go(-1)
                    }}></span>
                    <span className={"cart-top-c"}>购物车</span>
                    <span className={"cart-top-r"}>删除</span>
                </div>
                {this.state.flag.length === 0 ? <Cartpulgnone/> : <Cartpulglist/>}
            </div>

        )
    }
}

export default Cart;