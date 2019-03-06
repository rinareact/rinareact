import React, { Component } from 'react'
import Detail from '@/pages/detail/detail.jsx'
import { Route } from 'react-router-dom'

class DetailApp extends Component {
  render () {
    return (
      <Route path='/detail/:id' component = { Detail }></Route>
    )
  }
}

export default DetailApp
