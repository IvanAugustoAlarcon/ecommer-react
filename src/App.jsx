import './App.css'
import RoutesIndex from './routes'
import Navbar from './components/navbar/Navbar'
import { CartProvider } from './context/CartContext'

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
