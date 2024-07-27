import { NavLink } from 'react-router-dom';

import { Rating } from '@mui/material';
import React from 'react';

// eslint-disable-next-line react/prop-types
function CardComponent({ product, isGrid }) {
	return (
		<div
			className={
				isGrid === 'gridView'
					? 'w-[300px] border bborder-[#B6B6B6] rounded-[10px] flex flex-col items-center justify-center mt-[30px]'
					: 'w-full flex items-center border border-gray-100 justify-between rounded-lg gap-[3px]'
			}>
			<img
				src={product.thumbnail}
				alt=''
				className={
					isGrid === 'gridView'
						? 'w-full h-[200px] object-cover'
						: 'sm:w-[70px] h-[70px] lg:w-[150px] h-[150px] object-cover'
				}
			/>
			<h3
				className={
					isGrid === 'listView' ? 'text-[12px] md:text-[15px]' : ''
				}>
				{product.title}
			</h3>
			<h4
				className={
					isGrid === 'listView' ? 'text-[12px] md:text-[15px]' : ''
				}>
				${product.price}
			</h4>
			<div className={isGrid === 'listView' ? 'hidden lg:flex' : ''}>
				<Rating name='read-only' value={product.rating} readOnly />
			</div>
			<NavLink
				to={`/singleProduct/${product.id}`}
				className={
					isGrid === 'gridView'
						? 'bg-mainBlue text-textWhite rounded-lg px-[16px] py-[8px] my-[20px] hover:bg-mainYellow transition-all duration-300'
						: 'bg-mainBlue text-textWhite rounded-lg px-[8px] py-[2px] lg:px-[10px] lg:py-[5px] hover:bg-mainYellow transition-all duration-300'
				}>
				Wiew more
			</NavLink>
		</div>
	);
}

export default CardComponent;
