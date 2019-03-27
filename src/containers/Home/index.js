import React, { Component } from 'react'

import './style.css'
import Header from '../../components/Header'
import Photos from '../../components/Photos'
import SearchInput from '../../components/SearchInput'

class Home extends Component {
  state = {
    searchValue: 'Earch $50,000',
    loading: false,
    photos: [],
    error: null,
    gridView: false
  }

  handleSearch = (event) => {
    this.setState({ searchValue: event.target.value })
  }

  toggleGridView = () => {
    this.setState({ gridView: !this.state.gridView })
  }

  componentDidMount () {
    this.setState({
      loading: true,
      error: null
    })

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(response => {
        this.setState({
          loading: false,
          photos: response.slice(-10)
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
          photos: [],
          error
        })
      })
  }

  render () {
    const {
      searchValue,
      photos,
      loading,
      error,
      gridView
    } = this.state

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

export default Home
