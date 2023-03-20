import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { getProducts } from '../../services/ApiServices'
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from 'react-router-dom'
import './products.css'
import Scrollup from '../scrollup/Scrollup'

function Products () {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(false)
  const [activeNav, setActiveNav] = useState('all')
  const navigate = useNavigate()
  let componentMounted = true

  useEffect(() => {
    setLoading(true)
    getProducts().then((products) => {
      if (componentMounted) {
        setData(products)
        setFilter(products)
        setLoading(false)
        console.log(filter)
      }
      componentMounted = false
    })
  }, [])

  const Loading = () => {
    return (
      <>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
      </>
    )
  }

  const handleProductFilter = (category) => {
    const updateList = data.filter((x) => x.category.name === category)
    setFilter(updateList)
  }
  const handlePageProduct = (id) => {
    navigate(`/product/${id}`)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className='buttons d-flex justify-content-center mb-5 pb-5 categorys'>
          <button className={activeNav === 'all' ? 'btn btn-dark me-2' : ' btn btn-outline-dark me-2'} onClick={() => { setFilter(data); setActiveNav('all') }}>All</button>
          <button className={activeNav === 'clothes' ? 'btn btn-dark me-2' : ' btn btn-outline-dark me-2'} onClick={() => { handleProductFilter('Clothes'); setActiveNav('clothes') }}>Clothes</button>
          <button className={activeNav === 'furniture' ? 'btn btn-dark me-2' : ' btn btn-outline-dark me-2'} onClick={() => { handleProductFilter('Furniture'); setActiveNav('furniture') }}>Furniture</button>
          <button className={activeNav === 'shoes' ? 'btn btn-dark me-2' : ' btn btn-outline-dark me-2'} onClick={() => { handleProductFilter('Shoes'); setActiveNav('shoes') }}>Shoes</button>
          <button className={activeNav === 'electronics' ? 'btn btn-dark me-2' : ' btn btn-outline-dark me-2'} onClick={() => { handleProductFilter('Electronics'); setActiveNav('electronics') }}>Electronic</button>
          <button className={activeNav === 'others' ? 'btn btn-dark me-2' : ' btn btn-outline-dark me-2'} onClick={() => { handleProductFilter('Others'); setActiveNav('others') }}>Others</button>
        </div>
        {filter.map((product) => {
          return (
            <div className='col-md-3 mb-4 samll__screen' key={product.id}>
              <div className='card h-100 text-center p-4 car__pointer' onClick={() => { handlePageProduct(product.id) }}>
                <img src={product.images} className='card-img-top' alt={product.title} height='250rem' />
                <div className='card-body'>
                  <h5 className='card-title mb-0'>{product.title.substring(0, 12)}</h5>
                  <p className='card-text lead fw-bold'>${product.price}</p>
                </div>
              </div>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <div className='container my-5 py-5 samll__screen'>
      <div className='row'>
        <div className='col-12 mb-5'>
          <h1 className='display-6 fw-bolder text-center'>Products</h1>
          <hr />
        </div>
        <div className='row justify-content-center'>
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
      <Scrollup />
    </div>
  )
}

export default Products
