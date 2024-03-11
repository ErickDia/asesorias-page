import React, { useEffect, useState } from 'react'
import { requestApi } from '../../hooks/useRequestApi';

export const Tienda = () => {
    const [productos, setProductos] = useState([]);

    const [modalOpen, setModalOpen] = useState(false);
    const [imgModal, setImgModal] = useState("");
    const [prodModal, setProdModal] = useState({});
    const [imagesModal, setImagesModal] = useState([]);



    const changeModalData = (producto) => {
        setModalOpen(!modalOpen);
        setProdModal(producto);
        setImagesModal(JSON.parse(producto.prod_images));
        setImgModal(`/images/productos/${producto.prod_img}/${JSON.parse(producto.prod_images)[0].img_url}`);
    }

    useEffect(() => {
        requestApi({ url: `/api/v1/productos`, type: 'GET'}).then(({ data }) => {
            setProductos(data);
            
        });
    }, [])


  return (
    <>
        <main className='main-content'>
            <h1 className='main-content__title'>TIENDA</h1>
            {

                <ul className='grid'>
                    {
                        productos.map((producto) => {
                            return (
                                <li className='bg-white-shadow card-curso-ayuda' key={producto.prod_id} onClick={() => changeModalData(producto)}>
                                    <article>
                                        <div className='card-curso-ayuda__image'>
                                            <img src={`/images/productos/${producto.prod_img}.jpeg`} alt="imagen de programacion avanzada" />
                                        </div>
                                        <div className='card-tienda__info'>
                                            <h1 className='text--darkgray'>{producto.prod_nombre}</h1>
                                            <h2 className='text--darkgray'>PRECIO: <span className='text--green'>S/. {producto.prod_precio}</span></h2>
                                            <h2 className='text--darkgray'><i className="fa-brands fa-whatsapp"></i> {producto.prod_contacto}</h2>
                                        </div>

                                    </article>
                                </li>
                            )
                        })
                    }
                </ul>

            }
            
        </main>
        <div className={`modal ${modalOpen ? "" : 'd-none'}`}>
            <div className='modal-container'>
                <div className='close-modal'>
                    <i className="fa-solid fa-x" onClick={() => setModalOpen(!modalOpen)}></i>
                </div>
                <div>
                    <i className="fa-solid fa-chevron-left modal-arrow"></i>
                </div>
                <div>
                    <img src={imgModal} alt="imagen de programacion avanzada" className='modal-img'/>
                    <div className='modal-list'>
                        {
                            imagesModal.map((image) => {
                                return <img src={`/images/productos/${prodModal.prod_img}/${image.img_url}`} alt="imagen de programacion avanzada" className='modal-img-list'/>
                            })
                        }
                    </div>
                </div>
                <div>
                    <i className="fa-solid fa-chevron-right modal-arrow"></i>
                </div>
            </div>
        </div>
    </>
    
  )
}
