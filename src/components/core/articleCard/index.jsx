import React from 'react'

const CardArticle = ({ children, bgColor }) => {
    return (
        <section className={`flex justify-center ${bgColor} items-center w-full mt-20 h-fit lg:px-10`}>
            <div className='w-[95%] lg:w-[75%] h-fit flex'>
                <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-3'>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default CardArticle
