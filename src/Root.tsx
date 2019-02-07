import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createBrowserHistory } from 'history'

import Routes from './Routes'
import createStores from './store'

const history = createBrowserHistory()
const rootStore = createStores(history)

export default class Root extends React.Component {
  render () {
    return (
      <Provider {...rootStore}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    )
  }
}
