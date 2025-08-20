import React from 'react'
import Header from './components/Header.jsx'
import FileForm from './components/FileForm.jsx'
import { printJson } from './printJson/printJson.jsx'
function App() {
  const data = {
    name: "Transcript Generator",
    description: "A tool to generate transcripts from audio files.",
    version: 1.0,

  }
  const formattedData = printJson(JSON.stringify(data, null, 2));

  return ( 
    <div className='bg-site h-screen text-center'>
        <Header/>
        <FileForm />
        <div className='text-left text-black bg-white w-1/2 m-auto mt-10 p-5 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-bold mb-4'>JSON Output:</h2>
          <pre dangerouslySetInnerHTML={{ __html: formattedData }}></pre>
          </div>
    </div>
  
    

  )
}

export default App
