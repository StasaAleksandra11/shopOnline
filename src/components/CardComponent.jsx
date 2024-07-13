
import { NavLink } from 'react-router-dom'

import { Rating } from '@mui/material'
import React from 'react'



// eslint-disable-next-line react/prop-types
function CardComponent({product}) {
  return (
    <div className='w-[300px] border bborder-[#B6B6B6] rounded-[10px] flex flex-col items-center justify-center '>
      <img src={product.thumbnail} alt='' className='w-full h-[200px] object-cover'/>
      <h3>{product.title}</h3>
      <h4>${product.price}</h4>
      <Rating name="read-only" value={product.rating} readOnly />
      <NavLink to={`/singleProduct/${product.id}`} className='bg-mainBlue text-textWhite rounded-lg px-[16px] py-[8px] my-[20px] hover:bg-mainYellow transition-all duration-300'>Wiew more</NavLink>
    </div>
  )
}

export default CardComponent