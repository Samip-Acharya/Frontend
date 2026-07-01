import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [userData,setUserData] = useState([])
  const [index,setIndex] = useState(1)
  const getData = async ()=>{
    let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }
  useEffect(()=>{getData()},[index])
    let content = "Loading..."
    if(userData.length>0){
      content = userData.map((elem)=>{
        return <img src={elem.download_url} className="h-60 w-60 rounded object-cover bg-center border-white border-2 hover:scale-105 transition-transform" alt="" />
      })
  }
  return (
    <div className='p-4 bg-black text-white h-screen w-full'>
      <h1 className='font-bold text-6xl mb-10 text-center'>Gallery</h1>
      <div className='h-[70vh] flex flex-wrap gap-3 content-center justify-center'>
        {content}
      </div>
      <div className='text-center'>
        <button style = {{opacity:index==1?0.6:1}}className = 'py-2 px-4 m-2 bg-amber-500 font-semibold rounded cursor-pointer active:scale-95 'onClick={()=>{
          
          if(index>1){
            setUserData([])
            setIndex(index-1)
          }
          }}>Prev</button>
        <span className='font-bold text-xl'>Page {index}</span>
        <button className = 'py-2 px-4 m-3 bg-amber-500 font-semibold rounded cursor-pointer active:scale-95 'onClick={()=>{
          setUserData([])
          setIndex(index+1)
          }}>Next</button>
      </div>
    </div>
  )
}

export default App