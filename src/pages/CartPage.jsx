import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import {
	deleteFromCartAction,
	setPriceHandleAction,
} from '../store/cartSlice';
import { useEffect, useRef, useState } from 'react';

function CartPage() {
	const [cartData, setCartData] = useState([]);
	const [activeCode, setActiveCode] = useState('')
	const dispatch = useDispatch();

	//alphanedim
	const couponRef = useRef()

	const { cart, totalPrice } = useSelector(
		(state) => state.cartStore
	);
	useEffect(() => {
		setCartData(JSON.parse(localStorage.getItem('cart_item')));
	}, [cart]);

	function handleRemoveProduct(product) {
		dispatch(deleteFromCartAction(product));
	}
	function handleApplyCopuon(){
      setActiveCode(couponRef.current.value)
      couponRef.current.value = ''
	}

	return (
		<div className='mt-[50px] mx-[20px] lg:mx-[]'>
			<div className=' container mx-auto flex flex-col lg:flex-row gap-[20px]'>
				<div className='w-full lg:w-[70%]'>
					<TableContainer
						component={Paper}
						className='w-full lg:w-[70%]'>
						<Table sx={{ minWidth: 250 }} aria-label='simple table'>
							<TableHead>
								<TableRow className='bg-mainBlue'>
									<TableCell style={{ color: 'white' }}>
										Product
									</TableCell>
									<TableCell style={{ color: 'white' }} align='left'>
										Price
									</TableCell>
									<TableCell style={{ color: 'white' }} align='left'>
										Quantity
									</TableCell>
									<TableCell style={{ color: 'white' }} align='right'>
										Subtotal
									</TableCell>
									<TableCell style={{ color: 'white' }} align='right'>
										Remove
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{cartData.map((product, index) => (
									<TableRow
										key={product.id}
										sx={{
											'&:last-child td, &:last-child th': {
												border: 0,
											},
										}}>
										<TableCell component='th' scope='row'>
											<img
												src={product.thumbnail}
												alt=''
												className='w-[50px] h-[60px] lg:w-[90px] lg:h-[90px] border border-mainBlue rounded-lg object-cover'
											/>
										</TableCell>
										<TableCell align='left'>
											${product.price}
										</TableCell>
										<TableCell align='left'>
											<div className='flex items-center'>
												<button
													className='px-[5px] py-[3px] lg:px-[8px] lg:py-[4px] bg-slate-300 text-[10px] lg:text-[18px]'
													onClick={() =>
														dispatch(
															setPriceHandleAction({
																index,
																increment: -1,
															})
														)
													}>
													-
												</button>
												<span className='px-[5px] py-[3px] lg:px-[8px] lg:py-[4px] bg-slate-300 text-[10px] lg:text-[18px]'>
													{product.count}
												</span>
												<button
													className='px-[5px] py-[3px] lg:px-[8px] lg:py-[4px] bg-slate-300 text-[10px] lg:text-[18px]'
													onClick={() => {
														if (product.count < product.stock) {
															dispatch(
																setPriceHandleAction({
																	index,
																	increment: 1,
																})
															);
														}
													}}>
													+
												</button>
											</div>
										</TableCell>
										<TableCell align='right'>
											${product.cartTotal}
										</TableCell>
										<TableCell align='right'>
											<button
												className=' text-red-400'
												onClick={() => handleRemoveProduct(product)}>
												Remove
											</button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>

				{/*Info Cart */}
				<div className='w-full lg:w-[30%]'>
					<h2 className='text-textWhite bg-mainBlue py-[17px] text-center rounded-md'>CART TOTAL</h2>
					<span className='text-center text-[28px] font-bold '>Total Price: ${activeCode === 'alphanedim' ? totalPrice/2 : totalPrice }</span>

					<div className='flex flex-col gap-[20px]'>
						<input
						    ref={couponRef}
							type='text'
							placeholder='Insert copuon'
							className='p-[10px] border border-gray-300 rounded-lg placeholder:text-mainBlue outline-none mt-[25px]'
							
						/>
						<span className='text-[13px] text-gray-300'>
							Insert copun for 50% discount
						</span>
						<button className={activeCode === 'alphanedim' ? 'bg-gray-300 hover:bg-gray-500 text-black px-[15px] py-[7px] rounded-lg transition-all duration-300 cursor-pointer line-through' : 'bg-mainBlue hover:bg-mainYellow text-textWhite px-[15px] py-[7px] rounded-lg transition-all duration-300 cursor-pointer'}
						onClick={handleApplyCopuon}
						disabled={activeCode === 'alphanedim' ? true : false}>
							{activeCode === 'alphanedim' ? 'Coupon applied' : 'Apply coupon'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartPage;
