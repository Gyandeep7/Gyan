import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Parent from './components/Parent.jsx'
import Login from "./components/Login.jsx"
import Display from './components/Display.jsx'
import Employee from './components/Employee.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Employee />
  </React.StrictMode>,
)
