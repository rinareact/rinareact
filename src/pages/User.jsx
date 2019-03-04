import React, { Component } from 'react'
import Userhead from '@/components/User/Userhead/Userhead'
import Usrtlist from '@/components/User/Usrtlist/Usrtlist'

export default class Com extends Component{
    render() {
        return(
            <div className="content">
              <Userhead/>
              <Usrtlist/>
            </div>
        )
    }
}
