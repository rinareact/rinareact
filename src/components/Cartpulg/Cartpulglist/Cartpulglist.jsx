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
            currenIndex:null,
            arr:[],
            num:1,
            // bulala:null,
        };
    };
    CheckChange(index){
        this.setState({
            currenIndex:index
        });
        // console.log(index)
        // if(this.state.arr.length===0){
        //     console.log('ok?');
        //     this.state.arr = [index]
        // } else {
        //     this.state.arr.map((item, index) =>  {
        //         if(item===index){
        //             this.state.arr.splice(item, 1)
        //         } else {
        //             this.state.arr.push(item)
        //         }
        //     })
        // }
        // console.log(this.state.arr);
        // console.log(index)

    };
    componentDidMount() {
        this.setState({
            cartdata : JSON.parse(localStorage.getItem("cartData"))
        });
        console.log(this.state.cartdata)
        this.props.onRef(this);
    };
    changeChild(){
        console.log(this.state.cartdata);
        this.state.cartdata.splice(this.state.currenIndex,1);
        console.log(this.state.cartdata);
        localStorage.setItem('cartData', JSON.stringify(this.state.cartdata));
        this.setState({
            cartdata : JSON.parse(localStorage.getItem("cartData"))
        });
    };
    changeNum(type, obj, e){
        if (type===-1) {
            obj.salenum -= 1;
            if (obj.salenum<1) {
                obj.salenum = 1
            }
        } else {
            obj.salenum += 1
        }
        let newArr = JSON.parse(localStorage.getItem('cartData'));
        newArr.map((item, index) => {
            if(item.postID===obj.postID) {
                item.salenum = obj.salenum
            }
        });
        this.setState({
            cartdata : newArr
        });
    }

    render() {
        let arr = [];
        this.state.cartdata.map((item, index) =>{
            arr.push(
                <div className={"cart-content-list"} key={index}>
                    <Flex>
                        <Flex.Item>
                            <AgreeItem data-seed="logId" onChange={this.CheckChange.bind(this,index)} />
                        </Flex.Item>
                    </Flex>
                    <div className={"cart-content-list-card"} >
                        <img src={ item.mainPic } alt=""/>
                        <h4>{ item.goodsName }</h4>
                        <h5>￥{ item.marketPrice }</h5>
                    </div>
                    <div className={'cart-content-list-num'}>
                        <div className={'cart-content-list-num-l'}>
                            <p>小计：<span>{item.marketPrice*item.salenum}</span></p>
                        </div>
                        <h6 onClick={this.changeNum.bind(this, -1, item)}><span>-</span></h6>
                        <h5><span id='goodsNum'>{item.salenum}</span></h5>
                        <h6 onClick={this.changeNum.bind(this,+1, item)}><span>+</span></h6>
                    </div>
                </div>
            )
        });
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
            </div>
        )
    }
}

export default Cartpulglist