import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './page/Contact.jsx'
import Home from './page/Home.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
    {/* <Contact/> */}
    {/* <Home/> */}
  </>,
)
