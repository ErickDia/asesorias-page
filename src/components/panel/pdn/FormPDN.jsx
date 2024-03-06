import React from 'react'

export const FormPDN = () => {
  return (
    <main  className='main-content'>
      <form action="">
        <label htmlFor="inglespdn_nombre">Nombre</label>
        <input type="text" id='inglespdn_nombre'/>

        <label htmlFor="inglespdn_url">Nombre url (unico para cada pdn)</label>
        <input type="text" id='inglespdn_url'/>

        <label htmlFor="inglespdn_nuevo">Nuevo?</label>
        <input type="text" id='inglespdn_nuevo'/>
      </form>
    </main>
  )
}
