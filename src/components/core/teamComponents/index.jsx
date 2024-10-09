'use client'

import CardContent from '@/components/core/cardContent'
import CardBodyImage from '@/components/core/cardContent/cardBodyImage'
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'


const TeamComponents = ({ hidden }) => {
    const [dataUser, setDataUser] = useState([])
    const onFetchData = async () => {
        try {
            let res = await axios.get('https://randomuser.me/api/?results=6')
            setDataUser(res.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onFetchData()
    }, [])



    return (
        <section className={`w-full h-fit ${hidden} justify-center py-5 pb-14 bg-black mt-14 md:mt-10 lg:mt-14 rounded-xl md:px-5 lg:px-32`}>
            <div className='w-full md:px-10 px-3 lg:px-14 py-5'>
                <h1 className='text-base md:text-3xl lg:text-4xl font-bold text-white'>Our Team - <span>IKEA Group management team</span></h1>
                <p className='text-white font-bold lg:text-base md:text-sm text-xs'>The members of the Inter IKEA Group management team are:</p>
            </div>
            <CardContent mt="mt-0" lg="w-full" grid='grid-cols-3 md:px-5' mb='2'>
                {dataUser.map((item, i) => (
                    <CardBodyImage rounded='rounded-none' src={item.picture.large} caption={`${item.name.title} ${item.name.first}`} height='h-[70vh]' heightContainer='h-[70vh]' key={i} />
                ))}
            </CardContent>
        </section>
    )
}

export default TeamComponents
