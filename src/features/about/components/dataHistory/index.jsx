'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const DataHistory = ({ arrayHistory, pxSelect }) => {
    const router = useRouter()

    const setDataRoute = (values) => {
        console.log(values)
        router.push(`/about/${values}`)
        router.refresh()
    }

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
