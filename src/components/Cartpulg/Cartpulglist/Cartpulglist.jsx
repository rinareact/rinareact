import React, { Component } from 'react'
import "./Cartpulglist.scss"
import { List, Checkbox, Flex, Stepper, Button, WhiteSpace, WingBlank} from 'antd-mobile';

const AgreeItem = Checkbox.AgreeItem;

class Cartpulglist extends Component{
    constructor(props) {
        super(props);
        this.state = {
            val: 1,
            cartdata:[],
        };
    };
    onChange1 = (val) => {
        this.setState({ val });
        // console.log(val)
    };

    componentDidMount() {
        this.setState({
            cartdata : JSON.parse(localStorage.getItem("cartData"))
        })
    }

    render() {
        let arr = [];
        this.state.cartdata.map((item, index) =>{
            arr.push(
                <div className={"cart-content-list"} key={index}>
                    <Flex>
                        <Flex.Item>
                            <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)} />
                        </Flex.Item>
                    </Flex>
                    <div className={"cart-content-list-card"} >
                        <img src={ item.mainPic } alt=""/>
                        <h4>{ item.goodsName }</h4>
                        <h5>￥{ item.marketPrice }</h5>
                    </div>
                    <List.Item
                        wrap
                        extra={
                            <Stepper
                                style={{ width: '100%', minWidth: '100px' }}
                                showNumber
                                max={10}
                                min={1}
                                value={this.state.val}
                                onChange={this.onChange1.bind(this)}
                            />
                        }
                    >
                        <h6>小计：<span>{item.marketPrice*this.state.val}</span></h6>
                    </List.Item>
                </div>
            )
        })
        return(
            <div className={"contentb"}>
                <div className={"content"}>
                    { arr }
                    <div className={"cart-content-list-foot"}>
                        <Button type="warning" className={"cart-content-list-footbutton"}>提交订单</Button>
                        <div className={"cart-content-list-foottotal"}>
                            <h5>合计：<span>￥0.00</span></h5>
                        </div>
                    </div>
                </div>
                {/*<div className={"cart-content-list-foot"}>*/}
                    {/*<Button type="warning" className={"cart-content-list-footbutton"}>提交订单</Button>*/}
                    {/*<div className={"cart-content-list-foottotal"}>*/}
                        {/*<h5>合计：<span>￥0.00</span></h5>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Cartpulglist