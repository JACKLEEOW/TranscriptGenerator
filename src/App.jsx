import React from 'react'
import Header from './components/Header.jsx'
import FileForm from './components/FileForm.jsx'
import { printJson } from './printJson/printJson.jsx'
function App() {
  return ( 
    <div className='bg-site h-screen flex-col'>
        <Header/>
        <FileForm />
    </div>
  
    

  )
}

export default App
