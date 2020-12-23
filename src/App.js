import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Canvas3D from './canvas'
import Navbar from './components/Navbar/'
import GlobalStyle from './styles/GlobalStyles'

const Portfolio = lazy(() => import('./routes/Portfolio'))
const About = lazy(() => import('./routes/About'))
const Contact = lazy(() => import('./routes/Contact'))

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Canvas3D />
      <Suspense fallback={null}>
        <Switch>
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
