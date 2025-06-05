"use client"


import React, { useState } from 'react'
import HeadingDesription from './HeadingDesription'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation'

function LogoTitle({onHandleInputChange}) {
    const searchParam=useSearchParams();
    // const title=searchParam?.get('title');
    const [title, setTitle]=useState(searchParam?.get('title')?? '');

  return (
    <div className='my-10'>
     <HeadingDesription
    title={Lookup.Logotitle}
     description={Lookup.LogotitleDesc}
     />

     <input type='text' placeholder={Lookup.InputTitlePlaceholder}
     className='p-4 border rounded-lg mt-5 w-full'
     defaultValue={title}
     onChange={(e)=>onHandleInputChange(e.target.value)}
     />
    </div>
  )
}

export default LogoTitle
