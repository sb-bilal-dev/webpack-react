import React from 'react'

import LoadingIndicator from '../LoadingIndicator'
import ListView from '../ListView'
import GridView from '../GridView'

const Photos = ({ loading, error, gridView, photos }) => {
  if (loading) return <LoadingIndicator />

  if (error) {
    return (
      <div>Something Went Wrong.</div>
    )
  }

  if (gridView) return <GridView items={photos} />

  return <ListView items={photos} />
}

export default Photos
