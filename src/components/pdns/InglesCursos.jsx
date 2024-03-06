import React, { useEffect, useState } from 'react';
import { requestApi } from '../../hooks/useRequestApi';
import { useNavigate, useParams } from 'react-router-dom';
import { ListTrabajos } from '../listTrabajos/ListTrabajos';


export const InglesCursos = ({setCursoiSelect}) => {

    const navigate = useNavigate();
    const [cursos, setCursos] = useState([])

    const onClickItem = (curso) => {
        navigate(`/ingles/${curso.cursoi_url}`);
        setCursoiSelect({...curso});
    }

    useEffect(() => {
        requestApi({ url: `/api/v1/ingles/cursos`, type: 'GET'}).then(({ data }) => {
            setCursos(data.reverse());
        });
    }, [])
    return (
        <main className='main-content'>
            <h1 className='main-content__title'>INGLES</h1>
            <ListTrabajos 
                trabajos={cursos.map((curso)=> {
                    return {
                        id: curso.cursoi_id,
                        nombre: curso.cursoi_nombre,
                        nuevo: 0,
                        cupos: -1,
                        ...curso
                    }
                })} 
                onClickItem={onClickItem}/>
        </main>
    )
}
