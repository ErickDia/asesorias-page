import React, { useEffect, useState } from 'react'
import { requestApi } from '../../hooks/useRequestApi';

export const Tienda = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        requestApi({ url: `/api/v1/productos`, type: 'GET'}).then(({ data }) => {
            setProductos(data);
            
        });
    }, [])


  return (
    <main className='main-content'>
        <h1 className='main-content__title'>TIENDA</h1>
        {

            <ul className='grid'>
                {
                    productos.map((producto) => {
                        return (
                            <li className='bg-white-shadow card-curso-ayuda' key={producto.prod_id}>
                                <article>
                                    <div className='card-curso-ayuda__image'>
                                        <img src='/images/productos/curiosity_nano.jpeg' alt="imagen de programacion avanzada" />
                                    </div>
                                    <div className='card-tienda__info'>
                                        <h1 className='text--darkgray'>{producto.prod_nombre}</h1>
                                        <h2 className='text--darkgray'>PRECIO: <span className='text--green'>S/. {producto.prod_precio}</span></h2>
                                        <h2 className='text--darkgray'><i class="fa-brands fa-whatsapp"></i> {producto.prod_contacto}</h2>
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
