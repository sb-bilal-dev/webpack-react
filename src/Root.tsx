import * as React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from './store'

import * as Icon from './images/Icon.png'

const store = configureStore()

export class Root extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <div>Root</div>
      </Provider>
    )
  }
}

export default Root
