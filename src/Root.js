import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './Routes'

export default class Root extends React.Component {
  render () {
    return (
      <Router>
        <Routes />
      </Router>
    )
  }
}
