import React from 'react'
import Navbar from './components/Navbar'
import Page1Content from './components/Page1Content'

const App = () => {

  const data = [
    {
      img:'https://plus.unsplash.com/premium_photo-1689607809841-cbbc3595f3fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D',
      info: '',
      status:'Satisfied',
      color:'royalblue'
    },
    {
      img:'https://images.unsplash.com/photo-1587837073080-448bc6a2329b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D',
      info: '',
      status:'Underserved',
      color:'orange'
    },
    {
      img:'https://images.unsplash.com/photo-1632435645786-29c478a68675?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMGltYWdlfGVufDB8fDB8fHww',
      info: '',
      status:'Underbanked',
      color:'lightseagreen'
    },
    {
      img:'https://images.unsplash.com/photo-1614943997331-01b6623d2249?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D',
      info: '',
      status:'Underserved',
      color:'orange'
    }
  ]
  return (
    <div className='px-9 py-6'>
      <Navbar />
      <Page1Content userData={data}/>
    </div>
  )
}

export default App