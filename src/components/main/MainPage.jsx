import React from 'react'
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
    const navigate = useNavigate();

    return (
        <main className='.main-content-intro'>
            <section className='categorias'>
                <article id='asesoria-img' className='main-card' onClick={() => navigate(`/ayudas/ing_mecatronica`)}>
                    <div className='main-card--bg-dark'>
                        <h1>ASESORIAS</h1>
                    </div>
                </article>
                <article id='pdn-img' className='main-card' onClick={() => navigate(`/ingles`)}>
                    <div className='main-card--bg-dark'>
                        <h1>INGLES</h1>
                    </div>
                </article>
                <article id='curso-offile-img' className='main-card' onClick={() => navigate(`/cursos_offline`)}>
                    <div className='main-card--bg-dark'>
                        <h1>CURSOS OFFLINE</h1>
                    </div>
                </article>
                
            </section>
        </main>

    )
}
