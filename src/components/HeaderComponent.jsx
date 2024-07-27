// eslint-disable-next-line no-unused-vars
import React from 'react';
import { CiLocationOn, CiDeliveryTruck } from 'react-icons/ci';
import { IoMdClose } from "react-icons/io";
function HeaderComponent({setActiveHeader}) {

  

	return (
		<div className='container flex mx-auto justify-between  items-center h-[80px] flex-col lg:flex-row py-[10px] '>
			<p>Need help? Call us: <a className='text-blue-500' href='tel:(+98) 0234 456 789 '>(+98) 0234 456 789</a></p>
			{/*right side*/}
		<div className='flex items-center gap-[10px]'>
				<div className='flex items-center gap-[5px]'>
					<CiLocationOn size={24} />
					<span>Our Store</span>
				</div>

				<div className='flex items-center gap-[5px]'>
					<CiDeliveryTruck size={24} />
					<span>Truck our order</span>
				</div>
        <IoMdClose size={24} onClick={() => setActiveHeader(false)} className=' cursor-pointer'/>
			</div>
		</div>
	);
}

export default HeaderComponent;
