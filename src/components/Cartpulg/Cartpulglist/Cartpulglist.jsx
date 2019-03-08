import React, { Component } from 'react'
import "./Cartpulglist.scss"
import { List, Checkbox, Flex, Stepper, Button, WhiteSpace, WingBlank} from 'antd-mobile';

const AgreeItem = Checkbox.AgreeItem;

class Cartpulglist extends Component{
    constructor(props) {
        super(props);
        this.state = {
            val: 1,
        };
    };
    onChange1 = (val) => {
        this.setState({ val });
        // console.log(val)
    };

    render() {
        return(
            <div className={"content-cart"}>
                <div className={"cart-content-list"} >
                    <Flex>
                        <Flex.Item>
                            <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)} />
                        </Flex.Item>
                    </Flex>
                    <div className={"cart-content-list-card"}>
                        <img src="/images/qiaoba_02.jpg" alt=""/>
                        <h4>不喜欢这个UI库</h4>
                        <h5>我喜欢索隆</h5>
                        <h6>还想养乔巴</h6>
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
                                onChange={this.onChange1}
                            />
                        }
                    >
                        <h6>小计：<span>￥998</span></h6>
                    </List.Item>
                </div>
                <div className={"cart-content-list-foot"}>
                    <Button type="warning" className={"cart-content-list-footbutton"}>提交订单</Button>
                    <div className={"cart-content-list-foottotal"}>
                        <h5>合计：<span>￥0.00</span></h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cartpulglist