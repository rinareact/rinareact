import React from 'react';
import { Link } from 'react-router-dom'
import './List.scss';

const List = () => (
  <div className="shoplist">
      <div className="tb_box">
          <h2 className="tb_tit">
              背包
              <Link to='/detail' className='more'>更多&gt;</Link>
          </h2>
          <div className="tb_type">
              <Link  to='/detail'  className="tb_floor">
                  <img src="/images/t5.jpg" alt=""/>
              </Link>
              <Link  to='/detail' className="tb_link tb_special">
                  <img src="/images/t6.jpg" alt=""/>
              </Link>
              <Link  to='/detail' className="tb_link">
                  <img src="/images/t7.jpg" alt=""/>
              </Link>
          </div>
      </div>
      <div className="tb_box">
          <h2 className="tb_tit">
              服饰
              <Link  to='/detail' className='more'>更多&gt;</Link>
          </h2>
          <div className="tb_type">
              <Link to='/detail' className="tb_floor">
                  <img src="/images/t8.jpg" alt=""/>
              </Link>
              <Link to='/detail' className="tb_link tb_special">
                  <img src="/images/t9.jpg" alt=""/>
              </Link>
              <Link to='/detail' className="tb_link">
                  <img src="/images/t10.jpg" alt=""/>
              </Link>
          </div>
      </div>
      <div className="tb_box">
          <h2 className="tb_tit">
              鞋子
              <Link to='/detail' className='more'>更多&gt;</Link>
          </h2>
          <div className="tb_type">
              <Link to='/detail' className="tb_floor">
                  <img src="/images/t11.jpg" alt=""/>
              </Link>
              <Link to='/detail' className="tb_link tb_special">
                  <img src="/images/t12.jpg" alt=""/>
              </Link>
              <Link to='/detail' className="tb_link">
                  <img src="/images/t13.jpg" alt=""/>
              </Link>
          </div>
      </div>
    </div>
)

export default List
