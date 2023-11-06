import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Parent from './components/Parent.jsx'
import { BrowserRouter as} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BR>
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
  </BR>
  ,
)
