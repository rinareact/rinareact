import React,{Component} from 'react'
import Head from '@/common/Head/Head'
import Rescontent from '@/components/Res/Rescontent'

export default class Com extends Component {
  render(){
    return (
      <div className="content">
        <Head src={this.props} title='会员注册'/>
        <Rescontent/>
      </div>
    )
  }
}