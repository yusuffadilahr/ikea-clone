import React from 'react'

const CardGridResponsive = ({ children }) => {
    return (
        <section className='flex justify-center items-center w-full mt-10 mb-10 md:mb-0 lg:mb-10 h-fit lg:px-10'>
            <div className='md:w-[95%] lg:w-[75%] w-[85%] h-fit flex'>
                <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-3'>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default CardGridResponsive
