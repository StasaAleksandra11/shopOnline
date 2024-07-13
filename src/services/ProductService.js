import axios from 'axios'

class ProductService {
    static getAllProductService = () => axios.get('/products?limit=20&skip=92')
}

export default ProductService;

