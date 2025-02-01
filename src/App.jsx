import { useState } from 'react'
import Weather from './weather.jsx';
import React from 'react'
import './App.css'

function App() {

  return (
    <div className="screen" style={{backgroundImage: 
            'url(https://i.pinimg.com/736x/ee/c4/16/eec4169c5e89189f59d86f21829e0454.jpg)'}}>
      <Weather />
    </div>
  )
}

export default App
