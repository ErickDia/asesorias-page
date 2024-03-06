import React, { useEffect, useState } from 'react';
import { requestApi } from '../../hooks/useRequestApi';
import { useNavigate, useParams } from 'react-router-dom';
import { ListTrabajos } from '../listTrabajos/ListTrabajos';


export const AyudasTrabajos = ({carreraSelect, setCarreraSelect, cursoSelect, setCursoSelect, setTrabajoSelect}) => {

    const navigate = useNavigate();
    const {carrera, curso} = useParams();
    const [trabajos, settrabajos] = useState([])

    const onClickItem = (trabajo) => {
        setTrabajoSelect({...trabajo});
        navigate(`/ayudas/${carrera}/${curso}/${trabajo.trabajo_url}`);
    }

    useEffect(() => {
        requestApi({ url: `/api/v1/trabajos/curso_url`, type: 'POST', data: {
            carrera_url: carrera,
            curso_url: curso
        }}).then(({ data }) => {
            settrabajos(data.reverse());
            setCarreraSelect({
                carrera_nombre: data[0].carrera_nombre,
                carrera_url: data[0].carrera_url,
            })
            setCursoSelect({
                curso_nombre: data[0].curso_nombre,
                curso_url: data[0].curso_url,
              })
        });
    }, [])
  return (
    <main className='main-content'>
        <h1 className='main-content__title'>
            <span className='cursor-pointer' onClick={() => navigate(`/ayudas/${carreraSelect.carrera_url}`)}>{carreraSelect.carrera_nombre}</span>
            {" "}/ {cursoSelect.curso_nombre}
        </h1>
        <ListTrabajos 
            trabajos={trabajos.map((trabajo)=> {
                return {
                    id: trabajo.trabajo_id,
                    nombre: trabajo.trabajo_nombre,
                    nuevo: trabajo.trabajo_nuevo,
                    cupos: trabajo.trabajo_cupos,
                    ...trabajo,
                    trabajo_temas: JSON.parse(trabajo.trabajo_temas)
                }
            })} 
            onClickItem={onClickItem}/>
    </main>
  )
}
