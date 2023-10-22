import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Demo from './Demo.jsx'
import'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Demo/>
  </React.StrictMode>,
)
