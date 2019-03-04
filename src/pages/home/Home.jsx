import React, { Component} from 'react'
import './home.scss'

class Com extends Component{
    render() {
        return(
            <div className="box">
                <header className="header">
                    <div className="header-l">
                        <span className='iconfont iconsousuo'></span>
                        <input type="text" className='txt' placeholder='搜索商品' />
                    </div>
                    <div className="header-r">搜索</div>
                </header>
                <div className="banner">
                    轮播图
                </div>
                <div className="content">
                    首页内容
                </div>
            </div>
        )
    }
}
export default Com
