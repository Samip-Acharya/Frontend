import React from 'react'
import Page1Left from './Page1Left.jsx'
import Page1Right from './Page1Right.jsx'


const Page1Content = (props) => {
  return (
    <div className='w-full h-[86vh] mt-10 flex gap-10 px-10 py-6'>
        <Page1Left/>
        <Page1Right userData={props.userData}/>
    </div>
  )
}

export default Page1Content