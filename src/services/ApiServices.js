
const getProducts = async () => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    const data = await response.json()
    return data
  } catch (error) {
    console.log('error')
  }
}

const getProductById = async (id) => {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
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
