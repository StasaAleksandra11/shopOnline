import { useEffect } from 'react';
import ProductService from '../services/ProductService';
import { useDispatch, useSelector } from 'react-redux';
import { saveAllProductsAction } from '../store/productSlice';
import CardComponent from '../components/CardComponent';

function HomePage() {
	const { allProducts, isLoading } = useSelector(
		(state) => state.productStore
	);
	const dispatch = useDispatch();

	useEffect(() => {
		ProductService.getAllProductService()
			.then((res) => {
        console.log(res.data.products)
				dispatch(saveAllProductsAction(res.data.products));
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			{isLoading ? 
				<div>
					{allProducts.map((product) => {
						return (
							<CardComponent key={product.id} product={product} />
						);
					})}
				</div> : 
				<div>is Loading...</div>
			}
		</div>
	);
}

export default HomePage;
