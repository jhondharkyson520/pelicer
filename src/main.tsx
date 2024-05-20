import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/index.tsx'
import Header from './components/Header/index.tsx'
import Footer from './components/Footer/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Home />
    <Footer/>
  </React.StrictMode>,
)
