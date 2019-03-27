import React from 'react'

import noImg from '../../images/noImg.png'
import './style.css'

const Item = ({ item }) => (
  <div className='ListView__item'>
    <img
      className='ListView__item__image'
      src={noImg}
      alt=''
    />
    <div className='ListView__item__info'>
      <h4>{item.title}</h4>
      <p>{item.thumbnailUrl}</p>
    </div>
  </div>
)

export default Item
