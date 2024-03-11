import { useState } from 'react'
import { MainPage } from './components/main/MainPage'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/navBar/NavBar'
import { AyudasCursos } from './components/ayudasCursos/AyudasCursos'
import { AyudasTrabajos } from './components/ayudasTrabajos/AyudasTrabajos'
import { AyudasTrabajoDetalle } from './components/ayudasTrabajoDetalle/AyudasTrabajoDetalle'
import { InglesCursos } from './components/pdns/InglesCursos'
import { InglesPDNTrabajo } from './components/pdns/InglesPDNTrabajo'
import { Tienda } from './components/tienda/Tienda'
import { Stuff } from './components/stuff/Stuff'
import { InglesTrabajos } from './components/pdns/InglesTrabajos'
import { AyudasTrabajosDirecto } from './components/ayudasTrabajos/AyudasTrabajosDirecto'
import { InglesTrabajoDirecto } from './components/pdns/InglesTrabajoDirecto'



function App() {
  
  const [carreras, setcarreras] = useState([])
  const [carreraSelect, setCarreraSelect] = useState({
    carrera_id: 0,
    carrera_nombre: "",
    carrera_url: ""
  })

  const [cursoSelect, setCursoSelect] = useState({
      curso_nombre: "",
      curso_url: "",
  })

  const [trabajoSelect, setTrabajoSelect] = useState({
    curso_id: 0,
    trabajo_id: 0,
    trabajo_nombre: "",
    trabajo_url: "",
    trabajo_nuevo: 0,
    trabajo_cupos: 0,
    trabajo_resultados: "",
    trabajo_temas: [],
    trabajo_precio: "",
  })

  const [cursoiSelect, setCursoiSelect] = useState({
    cursoi_nombre: "",
    cursoi_url: "",
})
  const [pdnSelect, setPdnSelect] = useState({
    cursoi_id: 0,
    trabajoi_id: 0,
    trabajoi_nombre: "",
    trabajoi_url: "",
    trabajoi_nuevo: 0,
    trabajoi_cupos: 0,
    trabajoi_resultados: "",
    trabajoi_temas: [],
    trabajoi_precio: "",
  })

  return (
    <>
      <div className='App'>
      <NavBar carreras={carreras} setCarreraSelect={setCarreraSelect} setcarreras={setcarreras}/>
      <Routes>
        <Route path='/' element = {<MainPage/>}/>
        <Route path='/ayudas/:carrera' element = {
          <AyudasCursos carreraSelect = {carreraSelect} setCarreraSelect={setCarreraSelect} setCursoSelect={setCursoSelect}/>
        }/>
        <Route path='/ayudas/:carrera/:curso' element = {
          <AyudasTrabajos 
            carreraSelect = {carreraSelect}
            setCarreraSelect={setCarreraSelect}
            cursoSelect={cursoSelect}
            setCursoSelect={setCursoSelect}
            setTrabajoSelect={setTrabajoSelect}/>}
        />
        <Route path='/ayudas/d/:carrera/:curso' element = {
          <AyudasTrabajosDirecto
            carreraSelect = {carreraSelect}
            setCarreraSelect={setCarreraSelect}
            cursoSelect={cursoSelect}
            setCursoSelect={setCursoSelect}
            trabajoSelect = {trabajoSelect}
            setTrabajoSelect={setTrabajoSelect}/>}
        />
        <Route path='/ayudas/:carrera/:curso/:trabajo' element = {
          <AyudasTrabajoDetalle
          carreraSelect = {carreraSelect}
          setCarreraSelect = {setCarreraSelect}
          cursoSelect = {cursoSelect}
          setCursoSelect = {setCursoSelect}
          trabajoSelect = {trabajoSelect}
          setTrabajoSelect = {setTrabajoSelect}/>}
        />
        <Route path='/ingles' element = {<InglesCursos setCursoiSelect={setCursoiSelect}/>}/>
        <Route path='/ingles/:cursoi' element = {<InglesTrabajos cursoiSelect={cursoiSelect} setCursoiSelect={setCursoiSelect} setPdnSelect={setPdnSelect}/>}/>
        <Route path='/ingles/:cursoi/:trabajoi' element = {<InglesPDNTrabajo pdnSelect={pdnSelect} setPdnSelect={setPdnSelect}/>}/>
        <Route path='/ingles/d/:cursoi' element = {<InglesTrabajoDirecto pdnSelect={pdnSelect} setPdnSelect={setPdnSelect}/>}/>
        <Route path='/tienda' element = {<Tienda />}/>
        <Route path='/staff' element = {<Stuff />}/>

      </Routes>
    </div>

    </>
    
  )
}

export default App
