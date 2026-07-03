import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const Card = (props) => {
    const isBlack = (Math.floor(props.number/2)%2==0 && props.number%2==1) || (Math.floor(props.number/2)%2==1 && props.number%2==0)
    const row = Math.floor(props.number/2)
    const col = props.number%2
  return (
    <div className={`row_${row} col_${col} flex justify-between w-[45vw] border-2 h-65 border-black rounded-3xl shadow-[0_7px_0_0_black] py-6 pl-12 pr-3 ${isBlack ? "bg-black" : "bg-transparent"}`}>
        <div className='h-full w-1/3 flex flex-col justify-between items-start'>
            <h2 className= {`font-semibold text-3xl ${isBlack ? "bg-white" : "bg-[#AFE386]"} w-fit leading-tight rounded-lg`}>{props.title}</h2>
           <div className='flex gap-4 items-center'>
                <ArrowUpRight size={40} strokeWidth={5} color={`${isBlack ? "black" : "white"}`} className={`${isBlack ? "bg-white" : "bg-black"} p-2 rounded-full`}/>
                <p className={`font-semibold ${isBlack ? "text-white" : "text-black"}`}>Learn More</p>
           </div>
        </div>
        <div className='flex justify-end items-center h-full w-2/3 p-5'>
            <img src={props.imgSrc} className={`h-50 rounded-full w-50 object-cover object-center ${isBlack ? "border-white" : "border-black"} border-2`}alt="" />
        </div>
    </div>
  )
}

export default Card 