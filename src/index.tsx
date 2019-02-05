import * as React from 'react'
import * as ReactDom from 'react-dom'

import Root from './Root'
import './index.css'

const render = (Root: React.ComponentClass) => {
  ReactDom.render(
    <Root />,
    document.getElementById('root')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewRoot = require('./Root').default
    render(NewRoot)
  })
}
