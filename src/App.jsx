import React from 'react'
import Header from './components/Header.jsx'
import ClickMeButton from './components/ClickMeButton.jsx'
import FileForm from './components/FileForm.jsx'
function App() {

  return ( 
    <div className='bg-site h-screen'>
        <Header/>
        {/* <ClickMeButton/> */}
        <FileForm />
    </div>
  )
}

export default App
