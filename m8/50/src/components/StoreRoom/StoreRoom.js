import React, { useEffect, useState } from 'react'
import './StoreRoom.css'
import ShowRoom from '../ShowRoom/ShowRoom'
import Cart from '../Cart/Cart'

const StoreRoom = () => {

    const [cats, setCats] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCats(data))
    },[])

    const clearAll = () => {
        setCart([])
    }
    
    const handleBtn =  (cats) => {
        const cartExist = cart.some(product => product.id === cats.id)
        if(!cartExist){
            if(cart.length !== 4){
                const newCart = [...cart, cats]
                setCart(newCart)
            }else{
                alert("Already 4 items selected")
            }
        }
    }
    const randomOne = () => {
        if(cart.length !== 0){
            const random = Math.floor(Math.random()*cart.length)
            setCart([cart[random]])
        }
    }
 const handleDelete = (id) => {
    const remain = cart.filter(item => item.id !== id)
    setCart(remain)
    console.log(id);
}
    return (
        <>
        <h1 className='title'>Hello Shop</h1>
        <div className='container'>
            <div className='item-container'>
                {
                cats.map(cat => <ShowRoom key={cat.id} 
                    cat={cat} handleBtn={handleBtn}/>)
                }
                
            </div>
            <div className='cart'>
                <Cart clearAll={clearAll} randomOne={randomOne} cart={cart} handleDelete={handleDelete}/>
            </div>
        </div>
        </>
    )
}

export default StoreRoom