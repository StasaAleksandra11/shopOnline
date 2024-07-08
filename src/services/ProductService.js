import axios from 'axios'

class ProductService {
    static getAllProductService = () => axios.get('/products')
}

export default ProductService;
