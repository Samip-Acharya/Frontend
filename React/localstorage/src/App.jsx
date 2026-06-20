import React from 'react'

const App = () => {
  // const obj = {name:"Samip",age:18}
  // localStorage.setItem('user',JSON.stringify(obj))
  const obj = JSON.parse(localStorage.getItem('user'))
  console.log(obj)
  // localStorage.setItem('dummyKey','dummyValue')
  // localStorage.removeItem('dummyKey')
  return (
    <div>App</div>
  )
}

export default App  