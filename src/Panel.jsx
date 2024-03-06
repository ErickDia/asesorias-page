import React, { useState } from 'react'
import { NavBar } from './components/navBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import { FormPDN } from './components/panel/pdn/FormPDN'

export const Panel = () => {
  const [carreras, setcarreras] = useState([])
  const [carreraSelect, setCarreraSelect] = useState({
    carrera_id: 0,
    carrera_nombre: "",
    carrera_url: ""
  })
  return (
    <div className='App'>
      <NavBar carreras={carreras} setCarreraSelect={setCarreraSelect} setcarreras={setcarreras} panel={'/panel'}/>
      <Routes>

        <Route path='/ingles_pdn' element = {<FormPDN />}/>
      </Routes>
    </div>
  )
}
