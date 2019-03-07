import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import api from '@/api/detail/index'
import './Detail.scss'

class Detail extends Component {
  constructor (props) {
    super(props);
    this.state = {
        data: ['1', '2', '3', '4', '5'],
        imgHeight: 300,
        number: 1,
        cartnumber: 0,
        detailinfo: {},
        currentIndex: 0
    }
  }

  componentDidMount() {
      //请求物品详情
      const postID = this.props.match.params.id
      api.requestDetail(postID).then(data => {
        this.setState({
          detailinfo: data.data[0]
        })
        console.log(this.state.detailinfo)
      })
      //再次进入页面判断是否收藏
      let loveArr = JSON.parse(localStorage.getItem('loveData'))
      if(!loveArr) {
        return
      } else {
        loveArr.map((item) => {
          if(item.postID==postID) {
            document.getElementsByClassName('iconshoucang')[0].style.color = 'red'
          }
        })
      }
    // simulate img loading
      setTimeout(() => {
          this.setState({
          data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI', 'IJOtIlfsYdTyaDTRVrLI', 'IJOtIlfsYdTyaDTRVrLI'],
          });
      }, 100);
  }

  changeClass (e) {
    let col = Array.from(document.getElementsByClassName('colorsel'))
    col.map((item) => {
      item.className = 'colorsel'
    })
    e.target.className += ' active'
  }
  changeNum (type) {
    if (type === 1) {
      this.setState({
        number: this.state.number += 1
      })
    } else {
      this.state.number -= 1
      if (this.state.number < 1) this.state.number = 1
      this.setState({
        number: this.state.number
      })
    }
  }
  changePage (e) {
    let own = Array.from(document.getElementsByClassName('navlist')[0].children)
    own.map((item, index) => {
      item.className = ''
      item.index = index
    })
    e.target.className = 'bor'
    let page = Array.from(document.getElementsByClassName('navpage')[0].children)
    page.map((item, index) => {
      return  item.style.display = 'none'
    })
    page[e.target.index].style.display = 'block'
  }
  loveGoods (e) {
    if (e.target.style.color === 'red') {
      e.target.style.color = 'gray'
      let arr = JSON.parse(localStorage.getItem('loveData'))
      arr.map((item, index) => {
        if (item.postID === this.state.detailinfo.postID) {
          arr.splice(index, 1)
        }
      })
      if (arr.length === 0) {
        console.log('ok')
        localStorage.removeItem('loveData')
      } else {
        arr = JSON.stringify(arr)
        localStorage.setItem('loveData', arr)
      }
      arr = JSON.stringify(arr)
    } else {
      e.target.style.color = 'red'
      let data= []
      let arr = JSON.parse(localStorage.getItem('loveData'))
      if (arr===null) {
        data = [this.state.detailinfo]
      } else {
        data.push(this.state.detailinfo)
      }
      data = JSON.stringify(data)
      localStorage.setItem('loveData', data)
    }
  }
  // addCart () {
  //   let data = {
  //     name: this.state.
  //   }
  //   let cartData = []
  //   let cartArr = JSON.parse(localStorage.getItem('cartData'))
  //   if (cartArr===null) {
  //     cartData = []
  //   }
  // }

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
            { this.state.detailinfo.goodsName }
          </div>
          <div className="goodsprice">
            <span>商城价格：</span>
            <i>￥{ this.state.detailinfo.marketPrice }</i>
          </div>
          <div className="goodscolor">
            <span>颜色：</span>
            <b className='colorsel active' onClick={ this.changeClass.bind(this) }>黑色</b>
            <b className='colorsel' onClick={ this.changeClass.bind(this) }>红色</b>
            <b className='colorsel' onClick={ this.changeClass.bind(this) }>黄色</b>
          </div>
          <div className="goodsnumber">
            <span>数量：</span>
            <b onClick={ this.changeNum.bind(this, -1) }>-</b>
            <i>{ this.state.number }</i>
            <b onClick={ this.changeNum.bind(this, 1) }>+</b>
          </div>
        </main>
        <div className='detail'>
          <div className="navlist">
            <span className='bor' onClick={ this.changePage.bind(this) }>图文详情</span>
            <span onClick={ this.changePage.bind(this) }>规格参数</span>
            <span onClick={ this.changePage.bind(this) }>评价</span>
          </div>
          <div className="navpage">
            <div className="picture">
              <img src="/images/t14.jpg" alt=""/>
            </div>
            <div className="params">
              <img src={ this.state.detailinfo.mainPic } alt='' className="gpic"/>
              <div className="gname"><span>商品名称：</span>{ this.state.detailinfo.goodsName }</div>
              <div className="gsku"><span>商品型号：</span>{ this.state.detailinfo.sku }</div>
            </div>
            <div className="comment">
              <span>评价：</span>{ this.state.detailinfo.comment }
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="hide">
            <span className='iconfont iconshoucang' onClick={ this.loveGoods.bind(this) }></span>
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
