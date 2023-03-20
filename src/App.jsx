import './App.css'
import RoutesIndex from './routes'
// import Navbar from './components/navbarr/Navbar'
import { CartProvider } from './context/CartContext'
import Navbar from './components/navbar/Navbar'

function App () {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <RoutesIndex />
      </CartProvider>
    </div>
  )
}

export default App
