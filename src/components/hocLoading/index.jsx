'use client'

import React, { useEffect, useState } from 'react'

const GlobalLoading = ({ children }) => {
    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoad(false)
        }, 2000)
    }, [])

    if (isLoad) return <h1 className='w-full h-screen text-neutral-300 animate-pulse flex justify-center items-center md:text-base text-sm lg:text-xl'>Loading....</h1>

    return (
        <>
            {children}
        </>
    )
}

export default GlobalLoading
