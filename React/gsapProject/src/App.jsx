import React from 'react'
import Navbar from './components/Navbar'
import Page1 from './components/Page1'
const App = () => {

  return (
   <main className='bg-[#e4e2e2] min-h-screen px-12 py-8'>
     <Navbar />
     <Page1 />
   </main>
  )
}

export default App