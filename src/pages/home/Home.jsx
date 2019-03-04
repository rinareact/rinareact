import React, { Component} from 'react'
import './home.scss'
import { Carousel, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

class Com extends Component{
    constructor (props) {
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 200,
        }
    }

    componentDidMount() {
    // simulate img loading
        setTimeout(() => {
            this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    render() {
        return(
            <div className="content">
                <header className="header">
                    <div className="header-l">
                        <span className='iconfont iconsousuo'></span>
                        <input type="text" className='txt' placeholder='搜索商品' />
                    </div>
                    <div className="header-r">搜索</div>
                </header>
                <div className="banner">
                    <WingBlank>
                        <Carousel
                        autoplay={true}
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
                                this.setState({ imgHeight: '200' });
                                }}
                            />
                            </a>
                        ))}
                        </Carousel>
                    </WingBlank>
                </div>
                <nav className="navlist">
                    <ul>
                        <li>
                            <img src='/images/t1.png' alt=""/>
                            <h4>热门</h4>
                        </li>
                        <li>
                            <img src="/images/t2.png" alt=""/>
                            <h4>精品</h4>
                        </li>
                        <li>
                            <img src="/images/t3.png" alt=""/>
                            <h4>专题列表</h4>
                        </li>
                        <li>
                            <img src="/images/t4.png" alt=""/>
                            <h4>品牌</h4>
                        </li>
                    </ul>
                </nav>
                <div className="shoplist">
                    <div className="tb_box">
                        <h2 className="tb_tit">
                            礼品箱包
                            <a className='more'>更多&gt;</a>
                        </h2>
                        <div className="tb_type">
                            <a className="tb_floor">
                                <img src="/images/t5.jpg" alt=""/>
                            </a>
                            <a className="tb_link tb_special">
                                <img src="/images/t6.jpg" alt=""/>
                            </a>
                            <a className="tb_link">
                                <img src="/images/t7.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="tb_box">
                        <h2 className="tb_tit">
                            礼品箱包
                            <a className='more'>更多&gt;</a>
                        </h2>
                        <div className="tb_type">
                            <a className="tb_floor">
                                <img src="/images/t5.jpg" alt=""/>
                            </a>
                            <a className="tb_link tb_special">
                                <img src="/images/t6.jpg" alt=""/>
                            </a>
                            <a className="tb_link">
                                <img src="/images/t7.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="tb_box">
                        <h2 className="tb_tit">
                            礼品箱包
                            <a className='more'>更多&gt;</a>
                        </h2>
                        <div className="tb_type">
                            <a className="tb_floor">
                                <img src="/images/t5.jpg" alt=""/>
                            </a>
                            <a className="tb_link tb_special">
                                <img src="/images/t6.jpg" alt=""/>
                            </a>
                            <a className="tb_link">
                                <img src="/images/t7.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Com
