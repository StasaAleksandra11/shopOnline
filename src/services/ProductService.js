import axios from 'axios'

class ProductService {
    static getAllProductService = (limit) => axios.get(`/products?limit=${limit}&skip=92`)
    static getAllProductsByCategory = (category) => axios.get(`/products/category/${category}`)
    static getSearchProduct = (search) => axios.get(`/products/search?q=${search}`)
}

export default ProductService;

