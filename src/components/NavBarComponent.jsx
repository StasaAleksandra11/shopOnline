// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../assets/logo 1.png';
import { CiUser } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
function NavBarComponent() {
	return (
		<div className='bg-mainBlue lg:h-[100px] h-full flex items-center flex-col  lg:flex-row '>
			<div className='container mx-auto flex items-center justify-between lg:flex-row flex-col gap-[10px] py-[10px] '>
				<img src={logo} alt='logo-image' />

				{/*SearchBar*/}
				<div className='flex items-center justify-between bg-textWhite rounded-[20px]'>
					<input
						type='text'
						placeholder='Search any things'
						className=' bg-transparent outline-none px-[20px] py-[15px] rounded-[20px] placeholder:text-mainYellow text-mainBlue'
					/>
					<button className='bg-mainYellow px-[20px] py-[15px] rounded-[20px] text-textWhite'>
						Search
					</button>
				</div>

				{/*loginSystem & cart/Favorite */}
				<div className='flex items-center gap-[15px] justify-end'>
					<div className='flex items-center gap-[5px]'>
						<CiUser size={24} color='white' />
						<span className='text-textWhite text-[18px]'>
							Sign in
						</span>
					</div>

					<div className='flex items-center gap-[5px]'>
						<CiHeart size={24} color='white' />
						<span className='bg-mainYellow text-textWhite w-[20px] h-[20px] flex justify-center items-center rounded-[50%]'>
							0
						</span>
						<span className='text-textWhite text-[18px]'>
							Favorite
						</span>
					</div>

					<div className='flex items-center gap-[5px]'>
						<IoCartOutline size={24} color='white' />
						<span className='bg-mainYellow text-textWhite w-[20px] h-[20px] flex justify-center items-center rounded-[50%]'>
							0
						</span>
						<span className='text-textWhite text-[18px]'>Cart</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBarComponent;