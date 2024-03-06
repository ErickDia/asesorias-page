import React, { useEffect, useState } from 'react'
import { requestApi } from '../../hooks/useRequestApi';
import { useNavigate, useParams } from 'react-router-dom';

export const AyudasTrabajoDetalle = ({carreraSelect, setCarreraSelect, cursoSelect, setCursoSelect, trabajoSelect, setTrabajoSelect}) => {

    const [solicitudAceptada, setSolicitudAceptada] = useState(false);
    const [asesores, setAsesores] = useState(false);

    const navigate = useNavigate();
    const {carrera, curso, trabajo} = useParams();

    useEffect(() => {
            requestApi({ url: `/api/v1/trabajos/url`, type: 'POST', data: {
                carrera_url: carrera,
                curso_url: curso,
                trabajo_url: trabajo
            }}).then(({ data }) => {
                const {
                    carrera_id,
                    carrera_nombre,
                    carrera_url,
                    curso_id,
                    curso_nombre,
                    curso_url,
                    trabajo_cupos,
                    trabajo_id,
                    trabajo_nombre,
                    trabajo_nuevo,
                    trabajo_precio,
                    trabajo_resultados,
                    trabajo_temas,
                    trabajo_url,
                    trabajo_referencias,
                    asesores,

                } = data[0]
                // console.log(data);
                setCarreraSelect({
                    carrera_id,
                    carrera_nombre,
                    carrera_url,
                });
                setCursoSelect({
                    curso_id,
                    curso_nombre,
                    curso_url,
                });
                setTrabajoSelect({
                    trabajo_cupos,
                    trabajo_id,
                    trabajo_nombre,
                    trabajo_nuevo,
                    trabajo_precio,
                    trabajo_resultados,
                    trabajo_temas: JSON.parse(trabajo_temas),
                    trabajo_url,
                    trabajo_referencias,
                    asesores,
                });
            });
    }, [])

    return (
        <main className='main-content'>
            {
                trabajoSelect.trabajo_id != 0 ? (
                    <>
                    <h1 className='main-content__title'>
                        <span className='cursor-pointer' onClick={() => navigate(`/ayudas/${carreraSelect.carrera_url}`)}>{carreraSelect.carrera_nombre}</span>
                        {" "}/{" "}
                        <span className='cursor-pointer' onClick={() => navigate(`/ayudas/${carreraSelect.carrera_url}/${cursoSelect.curso_url}`)}>{cursoSelect.curso_nombre}</span>
                        {" "}/ {trabajoSelect.trabajo_nombre}
                    </h1>
                    {
                        solicitudAceptada ? (
                            <section className='flex-center-col'>
                                <article className='bg-white-shadow flex-center-col solicitud-aceptada'>
                                    <h1>Solicitud Aceptada</h1>
                                    <p >En breve recibiras un mensaje por WhatsApp</p>
                                    <img src="/send-data.png" alt="imagen de envio de datos" />
                                    <h2>Dudas y consultas</h2>
                                    <p>Escribir a nuestros WhatsApp</p>
                                </article>
                            </section>
                        ) : (
                            <section className='bg-white-shadow pd-3'>
                                <header className='trabajo-ayuda-detalle__header'>
                                    <h1>{trabajoSelect.trabajo_nombre}</h1>
                                    <p className={
                                            trabajoSelect.trabajo_cupos >= 10 ? 'text--green':
                                            trabajoSelect.trabajo_cupos >= 5 ? 'text--yellow':
                                            trabajoSelect.trabajo_cupos >= 2 ? 'text--red' : 'text--darkgray'}>
                                            {trabajoSelect.trabajo_cupos != 0 ? `${trabajoSelect.trabajo_cupos} CUPOS` : "COMPLETO"}
                                        </p>
                                </header>
                                <div>
                                    {/* <button>Descargar pdf</button> */}
                                    <p className='trabajo-ayuda-detalle__precio'>Precio: <span className='text--green'>S/. {trabajoSelect.trabajo_precio}</span></p>
                                </div>
                                <div className='trabajo-ayuda-detalle__row'>
                                    <div className='trabajo-ayuda-detalle__left-col'>
                                        {
                                            trabajoSelect.trabajo_temas.length ? <article className='bg-white-shadow trabajo-ayuda-detalle__subcontainer temas-practica'>
                                                <h1>¿Que temas ingresan en esta practica?</h1>
                                                <ul className='temas-practica__list'>
                                                    {
                                                        trabajoSelect.trabajo_temas.map((tema) => {
                                                            return <li key={tema.tema_nombre}>{tema.tema_nombre}</li>

                                                        })
                                                    }
                                                </ul>
                                                <img src="/code.png" alt="imagen animada de codigo" className='temas-practica__code-img'/>
                                            </article>: ''
                                        }
                                        
                                        {
                                            trabajoSelect.trabajo_referencias && trabajoSelect.trabajo_referencias != " " ? (
                                                <article className='bg-white-shadow trabajo-ayuda-detalle__subcontainer'>
                                                    <h1>Resultados anteriores</h1>
                                                    <ul className='flex-list'>
                                                        <li>
                                                            {
                                                                trabajoSelect.trabajo_referencias && trabajoSelect.trabajo_referencias != " " ? trabajoSelect.trabajo_referencias.split('[espacio]').map((ref, index) => {
                                                                    return <img src={`/images/referencias/${ref}`} alt="referencia de otro trabajo anterior" className='width-100' key={index}/>

                                                                }) : ''
                                                            }

                                                        </li>
                                                    </ul>
                                                </article>
                                            ) : ''
                                        }
                                    </div>
                                    <div className='trabajo-ayuda-detalle__rigth-col'>
                                        <article className='bg-white-shadow trabajo-ayuda-detalle__subcontainer'>
                                            <h1>Quieres ayuda para este trabajo?</h1>
                                            <p className='margin-bottom-1'>Comunicate con nuestros asesores.</p>
                                            <div className='asesores-trabajo'>
                                             {
                                                    trabajoSelect.asesores ? trabajoSelect.asesores.map((asesor) => {
                                                        return (
                                                            <div className='card-staff__part card-staff__part--images card-staff__part--trabajo' key={asesor.asesor_id}>
                                                                <div className='card-staff__image'>
                                                                    <img src={`/images/staff/${asesor.asesor_img}`} alt="imagen de programacion avanzada" />
                                                                </div>
                                                                <div className='card-staff__info'>
                                                                    <h1 className='text--darkgray'>{asesor.asesor_nombre}</h1>
                                                                    <button className='btn-wsapp' onClick={() => window.open(`https://wa.me/51${asesor.asesor_numero.split(' ').join('')}`, '_blank')}><h2 className='text--darkgray'><i className="fa-brands fa-whatsapp"></i> {asesor.asesor_numero}</h2></button>
                                                                    
                                                                </div>
                                                            </div>
                                                        )
                                                    }) : ''
                                                }
                                            </div>
  
                                        </article>
                                    </div>
                                </div>
                            </section>
                        )
                    }
                    </>
                ) : ''
            }
            
            

            
        </main>
    )
}
