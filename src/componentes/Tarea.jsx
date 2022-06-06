import React from 'react'
import '../hojas-de-estilo/Tarea.css';
import { RiDeleteBin6Line } from "react-icons/ri";


function Tarea({id, texto , completada ,complearTarea, eliminarTarea  }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className='tarea-texto' onClick={()=>complearTarea(id)}>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos' onClick={()=>eliminarTarea(id)}>
        <RiDeleteBin6Line className='tarea-icono'/>
      </div>

    </div>
  );
}


export default Tarea;