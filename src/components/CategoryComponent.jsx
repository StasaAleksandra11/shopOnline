import React, { useEffect, useState } from 'react';
import CategoryService from '../services/CategoryService';
import { useDispatch, useSelector } from 'react-redux';
import { saveAllCategoryAction } from '../store/categorySlice';

function CategoryComponent() {

  const {allCategory, isLoading} = useSelector((state) => state.categoryStore )
  const dispatch = useDispatch() 
  
  const[toggleActive, setToggleActive] = useState(false)

  function handleToggleCategory(){
     setToggleActive(!toggleActive)
  }

	useEffect(() => {
		CategoryService.getAllCategory()
			.then((res) => {
				dispatch(saveAllCategoryAction(res.data));
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className='bg-lightGray h-[100%] py-[20px] flex items-center'>
			<div className='container mx-auto flex items-center gap-[20px] h-full flex-col lg:flex-row'>
				<button onClick={handleToggleCategory} className='bg-mainBlue px-[20px] py-[10px] text-textWhite rounded-lg'>
					Show Category
				</button>
				{isLoading ? (
                  <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-[5px]'> 
					
                {toggleActive && allCategory.map((cat, index) => {
                 return <li key={index} className='w-[200px] bg-mainBlue text-textWhite text-center rounded-lg px-[16px] py-[8px] hover:bg-mainYellow transition-all duration-300 cursor-pointer '>{cat}</li>
                  })}
                  </ul>
                  
				) : (
					<div>Loading Category</div>
				)}
			</div>
		</div>
	);
}

export default CategoryComponent;
