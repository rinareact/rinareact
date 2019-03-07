import React,{Component} from 'react'
import Head from '@/components/common/Head/Head'
import Logincontentwarp from '@/components/Login/Logincontentwarp/Logincontentwarp'

export default class Com extends Component{
  render () {
    return (
      <div className="content">
        <Head src={this.props} title="会员登入"/>
        <Logincontentwarp history={this.props.history}/>
      </div>
    )
  }
}