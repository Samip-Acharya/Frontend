import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import HeroText from './HeroText';
const Page1Left = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
        <HeroText/>
        <ArrowUpRight size={130}/>
    </div>
  )
}

export default Page1Left