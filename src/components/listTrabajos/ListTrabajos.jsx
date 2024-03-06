import React from 'react'

export const ListTrabajos = ({trabajos, onClickItem}) => {
  return (
    <ul className='flex-list'>
        {
            trabajos.map((trabajo) => {
                return (
                    <li onClick={() => onClickItem(trabajo)} key={trabajo.id}>
                        <article className='bg-white-shadow card-trabajo-ayuda'>
                            <div className='card-trabajo-ayuda__container-title'>
                                <h1>{trabajo.nombre}</h1>
                                {trabajo.nuevo === 1 ? (<p className='text--red'>NUEVO!</p>) : 
                                 trabajo.nuevo === 2 ? (<p className='text--lightgray'>PROXIMAMENTE</p>) : ''}
                                
                            </div>
                            <p className={
                                trabajo.cupos >= 10 ? 'text--green':
                                trabajo.cupos >= 5 ? 'text--yellow':
                                trabajo.cupos >= 1 ? 'text--red' : 'text--darkgray'}>
                                {trabajo.cupos > 0 ? `${trabajo.cupos} CUPOS` : trabajo.cupos === 0 ? "COMPLETO": ""}
                            </p>

                        </article>
                    </li>
                )
            })
        }
    </ul>
  )
}
