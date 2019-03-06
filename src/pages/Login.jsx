import React,{Component} from 'react'
import Head from '@/common/Head/Head'
import Logincontentwarp from '@/components/Login/Logincontentwarp/Logincontentwarp'

export default class Com extends Component{
  render () {
    return (
      <div className="content">
        <Head title="会员登入"/>
        <Logincontentwarp/>
      </div>
    )
  }
}