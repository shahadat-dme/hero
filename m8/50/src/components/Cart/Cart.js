import React from 'react'
import './Cart.css'
import CartShow from './CartShow';

const Cart = (props) => {
  
  const { cart,clearAll,randomOne,handleDelete } = props;

  
  return (
    <div>
      <h1>Cart Summary</h1>
{
  cart.map(cat => <CartShow cat={cat} key={cat.id} handleDelete={handleDelete}/>)
}

      <div>
        
      <button onClick={randomOne}>Random One</button>
      <button onClick={clearAll}>Reset Items</button>
      </div>
    </div>
  )
}

export default Cart