import React from 'react'
import './style.css'

const Header = ({ leftItem, rightItem, children }) => (
  <header className='Header'>
    <div className='Header__left-item'>
      {leftItem}
    </div>
    <div className='Header__right-item'>
      {rightItem}
    </div>
  </header>
)

export default Header
