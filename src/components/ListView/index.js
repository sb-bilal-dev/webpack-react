import React from 'react'

import Item from './Item'
import './style.css'

const ListView = ({ items }) => (
  <div className='ListView'>
    {items.map(item => (
      <Item
        key={item.id}
        item={item}
      />
    ))}
  </div>
)

export default ListView
