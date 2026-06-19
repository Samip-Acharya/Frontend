import React, { useState } from 'react'

const App = () => {
  const [title,setTitle] = useState('')
  const [details,setDetails] = useState('')
  const [tasks,setTasks] = useState([])

  const handleSubmission = (e)=>{
    e.preventDefault()
    setTasks(prev=>[...prev,{title,details}])
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx)=>{
    const updatedTasks = [...tasks]
    updatedTasks.splice(idx,1)
    setTasks(updatedTasks)
  }
  return (
    <div className='flex h-screen w-full bg-black text-white'>
        <form onSubmit={(e)=>{handleSubmission(e)}} className="w-2/5 flex flex-col items-start gap-5 px-6 py-4 h-full border-r" action="">
            <h1 className='text-3xl font-bold mb-5 w-full text-center'>Add Notes</h1>
            <input className='outline-none border-2 rounded w-full px-2 py-1 font-medium' type="text" placeholder='Enter Notes Heading' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <textarea className='outline-none border-2 rounded w-full h-50 px-2 py-1 font-medium' placeholder="Write Details Here" value={details} onChange={(e)=>{setDetails(e.target.value)}}>
            </textarea>
            <button className='bg-white text-black rounded w-full px-2 py-1 font-semibold active:scale-95'>Add Note</button>
        </form>
        <div className='w-3/5 px-6 py-4'>
            <h1 className='text-3xl font-bold mb-7 w-full text-center'>Recent Notes</h1>
            <div className='flex flex-wrap content-start justify-start gap-4 h-[80vh] overflow-auto'>
              {tasks.map((task,idx)=>{
              return  (<div key={idx} className='flex flex-col justify-between w-60 h-70 px-14 py-10 text-black rounded bg-[url(https://png.pngtree.com/png-vector/20230102/ourmid/pngtree-beautiful-aesthetic-pastel-sticky-notes-png-image_6548934.png)] bg-cover bg-center'>
                <div>
                  <h2 className='font-bold underline text-xl'>{task.title}</h2>
                  <p className='text-gray-700 text-sm indent-10 font-semibold wrap-anywhere leading-tight'>{task.details}</p>
                </div>
                <button onClick={(e)=>{deleteNote(idx)}} className='bg-red-400 px-2 py-1 rounded active:scale-95'>Delete</button>
              </div>)
            })}
            </div>

        </div>
    </div>
  )
}

export default App