import React from 'react'

const ProductLayout = ({ children }) => {
    return (
        <div className='w-full h-fit flex mt-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-36 w-full gap-5'>
                {children}
            </div>
        </div>
    )
}

export default ProductLayout
