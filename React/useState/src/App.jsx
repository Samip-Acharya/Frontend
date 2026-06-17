import React, { useState } from 'react'

const App = () => {
  const [obj,setObj] = useState({name:'Lambda',age:18})
  const [num,setNum] = useState(0)
  function increase(){
    setNum(num+1)
  }
  function decrease(){
    setNum(prev=>prev-1)
    setNum(prev=>prev-1)

  }
  function changeUser(){
    setObj(prev=>({...prev,name:'Theta'}))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={changeUser}>Change User</button>
      <h1>{obj.name}, {obj.age}</h1>
    </div>
  )
}

export default App