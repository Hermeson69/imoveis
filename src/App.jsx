
import { useState } from 'react'
import Navbar from './components/Navbar'
import Global from './styles/Global'
import Banner_Total from './components/Banner'

function App() {

  return (
    <>
      <div>
        <Global />
        <Navbar />
        <Banner_Total/>
      </div>
     
    </>
  )
}

export default App
