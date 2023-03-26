
const getProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
  } catch (error) {
    console.log('error')
  }
}

const getProductById = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('error')
  }
}

export {
  getProducts,
  getProductById
}
