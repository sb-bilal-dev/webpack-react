import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import Routes from './Routes'

const GITHUB_BASE_URL = 'https://api.github.com/graphql'
const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.GITHUB_PERSONAL_TOKEN}`
  }
})
const cache = new InMemoryCache()
const client = new ApolloClient({
  link: httpLink,
  cache
})

export default class Root extends React.Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Routes />
        </Router>
      </ApolloProvider>
    )
  }
}
