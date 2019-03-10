import React, {Component} from 'react'
import "./Cart.scss"
import Cartpulgnone from "../../components/Cartpulg/Cartpulgnone/Cartpulgnone";
import Cartpulglist from "../../components/Cartpulg/Cartpulglist/Cartpulglist";
import Head from "../../components/common/Head/Head"

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: ['a']
        }
    };
    onClickRight(){}

    render() {
        return (
            <div className={"content"}>
                <div className={"cart-top"}>
                    <span className={"iconfont icon-back cart-top-l"} onClick={() => {
                        this.props.history.go(-1)
                    }}/>
                    <span className={"cart-top-c"}>购物车</span>
                    <span className={"cart-top-r"} onClick={"onClickRight"}>删除</span>
                </div>
                {/*<Head title='购物车'></Head>*/}
                {this.state.flag.length === 0 ? <Cartpulgnone/> : <Cartpulglist/>}
            </div>

        )
    }
}

export default Cart;