import React from 'react'

const CardContent = ({
    children,
    mb = 'mb-20',
    grid = 'grid-cols-2',
    lg = 'w-[75%]',
    mt = 'mt-10 md:mt-24'
}) => {
    return (
        <section className={`flex justify-center items-center w-full ${mt} ${mb} h-fit lg:px-10`}>
            <div className={`w-[95%] lg:${lg} h-fit flex`}>
                <div className={`grid grid-cols-1 md:${grid} w-full gap-3`}>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default CardContent
