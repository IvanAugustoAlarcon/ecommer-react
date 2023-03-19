import { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

function Navbar () {
  const [activeNav, setActiveNav] = useState('home')
  const context = useCartContext()

  const quantity = context.cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm'>
        <div className='container'>
          <Link to='/' className='navbar-brand fw-bold fs-4'>E-Commer</Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className={activeNav === 'home' ? 'nav-link fw-bold active' : 'nav-link'} onClick={() => setActiveNav('home')} aria-current='page' to='/'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link className={activeNav === 'product' ? 'nav-link fw-bold active' : 'nav-link'} onClick={() => setActiveNav('product')} to='/products'>Products</Link>
              </li>
              <li className='nav-item'>
                <Link className={activeNav === 'about' ? 'nav-link fw-bold active' : 'nav-link'} onClick={() => setActiveNav('about')} to='/about'>About</Link>
              </li>
              <li className='nav-item'>
                <Link className={activeNav === 'contact' ? 'nav-link fw-bold active' : 'nav-link'} onClick={() => setActiveNav('contact')} to='/contact'>Contact</Link>
              </li>
            </ul>
            <div>
              <Link to='/login' className='btn btn-outline-dark'>
                <i className='bx bxs-log-in me-1' />Login
              </Link>
              <Link to='/signup' className='btn btn-outline-dark ms-2'>
                <i className='bx bxs-user-plus' />Register
              </Link>
              <Link to='/cart' className='btn btn-outline-dark ms-2'>
                <i className='bx bxs-cart' />Cart ({quantity})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
