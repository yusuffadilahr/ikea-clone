import Image from 'next/image'
import React from 'react'

const ProductCard = ({ imageUrl, name, price, category }) => {
    return (
        <div className='w-full h-fit bg-white px-4 pb-2'>
            <div className='w-full h-[300px] flex justify-center'>
                <Image className='w-[60%] object-cover' src={imageUrl} width={500} height={500} alt='Products' />
            </div>
            <div className='w-full'>
                <h1 className='font-semibold pt-2'>{name}</h1>
                <p className='text-sm text-neutral-500'>{category}</p>
                <p className='flex font-bold pt-3'><span className='justify-start flex items-start text-xs'>$</span>{price}</p>
            </div>
        </div>
    )
}

export default ProductCard
