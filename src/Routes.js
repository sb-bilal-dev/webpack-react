import React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from './containers/App'
import NotFound from './components/NotFound'

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        component={App}
      />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
