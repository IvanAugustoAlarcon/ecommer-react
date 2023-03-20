import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductById } from '../services/ApiServices'
import Skeleton from 'react-loading-skeleton'
import { useCartContext } from '../context/CartContext'

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState([])
  const context = useCartContext()

  useEffect(() => {
    setLoading(true)
    getProductById(id).then(async (data) => {
      const productData = await data
      setProduct(productData)
      setCategory(productData.category)
      setLoading(false)
    })
  }, [])
  const addToCart = () => {
    const price = product.price
    const image = product.images
    const productName = product.title
    context.setCart((currentItems) => {
      const isItems = context.cart.find((item) => item.id === id)
      if (isItems) {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...currentItems, { id, quantity: 1, price, image, productName }]
      }
    })
  }
  // console.log(product.category.name)

  const Loading = () => {
    return (
      <>
        <div className='col'>
          <Skeleton height={550} />
        </div>
      </>
    )
  }
  const ShowProduct = () => {
    return (
      <>
        <div className='col-md-6'>
          <img src={product.images} height='400px' width='400px' />
        </div>
        <div className='col-md-6'>
          <h4 className='text-uppercase text-black-50'>
            {category.name}
          </h4>
          <h1 className='display-5'>{product.title}</h1>
          <h3 className='display-6 fw-bold my-4'>
            $ {product.price}
          </h3>
          <p className='lead'>{product.description}</p>
          <button className='btn btn-outline-dark px-4 py-2' onClick={() => { addToCart() }}>
            Add to Cart
          </button>
          <Link to='/cart' className='btn btn-dark ms-2 px-3 py-2'>
            Go to Cart
          </Link>
        </div>
      </>
    )
  }
  return (
    <>
      <div className='container py-5 mt-5'>
        <div className='row py-5'>
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  )
}

export default Product
