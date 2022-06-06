import React, { useState} from 'react'
import TareaFormulario from './TareaFormulario';
import Tarea from '../componentes/Tarea';
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas() {
  const [tareas, setTareas] =useState([]);

  const agregarTarea = tarea => {
    if(tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActulizadas = [tarea,...tareas];
      setTareas(tareasActulizadas);  

    }
  }

  const eliminarTarea = id => {
    const tareasActulizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActulizadas);
  }

  const complearTarea = id => {
       const tareasActulizadas = tareas.map(tarea =>{
        if (tarea.id === id){
          tarea.completada = !tarea.completada
        }
        return tarea;
      });
      setTareas(tareasActulizadas);
  }

  return(
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea)=> 
            <Tarea
              key={tarea.id}
              id ={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              complearTarea={complearTarea}
              eliminarTarea={eliminarTarea}
              />
          )
        }
    </div>
    </>
  );
}

export default ListaDeTareas;