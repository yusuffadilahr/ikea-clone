'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const useAboutHook = () => {
    const router = useRouter()

    const arrayHistory = [
        { id: 1, year: '1940s', url: '/about/1940s' },
        { id: 2, year: '1950s', url: '/about/1950s' },
        { id: 3, year: '1960s', url: '/about/1960s' },
        { id: 4, year: '1970s', url: '/about/1970s' },
        { id: 5, year: '1980s', url: '/about/1980s' },
        { id: 6, year: '1990s', url: '/about/1990s' },
        { id: 7, year: '2000s', url: '/about/2000s' },
        { id: 8, year: '2010s', url: '/about/2010s' },
        { id: 9, year: '2020s', url: '/about/2020s' }
    ]

    const setDataRoute = (values) => {
        console.log(values)
        router.push(`/about/${values}`)
        router.refresh()
    }
    
    return {
        setDataRoute, arrayHistory
    }
}

export default useAboutHook
