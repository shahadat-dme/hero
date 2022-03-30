import React from 'react'
import './ShowRoom.css'
import { HiShoppingCart } from 'react-icons/hi';

const ShowRoom = ({cat, handleBtn}) => {
  // const {cat, handleBtn} = props
  const {img, name, id, price} = cat;
  
  return (
    <>
        <div className='item'>
        <img src={img} alt=""/>
        <div className='item-info'>
          <p className='item-name'>{name}</p>
          <p>Price: $ {price}</p>
          <p><small>Id: {id}</small></p>
        </div>
        <button className='btn' onClick={() => handleBtn(cat)}>
          Add to Cart <HiShoppingCart id='btn-icon'/></button>
      </div>
    </>
  )
}

export default ShowRoom