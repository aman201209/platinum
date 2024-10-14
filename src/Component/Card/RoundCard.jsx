import React from 'react'
import "./RoundCard.css"

function RoundCard({product,navigate}) {
  return (
    
    <div className='box-second-first' onClick={navigate}>
          <div className='box-second-img'>
            <img src={product.image} alt="" />
          </div>
          <div className='box-second-div'>{product.name}</div>
          </div>
  )
}

export default RoundCard