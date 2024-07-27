// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

//images/logo
import logo from '../assets/logo 1.png';

//Icons
import { CiUser } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';

//clerk
import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from '@clerk/clerk-react';

//router
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveSearchProductAction } from '../store/productSlice';

function NavBarComponent() {
	const [totalProductLs, setTotalProductLs] = useState(0);
	const [searchProducts, setSearchProducts] = useState('');
	const { totalProduct } = useSelector((state) => state.cartStore);
	const { favoriteTotal } = useSelector(
		(state) => state.favoriteStore
	);
	const dispatch = useDispatch();
	useEffect(() => {
		let lsTotal = JSON.parse(localStorage.getItem('cart_total'));

		if (lsTotal) {
			setTotalProductLs(lsTotal);
		} else {
			setTotalProductLs(0);
		}
	}, [totalProduct]);

	function handleSearchProducts() {
		console.log(searchProducts)
		dispatch(saveSearchProductAction(searchProducts));
		setSearchProducts('');
	}

	return (
		<div className='bg-mainBlue lg:h-[100px] h-full flex items-center flex-col  lg:flex-row '>
			<div className='container mx-auto flex items-center justify-between lg:flex-row flex-col gap-[10px] py-[10px] '>
				<NavLink to='/'>
					<img src={logo} alt='logo-image' />
				</NavLink>

				{/*SearchBar*/}
				<div className='flex items-center justify-between bg-textWhite rounded-[20px]'>
					<input
						type='text'
						placeholder='Search any things'
						className=' bg-transparent outline-none px-[20px] py-[15px] rounded-[20px] placeholder:text-mainYellow text-mainBlue'
						value={searchProducts}
						onChange={(e) => setSearchProducts(e.target.value)}
					/>
					<button
						className='bg-mainYellow px-[20px] py-[15px] rounded-[20px] text-textWhite'
						onClick={handleSearchProducts}>
						Search
					</button>
				</div>

				{/*loginSystem & cart/Favorite */}
				<div className='flex items-center gap-[15px] justify-end'>
					<div className='flex items-center gap-[5px] text-textWhite'>
						<CiUser size={24} color='white' />
						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<UserButton showName />
						</SignedIn>
					</div>

					<div className='flex items-center gap-[5px]'>
						<CiHeart size={24} color='white' />
						<span className='bg-mainYellow text-textWhite w-[20px] h-[20px] flex justify-center items-center rounded-[50%]'>
							{favoriteTotal}
						</span>
						<Link
							to='/favorite'
							className='text-textWhite text-[18px]'>
							Favorite
						</Link>
					</div>

					<div className='flex items-center gap-[5px]'>
						<IoCartOutline size={24} color='white' />
						<span className='bg-mainYellow text-textWhite w-[20px] h-[20px] flex justify-center items-center rounded-[50%]'>
							{totalProductLs}
						</span>
						<Link to='/cart' className='text-textWhite text-[18px]'>
							Cart
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBarComponent;
