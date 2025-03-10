
import { Product } from '@/types'
import Link from 'next/link'
import React from 'react'

type productCartProps = {
  product : Product
}

export default function ProductCartDetails({product} : productCartProps) {
  return (
    <Link href={`/products/${product._id}`} className="pt-2">
    <h2 className="text-[15px] md:text-[18px] leading-[20px]">{product.name}</h2>
    <div className="flex items-center gap-3">
      <p className="font-[500]">${product.price}</p>
      {product.discount && <p className="font-[500] line-through text-red-500">{product.discount}</p>}
    </div>
  </Link>
  )
}
