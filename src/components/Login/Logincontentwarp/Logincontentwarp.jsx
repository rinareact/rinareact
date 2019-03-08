import React,{Component} from 'react'
import { List, InputItem, Checkbox, Flex, Button, WhiteSpace, WingBlank  } from 'antd-mobile'
import { createForm } from 'rc-form'
import './Logincontentwarp.scss'

const AgreeItem = Checkbox.AgreeItem;

class Logincontent extends Component {
  constructor(props){
    super(props)
  }
  handle(){
  window.location.href='/res'
  }
  onChange = (val) => {
    console.log(val);
  }
  componentDidMount() {
    this.autoFocusInst.focus();
  }
  handleClick = () => {
    this.inputRef.focus();
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className='contentt'>
        {/* 表单 */}
        <div>
        <List>
          <InputItem
            {...getFieldProps('autofocus')}
            clear
            placeholder="账户名/手机号码"
            ref={el => this.autoFocusInst = el}
          />
          <InputItem
            {...getFieldProps('focus')}
            clear
            placeholder="请输入密码"
            ref={el => this.inputRef = el}
          />
        </List>
        </div>
        {/* 复选框 */}
        <div>
        <Flex>
          <Flex.Item>
            <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
              记住我 <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}>忘记密码</a>
            </AgreeItem>
          </Flex.Item>
        </Flex>
        </div>
        {/* 按钮 */}
        <WingBlank>
          <WhiteSpace />
          <Button type="primary" inline size="large" className='anniu'>登入</Button>
          <Button type="primary" inline size="large" className='anniu' onClick={this.handle}>注册</Button>
        </WingBlank>
      </div>
    );
  }
}

const Logincontentwarp = createForm()(Logincontent);

export default Logincontentwarp