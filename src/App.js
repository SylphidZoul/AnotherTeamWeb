import React from 'react'
import './App.css'
import Canvas3D from './canvas'
import Navbar from './components/Navbar'
import GlobalStyle from './assets/styled-components/GlobalStyles'
import SectionBackground from './components/SectionBackground'
import { AngleContextProvider } from './context/AngleContext'

const App = () => {
  return (
    <AngleContextProvider>
      <GlobalStyle />
      <Navbar />
      <Canvas3D />
      <SectionBackground />
    </AngleContextProvider>
  )
}

export default App
