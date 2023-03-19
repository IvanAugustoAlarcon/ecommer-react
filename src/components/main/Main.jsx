import './main.css'

function Main () {
  return (
    <div className='main'>
      <div className='card text-bg-dark border-0'>
        <img src='https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1600' className='card-img' alt='...' height='650rem' />
        <div className='card-img-overlay'>
          <div className='container'>
            <h5 className='card-title display-3 title__text fw-bolder mb-0'>NEW PRODUCTS</h5>
            <p className='card-text title__text lead fs-1'>CHECK OUT ALL THE PRODUCTS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
