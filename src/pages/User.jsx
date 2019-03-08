import React, { Component } from 'react'
import Userhead from '@/components/User/Userhead/Userhead'
import Userlist from '@/components/User/Userlist/Userlist'

export default class Com extends Component{
    render() {
        return(
            <div className="content">
              <Userhead/>
              <Userlist history={this.props.history}/>
            </div>
        )
    }
}
