import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data,setData] = useState([])
  const getData = async ()=>{
    // const response = await fetch("https://jsonplaceholder.typicode.com/users")
    // const data = await response.json()
    // console.log(data)
    const response = await axios.get("https://picsum.photos/v2/list")
    console.log(response.data)
    setData(response.data)
  }
  return (
    <>
      <button onClick={getData}>Get Data</button><br/>
      {data.map((elem,idx)=>{
        return <img src={elem.download_url} alt="" />
      })}
    </>
  )
}

export default App