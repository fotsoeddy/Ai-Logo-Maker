import React from 'react'
import HeadingDesription from './HeadingDesription'
import Lookup from '@/app/_data/Lookup'

function LogoDesc({onHandleInputChange}) {
  return (
    <div className='my-10'>
      <HeadingDesription 
      title={Lookup.LogoDesTitle}
      description={Lookup.LogoDesDesc}
      />
      <input type='text' placeholder={Lookup.InputTitlePlaceholder}
     className='p-4 border rounded-lg mt-5 w-full'
     onChange={(e)=>onHandleInputChange(e.target.value)}
     />
    </div>
  )
}

export default LogoDesc
