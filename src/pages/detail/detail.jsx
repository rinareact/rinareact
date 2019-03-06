import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import api from '@/api/detail/index'
import './detail.scss'

class Detail extends Component {
  constructor (props) {
    super(props);
    this.state = {
        data: ['1', '2', '3', '4', '5'],
        imgHeight: 300,
        number: 1,
        cartnumber: 0
    }
  }

  componentDidMount() {
      const postID = this.props.match.params.id
      console.log(postID)
      api.requestDetail(postID).then(data => {
        console.log(data)
      })

    // simulate img loading
      setTimeout(() => {
          this.setState({
          data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI', 'IJOtIlfsYdTyaDTRVrLI', 'IJOtIlfsYdTyaDTRVrLI'],
          });
      }, 100);
  }

  render () {
    return (
      <div className='detailpage'>
        <header className="header">
          <span className='iconfont icon2fanhui' onClick = { () => { this.props.history.go(-1) } }></span>
          <i className='title'>商品详情</i>
        </header>
        <div className="bannerone">
          <WingBlank>
            <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
            >
            {this.state.data.map(val => (
                <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: '300' });
                    }}
                />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        </div>
        <main className="matter">
          <div className="goodsname">
            艾吉贝2015新款多层收纳真皮单肩斜挎包女包头层牛皮斜跨小包包女
          </div>
          <div className="goodsprice">
            <span>商城价格：</span>
            <i>￥179.00</i>
          </div>
          <div className="goodscolor">
            <span>颜色：</span>
            <b>黑色</b>
            <b>红色</b>
            <b>黄色</b>
          </div>
          <div className="goodsnumber">
            <span>数量：</span>
            <b>-</b>
            <i>{ this.state.number }</i>
            <b>+</b>
          </div>
        </main>
        <div className='detail'>
          <div className="navlist">
            <span>图文详情</span>
            <span>规格参数</span>
            <span>评价</span>
          </div>
          <div className="navpage">
            <div className="picture">
              <img src="/images/t14.jpg" alt=""/>
            </div>
            <div className="params"></div>
            <div className="comment"></div>
          </div>
        </div>
        <footer className="footer">
          <div className="hide">
            <span className='iconfont iconshoucang'></span>
            收藏
          </div>
          <div className="cart">
            <i>{ this.state.cartnumber }</i>
            <span className='iconfont icongou_wu_che2'></span>
            购物车
          </div>
          <div className="addCart">
            加入购物车
          </div>
          <div className="buy">
            立即购买
          </div>
        </footer>
      </div>
    )
  }
}

export default Detail
