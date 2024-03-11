import React, { useState } from 'react'

export const Stuff = () => {
    const [productos, setProductos] = useState([]);

  return (
    <main className='main-content'>
        <h1 className='main-content__title'>STAFF</h1>
        {

            <ul className='grid-staff'>

                <li className='card-staff bg-white-shadow' >
                    <article>
                        <div className='card-staff__part card-staff__part--images'>
                            <div className='card-staff__image'>
                                <img src='/images/staff/bella.png' alt="imagen de programacion avanzada" />
                            </div>
                            <div className='card-staff__info'>
                                <h1 className='text--darkgray'>BellAyudas</h1>
                                <h2 className='text--darkgray'><i className="fa-brands fa-whatsapp"></i> 902 267 727</h2>
                            </div>
                        </div>
                        <div className='card-staff__part card-staff__part--descripcion'>
                            <h2>DESCRIPCIÓN</h2>
                            <p>Especialista en circuitos eléctricos y electrónicos, brindando también asesoría en el área de microcontroladores. Además, proporciona asistencia en materias de control clásico y en cuestiones matemáticas vinculadas a la electrónica y mecatrónica, así como en la mentoría de conceptos relacionados con el tratamiento de señales y el procesamiento de imágenes.</p>
                        </div>

                    </article>
                </li>
                <li className='card-staff bg-white-shadow' >
                    <article>
                        <div className='card-staff__part card-staff__part--images'>
                            <div className='card-staff__image'>
                                <img src='/images/staff/vell.png' alt="imagen de programacion avanzada" />
                            </div>
                            <div className='card-staff__info'>
                                <h1 className='text--darkgray'>VEELAyudas</h1>
                                <h2 className='text--darkgray'><i className="fa-brands fa-whatsapp"></i> 971 224 455</h2>
                            </div>
                        </div>
                        <div className='card-staff__part card-staff__part--descripcion'>
                            <h2>DESCRIPCIÓN</h2>
                            <p>Especialista en interpretación profesional del idioma de Inglés, complementado con compentencias en la lengua Alemán e Italiano.</p>
                        </div>

                    </article>
                </li>
                <li className='card-staff bg-white-shadow' >
                    <article>
                        <div className='card-staff__part card-staff__part--images'>
                            <div className='card-staff__image'>
                                <img src='/images/staff/claw.jpeg' alt="imagen de programacion avanzada" />
                            </div>
                            <div className='card-staff__info'>
                                <h1 className='text--darkgray'>CLAW</h1>
                                <h2 className='text--darkgray'><i className="fa-brands fa-whatsapp"></i> 957 111 457</h2>
                            </div>
                        </div>
                        <div className='card-staff__part card-staff__part--descripcion'>
                            <h2>DESCRIPCIÓN</h2>
                            <p>Experto en Python con experiencia profesional en el desarrollo de aplicaciones avanzadas y soluciones informáticas.</p>
                            <br />
                            <p>skills:</p>
                            <ul>
                                <li>Análisis de Datos y Ciencia de Datos: libreria Pandas, NumPy</li>
                                <li>Desarrollo de interfaces: Tkinter</li>
                                <li>Manejo de Bases de Datos SQL: PostgreSQL, MySQL, SQLITE</li>
                                <li>Programacion Orientada a Objetos</li>
                                <li>Otros: Desarrollador de Aplicaciones Web</li>
                            </ul>
                        </div>

                    </article>
                </li>
                <li className='card-staff bg-white-shadow' >
                    <article>
                        <div className='card-staff__part card-staff__part--images'>
                            <div className='card-staff__image'>
                                <img src='/images/staff/Elysteach.jpg' alt="imagen de programacion avanzada" />
                            </div>
                            <div className='card-staff__info'>
                                <h1 className='text--darkgray'>Elysteach</h1>
                                <h2 className='text--darkgray'><i className="fa-brands fa-whatsapp"></i> 969 058 657</h2>
                            </div>
                        </div>
                        <div className='card-staff__part card-staff__part--descripcion'>
                            <h2>DESCRIPCIÓN</h2>
                            <p>Consultor especializado en aplicaciones de ingenieria y diseño con un enfoque tanto en la particularidad del diseño de gráficos GUIDE y en la codificación de procesos matemáticos orientados al tratamiento digital de señales e de imágenes en MATLAB, mientras que en relación a Python enfoca aplicaciones intermedias a avanzadas en general, como también el procesamiento de señales.</p>
                        </div>
                    </article>
                </li>
                <li className='card-staff bg-white-shadow' >
                    <article>
                        <div className='card-staff__part card-staff__part--images'>
                            <div className='card-staff__image'>
                                <img src='/images/staff/anco.png' alt="imagen de programacion avanzada" />
                            </div>
                            <div className='card-staff__info'>
                                <h1 className='text--darkgray'>GAMA</h1>
                                <h2 className='text--darkgray'><i className="fa-brands fa-whatsapp"></i> 902 267 727</h2>
                            </div>
                        </div>
                        <div className='card-staff__part card-staff__part--descripcion'>
                            <h2>DESCRIPCIÓN</h2>
                            <p>Especialista en Matemáticas Avanzadas investigativa y académica en el ámbito de las matemáticas puras en la exploración meticulosa de conceptos teóricos como prácticos. Además, tengo un sólido conocimiento en física, respaldado por mi experiencia en la resolución de problemas interdisciplinarios que requieren un entendimiento profundo de ambos campos.</p>
                        </div>

                    </article>
                </li>
            </ul>

        }
        
    </main>
  )
}
