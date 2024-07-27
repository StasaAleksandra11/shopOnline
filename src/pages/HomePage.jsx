import { useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import { useDispatch, useSelector } from 'react-redux';
import {
	saveAllProductsAction,
	saveSearchProductAction,
} from '../store/productSlice';
import CardComponent from '../components/CardComponent';

//icons
import { MdGridView } from 'react-icons/md';
import { TiThListOutline } from 'react-icons/ti';

function HomePage() {
	const [limitProducts, setLimitProducts] = useState(10);
	const [isGrid, setIsGrid] = useState('gridView');
	const { allProducts, isLoading, selectCategory, searchProducts } =
		useSelector((state) => state.productStore);
	const dispatch = useDispatch();

	useEffect(() => {
		if (searchProducts) {
			ProductService.getSearchProduct(searchProducts)
				.then((res) =>
					dispatch(saveAllProductsAction(res.data.products))
				)
				.catch((err) => console.log(err));
		}
	}, [searchProducts]);

	useEffect(() => {
		if (selectCategory) {
			ProductService.getAllProductsByCategory(selectCategory)
				.then((res) => {
					dispatch(saveAllProductsAction(res.data.products));
				})
				.catch((err) => console.log(err));
		} else {
			ProductService.getAllProductService(limitProducts)
				.then((res) => {
					dispatch(saveAllProductsAction(res.data.products));
				})
				.catch((err) => console.log(err));
		}
	}, [selectCategory, limitProducts]);

	return (
		<div className='container mx-auto'>
			<div className='flex items-center py-[20px] gap-[20px] justify-end'>
				<TiThListOutline
					size={28}
					onClick={() => setIsGrid('listView')}
					className={
						isGrid === 'listView'
							? 'bg-mainYellow p-[2px] rounded-lg'
							: ''
					}
				/>
				<MdGridView
					size={28}
					onClick={() => setIsGrid('gridView')}
					className={
						isGrid === 'gridView'
							? 'bg-mainYellow p-[2px] rounded-lg'
							: ''
					}
				/>
			</div>
			{isLoading ? (
				<div
					className={
						isGrid === 'gridView'
							? 'flex flex-wrap justify-center items-center gap-[10px]'
							: 'flex flex-col items-center justify-center gap-[10px]'
					}>
					{allProducts.map((product) => {
						return (
							<CardComponent
								key={product.id}
								product={product}
								isGrid={isGrid}
								setIsGrid={setIsGrid}
							/>
						);
					})}
				</div>
			) : (
				<div>is Loading...</div>
			)}
			{!selectCategory && (
				<div className='flex items-centar justify-center py-[50px]'>
					<button
						className='bg-mainBlue text-textWhite rounded-lg px-[16px] py-[8px] my-[20px] hover:bg-mainYellow transition-all duration-300'
						onClick={() => setLimitProducts(limitProducts + 10)}>
						View more Products..
					</button>
				</div>
			)}
		</div>
	);
}

export default HomePage;
