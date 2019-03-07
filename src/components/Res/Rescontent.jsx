import React,{Component} from 'react'
import axios from 'axios'
import api from '@/api/res'
import './Rescontent.scss'
import { List, InputItem, Toast, Button } from 'antd-mobile';

class Rescontent extends Component {
  state = {
    phoneError: false,
    passwordError: false,
    adminError: false,
    phone: '18396813592',
    password: '',
    code: '',
    admin: ''
  }

  // 提示错误
  onErrorClick = () => {
    // 手机号码错误提示
    if (this.state.phoneError) {
      Toast.info('请输入11位正确手机的号码');
    }
    // 密码错误提示
    if (this.state.passwordError) {
      Toast.info('请设置6位以上的密码');
    }
    // 验证码错误提示
    if (this.state.adminError) {
      Toast.info('请输入正确的验证码')
    }
  }

  // 手机验证
  phoneonChange = (phone) => {

    if (phone.replace(/\s/g, '').length < 11 && phone != '') {
      this.setState({
        phoneError: true,
      });
    } else {
      this.setState({
        phoneError: false,
      });
    }
    this.setState({
      phone,
    });
  }

  // 密码验证
  passwordState (password) {
      if (password.length < 6 && password != '') {
        this.setState({
          passwordError: true
        })
      } else {
        this.setState({
          passwordError: false
        })
      }
      this.setState({
        password
      })
  }

  // 验证码验证
  adminState (admin) {
      if (admin.length < 6 && admin != '') {
        this.setState({
          adminError: true
        })
      } else {
        this.setState({
          adminError: false
        })
      }
      this.setState({
        admin
      })
  }

  //发送验证码
  sendCode (aphone) {
    api.requestData(aphone)
    .then(data => {
      console.log(data)
      if (data === 1) {
        Toast.fail('该用户已注册')
      } else if (data === 0 ) {
        Toast.info('获取验证码失败')
      } else {
        console.log(data.code)
        this.state.admin = data.code
        // this.state.admin = 123456
      }
    })
  }
  // 注册
  // register () {
  //   axios.post('https://www.daxunxun.com/users/register', {
  //     username: this.phone,
  //     password: this.password
  //   }).then(data => {
  //     if (data.data === 2) {
  //       Toast('该用户已注册')
  //     } else if (data.data === 0) {
  //       Toast('注册失败')
  //     } else {
  //       Toast('注册成功')
  //       localStorage.getItem('isLogin','ok')
  //       this.$router.push('/')
  //     }
  //   })
  // }
  render() {
    return (
      <div className='bian'>
        <List>
          <InputItem
            type="number"
            placeholder="请输入手机号码"
            error={this.state.phoneError}
            onErrorClick={this.onErrorClick}
            onChange={this.phoneonChange}
            value={this.state.phone}
            clear
          />
          <InputItem
            type="password"
            placeholder="请输入密码"
            error={this.state.passwordError}
            onErrorClick={this.onErrorClick}
            onChange={this.passwordState.bind(this)}
            value={this.state.password}
            clear
          />
          <InputItem
            type="number"
            placeholder="请输入验证码"
            error={this.state.adminError}
            onErrorClick={this.onErrorClick}
            onChange={this.adminState.bind(this)}
            value={this.state.admin}
            maxLength='6'
            clear
            extra={<Button 
              type="primary" 
              size="small" 
              inline 
              onClick={ this.sendCode.bind(this,this.state.phone) }
              >发送验证码</Button>}
          />
        </List>
      </div>
    )
  }
}

export default Rescontent