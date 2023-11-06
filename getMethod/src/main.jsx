import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GetEx3 from './Components/GetEx3.jsx'
import PostSnake from './Components/PostEx1.jsx'
import DeleteEx from './Components/DeleteEx1.jsx'
import DeleteEx1 from './Components/DeleteEx1.jsx'
import PutEx1 from './Components/PutEx1.jsx'
import GetSpring from './Components/GetSpring.jsx'
import PostEx1 from './Components/PostEx1.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GetEx3 />
    <PostEx1 />
    <DeleteEx1 />
    
  </React.StrictMode>,
)
