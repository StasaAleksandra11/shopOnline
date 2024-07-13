import axios from "axios";

class SingleProductService{ 

    static getSingleProduct = (id) => axios.get(`/products/${id}`)
}

export default SingleProductService
