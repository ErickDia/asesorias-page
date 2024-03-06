import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { requestApi } from '../../hooks/useRequestApi';
import { ListTrabajos } from '../listTrabajos/ListTrabajos';

export const InglesTrabajos = ({cursoiSelect, setCursoiSelect, setPdnSelect}) => {
    const navigate = useNavigate();
    const [trabajos, setTrabajos] = useState([])
    const {cursoi} = useParams();

    const onClickItem = (curso) => {
        navigate(`/ingles/${curso.cursoi_url}/${curso.trabajoi_url}`);
        setPdnSelect({...curso, trabajoi_temas: JSON.parse(curso.trabajoi_temas)});
    }

    useEffect(() => {
        requestApi({ url: `/api/v1/ingles/trabajos`, type: 'POST', data: {
            cursoi_url: cursoi
        }}).then(({ data }) => {
            // console.log(data);
            setTrabajos(data.reverse());
            setCursoiSelect({
                cursoi_nombre: data[0].cursoi_nombre,
                cursoi_url: data[0].cursoi_nombre,
            });
        });
    }, [])
    return (
        <main className='main-content'>
            <h1 className='main-content__title'>
                <span className='cursor-pointer' onClick={() => navigate(`/ingles`)}>INGLES</span>
                {" "}/{" "}
                {cursoiSelect.cursoi_nombre}
            </h1>
            <ListTrabajos 
                trabajos={trabajos.map((trabajo)=> {
                    return {
                        id: trabajo.trabajoi_id,
                        nombre: trabajo.trabajoi_nombre,
                        nuevo: trabajo.trabajoi_nuevo,
                        cupos: trabajo.trabajoi_cupos,
                        ...trabajo
                    }
                })} 
                onClickItem={onClickItem}/>
        </main>
    )
}
