import React from 'react'
import Lookup from '../_data/Lookup'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className='flex items-center mt-24 flex-col gap-5'>
    <h2 className='text-primary text-5xl text-center font-bold'> {Lookup.HeroHeading}</h2>
     <h2 className=' text-5xl text-center font-bold '>{Lookup.HeroSubheading}</h2>
    <p className='text-lg text-gray-500 text-center'> {Lookup.Herodesc}</p>


            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-2xl mt-10">
        <input
            placeholder={Lookup.InputTitlePlaceholder}
            className="p-3 border rounded-md flex-1 shadow-md"
        />
        <Button className="flex-1 px-6 py-3">Get Started</Button>
        </div>


    </div>
    
  )
}
