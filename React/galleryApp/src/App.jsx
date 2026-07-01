import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [userData,setUserData] = useState([])
  const [index,setIndex] = useState(1)
  const [isOpen,setIsOpen]  = useState(false)
  const [selectedImage,setSelectedImage] = useState("")
  const [pointer,setPointer] = useState(0)
  const getData = async ()=>{
    let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }
  const showImage =(e,idx)=>{
      setPointer(idx)
      setIsOpen(true)
      setSelectedImage(userData[idx].download_url)
  }

useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "ArrowRight") {
        setPointer((prev) => {
          if (prev < userData.length - 1) {
            const newIndex = prev + 1;
            setSelectedImage(userData[newIndex].download_url);
            return newIndex;
          }

          return prev;
        });
      }

      if (e.key === "ArrowLeft") {
        setPointer((prev) => {
          if (prev > 0) {
            const newIndex = prev - 1;
            setSelectedImage(userData[newIndex].download_url);
            return newIndex;
          }

          return prev;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, userData]);

  useEffect(()=>{getData()},[index])
    let content = "Loading..."
    if(userData.length>0){
      content = userData.map((elem,idx)=>{
        return <img key={idx} onClick = {e=>{showImage(e,idx)}} src={elem.download_url} className="h-60 w-60 rounded object-cover bg-center border-white border-2 hover:scale-105 transition-transform" alt="" />
      })
  }
  return (
    <div className='p-4 bg-black text-white h-screen w-full'>
      <h1 className='font-bold text-6xl mb-10 text-center'>Gallery</h1>
      <div className={`fixed h-[80vh] w-[60vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}>
          <img className = 'h-full w-full bg-center bg-cover'src={selectedImage} alt="" />

          <div onClick = {()=>{
              setPointer(0)
              setIsOpen(false)
              setTimeout(()=>{setSelectedImage("")},300)
          }} className='absolute right-2 top-2 text-lg cursor-pointer text-red-600 bg-white p-2 h-8 w-8 rounded-full flex justify-center items-center hover:scale-110'>X</div>
      </div>
      <div className={`h-full w-full fixed left-0 top-0 z-20 backdrop-blur-md transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}></div>
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