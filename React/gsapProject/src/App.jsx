import React from 'react'
import Navbar from './components/Navbar'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
const App = () => {

  return (
   <main className='bg-[#e4e2e2] min-h-screen px-12 py-8 overflow-hidden'>
     <Navbar />
     <Page1 />
     <Page2 />
   </main>
  )
}

export default App