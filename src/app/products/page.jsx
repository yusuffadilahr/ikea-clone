import ProductCard from '@/features/products/components/productList/productCard'
import ProductLayout from '@/features/products/components/productList/productLayout'
import useDataProduct from '@/features/products/hooks/useDataProduct'
import Image from 'next/image'
import React from 'react'

const Page = () => {
    const { ikeaOutdoorFurnitureProducts, ikeaWorkspaceProducts } = useDataProduct()

    return (
        <main className='w-full pt-10 md:pt-20 lg:pt-28 px-4 md:px-7 lg:px-10 h-fit bg-white'>
            <section className='w-full h-fit'>
                <div className='w-full flex flex-row gap-5 h-96'>
                    <Image className='lg:w-[60%] object-cover object-top' src={'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1664514613621_0_0.webp'} width={500} height={500} alt='Products' />
                    <Image className='lg:w-[60%] lg:block md:block hidden object-cover object-bottom' src={'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1664514613830_0_1.webp'} width={500} height={500} alt='Products' />
                </div>
                <div className='font-bold w-full pt-5 lg:px-20'>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl pb-6'>Products</h1>
                    <p className='font-normal lg:max-w-[60%]'>Get inspired and find products for your home. We have a wide range of products in every style, from vintage dressers to modern kitchens. We also pay attention to the little details that make all the difference - thats why our range of home accessories including rugs, candles and picture frames are here to put the finishing touches on your decor.</p>
                </div>
                <div className='pt-10 lg:px-20 font-bold w-full'>
                    <h1 className='text-2xl pt-10'>Workspace Product</h1>
                </div>
                <ProductLayout>
                    {ikeaWorkspaceProducts.map((item, i) => (
                        <ProductCard name={item.name} imageUrl={item.imageUrl} category={item.description} price={item.price} key={i} />
                    ))}
                </ProductLayout>
                <div className='pt-10 lg:px-20 font-bold w-full'>
                    <h1 className='text-2xl pt-10'>Outdoor Product</h1>
                </div>
                <ProductLayout>
                    {ikeaOutdoorFurnitureProducts.map((item, i) => (
                        <ProductCard name={item.name} imageUrl={item.imageUrl} category={item.description} price={item.price} key={i} />
                    ))}
                </ProductLayout>
            </section>
        </main>
    )
}

export default Page
