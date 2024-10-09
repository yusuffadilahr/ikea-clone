'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const DataHistory = ({ pxSelect }) => {
    const router = useRouter()

    const setDataRoute = (values) => {
        console.log(values)
        router.push(`/about/${values}`)
        router.refresh()
    }

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

    return (
        <div className='flex w-full justify-center items-center'>
            <div className='hidden md:flex w-[60%] items-center justify-center gap-2 text-sm'>
                {arrayHistory.map((item, i) => (
                    <Link href={item.url} key={i} className='py-4 px-4 w-full font-bold bg-neutral-100 text-center rounded-full'>
                        {item.year}
                    </Link>
                ))}
            </div>
            <div className={`w-full flex ${pxSelect} md:hidden h-fit`}>
                <select name="" id="" className='w-full py-3 text-sm flex px-2 border' onChange={(e) => setDataRoute(e.target.value)}>
                    <option value="">-- Our History --</option>
                    {arrayHistory.map((item, i) => (
                        <option key={i} className='py-4 px-4 w-full font-bold bg-neutral-100 rounded-full'>
                            {item.year}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default DataHistory
