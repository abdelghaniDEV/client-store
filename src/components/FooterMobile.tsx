import { Heart, LayoutDashboard, Search, ShoppingBag } from 'lucide-react'
import React from 'react'

export default function FooterMobile() {
  return (
    <div className='fixed bottom-0 z-[1000] bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-full pt-2'>
      <div className='grid grid-cols-4 items-center container'>
        <div className='flex flex-col items-center '>
          <LayoutDashboard className='w-5 h-5' />
          <span>Shop</span>
        </div>
        <div className='flex flex-col items-center '>
          <Search className='w-5 h-5' />
          <span>Search</span>
        </div>
        <div className='flex flex-col items-center '>
          <Heart className='w-5 h-5' />
          <span>Wishlist</span>
        </div>
        <div className='flex flex-col items-center '>
          <ShoppingBag className='w-5 h-5' />
          <span>Cart</span>
        </div>
      </div>
    </div>
  )
}

