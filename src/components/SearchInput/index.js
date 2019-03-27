import React from 'react'
import './style.css'

const SearchInput = ({ handleChange, value }) => (
  <input
    className='SearchInput'
    onChange={handleChange}
    value={value}
    placeholder='Search...'
  />
)

export default SearchInput
