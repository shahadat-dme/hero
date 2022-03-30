import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import './Cart.css'

const CartShow = (props) => {
    const {img, name, id } = props.cat
    const {handleDelete} = props
  return (
    <div>
        <h3>{<img src={img} id='cart-img'/>}{name} <AiFillDelete onClick={()=> handleDelete(id)}/></h3>
    </div>
  )
}

export default CartShow