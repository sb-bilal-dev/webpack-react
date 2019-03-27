import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.css'
import Header from '../../components/Header'
import Photos from '../../components/Photos'
import SearchInput from '../../components/SearchInput'

import * as homeActions from './actions'

class Home extends Component {
  state = {
    searchValue: '',
    gridView: false
  }

  handleSearch = (event) => {
    this.setState({ searchValue: event.target.value })
  }

  toggleGridView = () => {
    this.setState({ gridView: !this.state.gridView })
  }

  componentDidMount () {
    this.props.fetchPhotos()
  }

  render () {
    const {
      searchValue,
      gridView
    } = this.state

    const {
      loading,
      error,
      photos
    } = this.props

    return (
      <div className="Home">
        <Header
          leftItem={<><span style={{ color: 'salmon' }}>My</span> Photos</>}
          rightItem={
            <SearchInput
              value={searchValue}
              handleChange={this.handleSearch}
            />
          }
        />
        <div className="Home__main">
          <div className="Home__main__buttons">
            <button
              onClick={this.toggleGridView}
            >
              {gridView ? 'List' : 'Grid'}
            </button>
          </div>
          <Photos
            photos={photos}
            loading={loading}
            error={error}
            gridView={gridView}
          />
        </div>
      </div>
    )
  }
}

export default connect(
  ({
    home: {
      photos,
      loading,
      error
    }
  }) => ({
    photos,
    loading,
    error
  }),
  homeActions
)(Home)
