import React from 'react'
import './App.css'
import Canvas3D from './canvas'
import Navbar from './components/Navbar/'
import GlobalStyle from './styles/GlobalStyles'
import Portfolio from './routes/Portfolio'
import Contact from './routes/Contact'
import { AngleContextProvider } from './context/AngleContext'

const App = () => {
  return (
    <AngleContextProvider>
      <GlobalStyle />
      <Navbar />
      <Canvas3D />
      <Portfolio />
      <Contact />
    </AngleContextProvider>
  )
}

export default App
