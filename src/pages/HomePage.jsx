import { useEffect } from 'react';
import ProductService from '../services/ProductService';
import { useDispatch, useSelector } from 'react-redux';
import { saveAllProductsAction } from '../store/productSlice';
import CardComponent from '../components/CardComponent';
import SingleProductPage from './SingleProductPage';

function HomePage() {
	const { allProducts, isLoading } = useSelector(
		(state) => state.productStore
	);
	const dispatch = useDispatch();

	useEffect(() => {
		ProductService.getAllProductService()
			.then((res) => {
        
				dispatch(saveAllProductsAction(res.data.products));
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='container mx-auto'>
			{isLoading ? 
				<div className='flex flex-wrap justify-center items-center gap-[10px]'>
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
