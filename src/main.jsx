import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/styles.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Panel } from './Panel.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/panel/*' element={<Panel />} />
          <Route path='/*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
