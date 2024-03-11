import React, { useEffect, useState } from 'react'
import { requestApi } from '../../hooks/useRequestApi';
import { useNavigate, useParams } from 'react-router-dom';

export const InglesTrabajoDirecto = ({pdnSelect, setPdnSelect}) => {

    const [solicitudAceptada, setSolicitudAceptada] = useState(false);
    const navigate = useNavigate();
    const {cursoi, trabajoi} = useParams();
    const [telefono, setTelefono] = useState('')
    console.log(pdnSelect);
      const enviarForm = (e) => {
        e.preventDefault();
        requestApi({ url: `/api/v1/solicitudes`, type: 'POST', data: {
            solicitud_telefono: telefono,
            solicitud_trabajo_id: pdnSelect.trabajo_id
        }}).then(({ status }) => {
            console.log(status);
        });
        setSolicitudAceptada(true)
      }

    useEffect(() => {
            requestApi({ url: `/api/v1/ingles/trabajo_url`, type: 'POST', data: {
                trabajoi_url: cursoi,
                cursoi_url: cursoi
            }}).then(({ data }) => {
                setPdnSelect({...data[0], trabajoi_temas: JSON.parse(data[0].trabajoi_temas)})
            });
    }, [])

    return (
        <main className='main-content'>
            {
                pdnSelect.trabajoi_id != 0 ? (
                    <>
                    <h1 className='main-content__title'>
                        <span className='cursor-pointer' onClick={() => navigate(`/ingles`)}>INGLES</span>
                        {" "}/{" "}
                        <span className='cursor-pointer'>{pdnSelect.cursoi_nombre}</span>
                        
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
                                    <h1>{pdnSelect.cursoi_nombre}</h1>
                                    <p className={
                                            pdnSelect.trabajoi_cupos >= 10 ? 'text--green':
                                            pdnSelect.trabajoi_cupos >= 5 ? 'text--yellow':
                                            pdnSelect.trabajoi_cupos >= 2 ? 'text--red' : 'text--darkgray'}>
                                            {pdnSelect.trabajoi_cupos != 0 ? `${pdnSelect.trabajoi_cupos} CUPOS` : "COMPLETO"}
                                        </p>
                                </header>
                                <div>
                                    {/* <button>Descargar pdf</button> */}
                                    <p className='trabajo-ayuda-detalle__precio'>Precio: <span className='text--green'>S/. {pdnSelect.trabajoi_precio}</span></p>
                                </div>
                                <div className='trabajo-ayuda-detalle__row'>
                                    <div className='trabajo-ayuda-detalle__left-col'>
                                        {
                                            pdnSelect.trabajoi_temas.length ? <article className='bg-white-shadow trabajo-ayuda-detalle__subcontainer temas-practica'>
                                                <h1>¿Que temas ingresan en esta practica?</h1>
                                                <ul className='temas-practica__list'>
                                                    {
                                                        pdnSelect.trabajoi_temas.map((tema) => {
                                                            return <li key={tema.tema_nombre}>{tema.tema_nombre}</li>

                                                        })
                                                    }
                                                </ul>
                                                <img src="/code.png" alt="imagen animada de codigo" className='temas-practica__code-img'/>
                                            </article>: ''
                                        }
                                        {
                                            pdnSelect.trabajoi_referencias && pdnSelect.trabajoi_referencias != " " ? (
                                                <article className='bg-white-shadow trabajo-ayuda-detalle__subcontainer'>
                                                    <h1>Resultados anteriores</h1>
                                                    <ul className='flex-list'>
                                                        <li>
                                                            {
                                                                pdnSelect.trabajoi_referencias && pdnSelect.trabajoi_referencias != " " ? pdnSelect.trabajoi_referencias.split('[espacio]').map((ref, index) => {
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
                                                    pdnSelect.asesores ? pdnSelect.asesores.map((asesor) => {
                                                        return (
                                                            <div className='card-staff__part card-staff__part--images card-staff__part--trabajo' key={asesor.asesor_id}>
                                                                <div className='card-staff__image'>
                                                                    <img src={`/images/staff/${asesor.asesor_img}`} alt="imagen de programacion avanzada" />
                                                                </div>
                                                                <div className='card-staff__info'>
                                                                    <h1 className='text--darkgray'>{asesor.asesor_nombre}</h1>
                                                                    <h2 className='text--darkgray'><i className="fa-brands fa-whatsapp"></i> {asesor.asesor_numero}</h2>
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
