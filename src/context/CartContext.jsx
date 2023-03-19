import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

const CartProvider = (props) => {
  const [cart, setCart] = useState([])

  const value = {
    cart,
    setCart
  }

  return (
    <CartContext.Provider value={value}>
      {props.children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  const context = useContext(CartContext)
  return context
}

export {
  CartProvider,
  useCartContext
}
