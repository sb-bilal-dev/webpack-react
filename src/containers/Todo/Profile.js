import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_CURRENT_USER = gql`
  {
    viewer {
      name,
      login,
      repositories(
        first: 5
        orderBy: { direction: DESC, field: STARGAZERS }
      ) {
        edges {
          node {
            id
            name
            url
            descriptionHTML
            primaryLanguage {
              name
            }
            owner {
              login
              url
            }
            stargazers {
              totalCount
            }
            viewerHasStarred
            watchers {
              totalCount
            }
            viewerSubscription
          }
        }
      }
    }
  }
`

const Profile = () => (
  <Query query={GET_CURRENT_USER}>
    {({ data, loading }) => {
      const { viewer } = data

      if (loading || !viewer) {
        return <div>Loading ...</div>
      }

      return (
        <div>
          {viewer.name} {viewer.login}
        </div>
      )
    }}
  </Query>
)

export default Profile
