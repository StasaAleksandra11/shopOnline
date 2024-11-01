import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SingleProductService from '../services/SingleProductService';
import { Rating } from '@mui/material';
import { saveInCartAction } from '../store/cartSlice';

/*icons*/
import { FaCheck } from 'react-icons/fa6';
import { RxCross1 } from 'react-icons/rx';
import { FaShippingFast } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa";
//link
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateFavoriteAction } from '../store/favoriteSlice';

function SingleProductPage() {
	let { id } = useParams();
	const [singleProduct, setSinglePoduct] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [currentImage, setCurrentImage] = useState(0);
	const [countProduct, setCountProduct] = useState(1);
	const [favoriteIdIcon, setFavoriteIdIcon] = useState(null);
	const { allFavorite } = useSelector((state) => state.favoriteStore);
	const dispatch = useDispatch();

	useEffect(() => {
		SingleProductService.getSingleProduct(id)
			.then((res) => {
				setSinglePoduct(res.data);
				setIsLoading(true);
			})
			.catch((err) => console.log(err));
	});

	useEffect(() => {
		if (allFavorite.lenght > 0) {
			allFavorite.find((item) => {
				if (item.id === singleProduct.id) {
					setFavoriteIdIcon(item.id);
					return;
				}
			})
		} else {
			setFavoriteIdIcon(null);
		}
	}, [allFavorite]);
	
	function handleImage(index) {
		setCurrentImage(index);
	}

	function handdleProductCart() {
		dispatch(saveInCartAction(singleProduct));
	}

	return (
		<div className='px-[20px]'>
			{isLoading ? (
				<div className='container mx-auto flex flex-col lg:flex-row gap-[40px] lg:gap-[20px]  '>
					{/*Left Side */}
					<div className=' w-full lg:w-[50%]'>
						<img
							src={singleProduct.images[currentImage]}
							className='max-h-[400px ]'
						/>
						<div className='flex justify-center gap-[20px] flex-wrap'>
							{singleProduct.images.map((el, index) => {
								return (
									<img
										onClick={() => handleImage(index)}
										src={el}
										key={index}
										className={
											currentImage === index
												? 'w-[100px] h-[100px] border border-mainBlue rounded-lg'
												: 'w-[100px] h-[100px] border border-[#ACACAC] rounded-lg cursor-pointer '
										}
									/>
								);
							})}
						</div>
					</div>

					{/* Right Side */}
					<div className=' w-full lg:w-[50%] flex flex-col gap-[10px]'>
						<h2 className='text-[36px] text-mainBlue'>
							{singleProduct.title}
						</h2>
						<h5 className='font-semibold'>${singleProduct.price}</h5>
						<Rating value={singleProduct.rating} readOnly />
						<div className='flex items-center gap-[10px]'>
							<span className='text-gray-500'>Availability: </span>
							{singleProduct.stock > 0 ? (
								<h3 className='flex items-center gap-[5px] text-[#30BD57] font-semibold'>
									<FaCheck size={24} /> In Stock
								</h3>
							) : (
								<h3 className='flex items-center gap-[5px] text-[#FF0000] font-semibold'>
									<RxCross1 size={24} /> Out of Stock
								</h3>
							)}
						</div>
						<p className=' text-[#ACACAC]'>
							Hurry up! only{' '}
							<span className=' font-semibold text-mainBlue'>
								{singleProduct.stock}
							</span>{' '}
							product left in stock!
						</p>
						<div>
							<h3 className='flex items-center gap-[20px] text-gray-500'>
								Tags:
							</h3>
							<ul className='flex items-center gap-[10px]'>
								{singleProduct.tags.map((el, index) => {
									return (
										<li
											key={index}
											className='bg-lightGray px-[8px] py-[4px] rounded-lg text-gray-500 cursor-pointer'>
											#{el}
										</li>
									);
								})}
							</ul>
						</div>

						<div className='flex items-center gap-[20px]'>
							<p className='text-gray-500'>Quantity:</p>
							<div className='flex items-center'>
								<button className='bg-lightGray px-[10px] py-[5px] text-gray-500 border border-gray-500'>
									-
								</button>
								<span className='bg-lightGray px-[20px] py-[5px] text-gray-500 border border-gray-500'>
									{countProduct}
								</span>
								<button className='bg-lightGray px-[10px] py-[5px] text-gray-500 border border-gray-500'>
									+
								</button>
							</div>
						</div>
						<div className='flex items-center mt-[20px] gap-[20px]'>
							<NavLink
								to={'/cart'}
								className='bg-mainYellow text-textWhite px-[26px] py-[12px] rounded-lg'
								onClick={handdleProductCart}>
								Add to Card
							</NavLink>
							<div className=' bg-[#EEE] p-[10px] rounded-full cursor-pointer'>
								{favoriteIdIcon === parseInt(id) ? <FaHeart
									size={30}
									color='red'
									onClick={() => {
										dispatch(updateFavoriteAction(singleProduct));
									}}
								/> : <FaHeart
								size={30}
								
								onClick={() => {
									dispatch(updateFavoriteAction(singleProduct));
								}}
							/>}
							</div>
						</div>
						<hr className='my-[20px]' />
						<div className='flex items-center gap-[20px]'>
							<FaShippingFast size={26} />
							<span className='text-gray-500'>
								{singleProduct.shippingInformation}
							</span>
						</div>
						<p className='text-gray-500 font-semibold'>
							{singleProduct.returnPolicy}
						</p>
					</div>
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
}

export default SingleProductPage;
