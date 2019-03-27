import React from 'react'

import Item from './Item'
import './style.css'

const GridView = ({ items }) => (
  <div className='GridView'>
    {items.map(item => (
      <Item
        key={item.id}
        item={item}
      />
    ))}
  </div>
)

export default GridView
