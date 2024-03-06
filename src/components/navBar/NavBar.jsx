import React, { useEffect, useState, useRef  } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestApi } from '../../hooks/useRequestApi';

export const NavBar = ({carreras, setCarreraSelect, setcarreras, panel=''}) => {
    const navigate = useNavigate();
    const actualUrl = window.location.pathname;
    const [openNavAsesorias, setopenNavAsesorias] = useState(false)
    const [openSubNav, setOpenSubNav] = useState(false)
    
    const [maxAltura, setMaxAltura] = useState("0px");

    const contenedorRef = useRef();

    const onClickItem = (carrera) => {
        setopenNavAsesorias(false);
        setOpenSubNav(false)
        setCarreraSelect(carrera);
        navigate(`${panel}/ayudas/${carrera.carrera_url}`);
    }
    const redirectUrl = (url) => {
        setopenNavAsesorias(false);
        setOpenSubNav(false)
        navigate(url);
    }

    useEffect(() => {
        if (contenedorRef.current) {
          const altura = contenedorRef.current.offsetHeight;
          setMaxAltura(altura + "px");
        }
      }, [openNavAsesorias]); // Dependencia en el estado `expandido`.

    useEffect(() => {
        requestApi({ url: `/api/v1/carreras`, type: 'GET' }).then(({ data }) => {
          setcarreras(data);
        });
      }, [])
    return (
        <section className='nabar-section'>
            
            <div className='navbar'>
                <h1 className='navbar__title' onClick={() => navigate(`/`)}>
                    <img src="/logo.png" alt="logo" />
                </h1>
                <ul className='navbar__options-container'>
                    {
                        actualUrl !== '/' ? (
                            <>
                                <li className='navbar__item'>
                                    <p onClick={() => setopenNavAsesorias(!openNavAsesorias)}>ASESORIAS</p>
                                    <ul className={openNavAsesorias ? 'navbar__desplegable navbar__desplegable--desplegado' : 'navbar__desplegable'}>
                                        {
                                            carreras.map(carrera => {
                                                return (<li className='navbar__item' key={carrera.carrera_id} onClick={() => onClickItem(carrera)}>{carrera.carrera_nombre}</li>)
                                            })
                                        }
                                    </ul>
                                </li>
                                <li className='navbar__item' onClick={() => redirectUrl(`${panel}/ingles`)}>INGLES</li>
                                <li className='navbar__item' onClick={() => redirectUrl(`${panel}/cursos_offline`)}>CURSOS OFFLINE</li>
                            </>
                        ) : ('')

                    }
                    
                    <li className='navbar__item' onClick={() => redirectUrl(`${panel}/staff`)}>STAFF</li>
                    <li className='navbar__item' onClick={() => redirectUrl(`${panel}/tienda`)}>TIENDA</li>
                    <li onClick={() => setOpenSubNav(!openSubNav)}><i className="navbar__bars fa-solid fa-bars"></i></li>
                </ul>
            </div>
            
            <div className={openSubNav ? "subnavbar__options-container subnavbar__options-container--open" : "subnavbar__options-container"}>
                <ul>
                    
                    {
                        actualUrl !== '/' ? (
                            <>
                                <li className='subnavbar__item--desplegable'>
                                    <p className='subnavbar__item' onClick={() => setopenNavAsesorias(!openNavAsesorias)}>ASESORIAS</p>
                                    <div className={openNavAsesorias ? 'subnavbar__desplegable' : 'subnavbar__desplegable subnavbar__desplegable--desplegado'}
                                        style={{ maxHeight: openNavAsesorias ? maxAltura : "0px" }}
                                        >
                                        <ul ref={contenedorRef}>
                                            
                                            
                                            {
                                                carreras.map(carrera => {
                                                    return (<li className='subnavbar__item' key={carrera.carrera_id} onClick={() => onClickItem(carrera)}>{carrera.carrera_nombre}</li>)
                                                })
                                            }
                                        </ul>
                                    </div>
                                    
                                </li>
                                <li className='subnavbar__item' onClick={() => redirectUrl(`${panel}/ingles_pdn`)}>PDN</li>
                                <li className='subnavbar__item' onClick={() => redirectUrl(`${panel}/cursos_offline`)}>CURSOS OFFLINE</li>
                            </>
                        ) : ('')

                    }
                    
                    <li className='subnavbar__item' onClick={() => redirectUrl(`${panel}/staff`)}>STAFF</li>
                    <li className='subnavbar__item' onClick={() => redirectUrl(`${panel}/tienda`)}>TIENDA</li>
                </ul>
            </div>
        </section>
    )
}
