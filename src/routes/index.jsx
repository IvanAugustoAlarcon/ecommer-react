import { Routes, Route } from 'react-router-dom'
import Products from '../components/products/Products'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      {/* <Route path='*' element={<Error404 />} /> */}
    </Routes>
  )
}

export default RoutesIndex
