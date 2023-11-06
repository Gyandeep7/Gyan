import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Subchild from './components/Subchild.jsx'
import Parent from './components/Parent.jsx'
import Singleclick from './components/Singleclick.jsx'
import Events1 from './components/Events1.jsx'
import Events2 from './components/Events2.jsx'
import Double from './components/Double.jsx'
import Doubleclick from './components/Doubleclick.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Doubleclick />
  </React.StrictMode>,
)
