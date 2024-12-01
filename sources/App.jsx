import React from 'react'
import './App.css'
import Topbar from './Topbar'
import Navbar from './Navbar'
import Window from './Window'

function App() {

  return (
    <>
      <Topbar/>
      <div className="content">
        <Navbar/>
        <Window/>
      </div>
    </>
  )
}

export default App;
