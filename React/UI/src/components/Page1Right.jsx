import React from 'react'
import Card from './Card'
const Page1Right = (props) => {
  return (
    <div id="page-1-right" className='w-2/3 h-full flex flex-nowrap gap-5 overflow-x-auto'>
      { props.userData.map((user,idx)=><Card key={idx} id = {idx} img={user.img} status = {user.status} color={user.color}/>) }
    </div>
  )
}

export default Page1Right