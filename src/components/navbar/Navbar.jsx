import { useEffect, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

function Navbar () {
  const [Toggle, showMenu] = useState(false)
  const [activeNav, setActiveNav] = useState('home')
  const context = useCartContext()
  const [sizeWidth, setSizeWidth] = useState('window.innerWidth')

  const handleSizeWidth = () => {
    setSizeWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleSizeWidth)
    return () => {
      window.removeEventListener('resize', handleSizeWidth)
    }
  })

  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header')
    if (this.scrollY >= 80) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
  })
  const quantity = context.cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)

  const handleSize = () => {
    console.log(document.documentElement.clientWidth)
  }
  console.log(sizeWidth)

  return (
    <header className='header'>
      <nav className='nav container' onResize={() => { handleSize() }}>
        <Link to='/' className='navbar-brand fw-bold fs-4'>E-Commer</Link>
        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu nav__2'}>
          <ul className='nav__list grid'>
            <li className='nav-item'>
              <Link className={activeNav === 'home' ? 'nav__link fw-bold' : 'nav__link'} onClick={() => setActiveNav('home')} aria-current='page' to='/'><i className='uil uil-estate nav__icon' />Home</Link>
            </li>
            <li className='nav-item'>
              <Link className={activeNav === 'product' ? 'nav__link fw-bold' : 'nav__link'} onClick={() => setActiveNav('product')} to='/products'><i className='uil uil-package nav__icon' />Products</Link>
            </li>
            <li className='nav-item'>
              <Link className={activeNav === 'about' ? 'nav__link fw-bold' : 'nav__link'} onClick={() => setActiveNav('about')} to='/about'><i className='uil uil-user nav__icon' />About</Link>
            </li>
            <li className='nav-item'>
              <Link className={activeNav === 'contact' ? 'nav__link fw-bold' : 'nav__link'} onClick={() => setActiveNav('contact')} to='/contact'><i className='uil uil-message nav__icon' />Contact</Link>
            </li>
            <li className='nav-item'>
              <Link className={sizeWidth > 1190 ? 'no__show2' : 'nav__link'} onClick={() => setActiveNav('contact')} to='/login'><i className='bx bxs-log-in nav__icon' />Login</Link>
            </li>
            <li className='nav-item'>
              <Link className={sizeWidth > 1190 ? 'no__show2' : 'nav__link'} onClick={() => setActiveNav('contact')} to='/signup'><i className='bx bxs-user-plus nav__icon' />Signup</Link>
            </li>
            <li className='nav-item'>
              <Link className={sizeWidth > 1190 ? 'no__show2' : 'nav__link'} onClick={() => setActiveNav('contact')} to='/cart'><i className='bx bxs-cart nav__icon' />Cart({quantity})</Link>
            </li>
          </ul>
          <div>
            <Link to='/login' className={sizeWidth > 1190 ? 'btn btn-outline-dark' : 'no__show'}>
              <i className='bx bxs-log-in me-1' />Login
            </Link>
            <Link to='/signup' className={sizeWidth > 1190 ? 'btn btn-outline-dark ms-2' : 'no__show'}>
              <i className='bx bxs-user-plus' />Signup
            </Link>
            <Link to='/cart' className={sizeWidth > 1190 ? 'btn btn-outline-dark ms-2' : 'no__show'}>
              <i className='bx bxs-cart' />Cart ({quantity})
            </Link>
          </div>
          <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)} />
        </div>
        <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
          <i className='uil uil-apps' />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
