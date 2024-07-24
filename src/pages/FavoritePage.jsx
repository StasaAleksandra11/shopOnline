import React from 'react'
import { useSelector } from 'react-redux'
import CardComponent from '../components/CardComponent'


function FavoritePage() {
  const {allFavorite} = useSelector((state) => state.favoriteStore)
  return (

    <div className='container mx-auto mt-[50px] flex gap-[20px]'>
       {allFavorite.map((favoriteItem) => {
        return <CardComponent key={favoriteItem.id} product={favoriteItem} />
         
       })}
    </div>
  )
}

export default FavoritePage