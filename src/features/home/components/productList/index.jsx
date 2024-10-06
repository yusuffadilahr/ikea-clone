import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
    const produkList = [
        { id: 1, name: 'https://www.ikea.com/global/en/images/PH_198125_c9fe6151f6.jpg?f=sg', caption: 'Workspace solutions' },
        { id: 2, name: 'https://www.ikea.com/global/en/images/Alex_Seb_47362_672add2ea9.jpg?f=g', caption: 'An open invitation' },
        { id: 3, name: 'https://www.ikea.com/global/en/images/PH_196638_71139bdd52.jpg?f=g', caption: 'The BRÖGGAN collection' },
        { id: 4, name: 'https://www.ikea.com/global/en/images/PH_198953_7c578823f8.jpg?f=xxxl', caption: 'The MÄVINN collection' },
      ]

    return (
        <section className="flex flex-col w-full justify-center h-fit pt-5">
            {/* List Product */}
            <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-5 h-fit mb-10">
                {produkList.map((item, i) => (
                    <div className="w-full relative" key={i}>
                        <Image src={item.name} width={500} height={500} alt="Produk list" className="h-[40vh] md:h-[60vh] w-full object-cover rounded-xl" />
                        <h1 className="font-semibold text-sm">{item.caption}</h1>
                        <Link href='/products' className="font-bold text-base md:text-2xl hover:text-neutral-600">Learn More...</Link>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
                <div className="h-[80vh] w-full relative flex">
                    <Image width={500} height={500} src='https://www.ikea.com/global/en/images/PH_199178_7298adbed8.jpg?f=xxxl' alt="produk-img" className="w-full h-full object-cover rounded-xl" />
                    <p className="absolute flex bottom-20 pl-5 text-white font-semibold text-base md:text-lg">
                        New reasons to love rattan
                    </p>
                    <h1 className="font-bold text-2xl md:text-3xl bottom-10 pl-5 text-white absolute flex">
                        Woven beauties
                    </h1>
                </div>
                <div className="h-[80vh] w-full relative flex">
                    <Image width={500} height={500} src='https://www.ikea.com/global/en/images/Bedroom_1971_1b40a9c63c.jpg?f=xxxl' alt="produk-img" className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute flex pl-5 bottom-10 flex-col">
                        <p className="text-white font-semibold text-base md:text-lg">
                            New reasons to love rattan
                        </p>
                        <h1 className="font-bold text-2xl md:text-2xl max-w-[450px] text-white">
                            IKEA bedrooms through the years
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductList
