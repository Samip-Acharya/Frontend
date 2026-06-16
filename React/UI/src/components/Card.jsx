import React from 'react'

const Card = (props) => {
  return (
    <div className='shrink-0 w-90 h-full rounded-3xl overflow-hidden relative' >
        <img className='w-full h-full object-cover' src={props.img} alt="" />
        <div className='h-full absolute left-0 top-0 py-6 px-9 flex flex-col justify-between items-start'>
            <h2 className='w-10 h-10 text-2xl font-medium bg-white flex justify-center items-center rounded-full p-5'>{props.id+1}</h2>
            <div>
                <p className='text-white text-shadow-gray-700 text-shadow-sm leading-[2]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus soluta labore et pariatur non quibusdam nihil cupiditate quod rerum quisquam!</p>
                <button className='mt-10 rounded-full px-6 py-2 text-white font-medium' style={{backgroundColor:props.color}}>{props.status}</button>
            </div>
        </div>
    </div>
  )
}

export default Card