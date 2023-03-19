import React from 'react'
import { useCartContext } from '../context/CartContext'

const Cart = () => {
  const context = useCartContext()

  const addItem = (id) => {
    context.setCart(() => {
      return context.cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })
    })
  }

  const removeItem = (id) => {
    context.setCart((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id)
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  return (
    <>
      <div className='container'>
        {context.cart.map((cartItem) => (
          <div className='row-md-8 m-5 pt-5' key={cartItem.id}>
            <div className='row'>
              <div className='col-md-4'>
                <img src={cartItem.image} alt={cartItem.productName} height='200rem' width='180rem' />
              </div>
              <div className='col-md-4'>
                <h3>{cartItem.productName}</h3>
                <p className='lead fw-bold'>
                  {cartItem.quantity} X ${cartItem.price} = ${cartItem.quantity * cartItem.price}
                </p>
                <button className='btn btn-outline-dark me-4' onClick={() => { removeItem(cartItem.id) }}>
                  <i className='bx bx-minus fw-bold' />
                </button>
                <button className='btn btn-outline-dark' onClick={() => { addItem(cartItem.id) }}>
                  <i className='bx bx-plus fw-bold' />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cart
