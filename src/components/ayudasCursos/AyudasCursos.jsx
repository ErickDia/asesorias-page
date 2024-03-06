import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { requestApi } from '../../hooks/useRequestApi';
export const AyudasCursos = ({carreraSelect, setCarreraSelect, setCursoSelect}) => {
    
    const navigate = useNavigate();
    const {carrera} = useParams();
    const [cursos, setcursos] = useState([])


    const onClickItem = (curso) => {
        setCursoSelect(curso);
        console.log(carrera);
        if (carrera === 'coursera') {
            navigate(`/ayudas/d/${carrera}/${curso.curso_url}`);

        } else {
            navigate(`/ayudas/${carrera}/${curso.curso_url}`);
        }
    }


    useEffect(() => {
        requestApi({ url: `/api/v1/cursos/carrera_url`, type: 'POST', data: {
            carrera_url: carrera
        }}).then(({ data }) => {
            setcursos(data);
            if(carreraSelect.carrera_id == 0){
                setCarreraSelect({
                    carrera_nombre: data[0].carrera_nombre,
                })
            }
            
        });
    }, [carreraSelect])



    
  return (
    <main className='main-content'>
        <h1 className='main-content__title'>{carreraSelect.carrera_nombre}</h1>
        {
             
                <ul className='grid'>
                    {
                        cursos.map((curso) => {
                            return (
                                <li className='bg-white-shadow card-curso-ayuda' onClick={() => onClickItem(curso)} key={curso.curso_id}>
                                    <article>
                                        <div className='card-curso-ayuda__image'>
                                            <img src={`/images/cursos/${curso.curso_url}.png`} alt={curso.curso_url} />
                                        </div>
                                        <div className='card-curso-ayuda__info'>
                                            <h1>{curso.curso_nombre}</h1>
                                            <h2>{carreraSelect.carrera_nombre}</h2>
                                        </div>

                                    </article>
                                </li>
                            )
                        })
                    }
                </ul>
            
        }
        
    </main>
  )
}
