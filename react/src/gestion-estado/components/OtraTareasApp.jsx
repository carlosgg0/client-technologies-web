import { useState } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

export const ContextoTareas = createContext(null);
export const ContextoDespachoTareas = createContext(null);

function AnadirTarea() {
  const [texto, setTexto] = useState('');
  const dispatch = useContext(ContextoDespachoTareas);
  return (
    <>
      <input
        placeholder="Añadir tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button
        onClick={() => {
          setTexto('');
          dispatch({
            type: 'anadir',
            id: nextId++,
            texto: texto
          });
        }}>
        Añadir
      </button>
    </>
  );
}
let nextId = 3;


function ListaTareas() {
  const tareas = useContext(ContextoTareas);
  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>
          <Tarea tarea={tarea} />
        </li>
      ))}
    </ul>
  );
}

function Tarea({tarea}) {
  const [estaEditando, setEstaEditando] = useState(false);
  const dispatch = useContext(ContextoDespachoTareas);
  let contenidoTarea;
  if (estaEditando) {
    contenidoTarea = (
      <>
        <input
          value={tarea.texto}
          onChange={(e) => {
            dispatch({
              type: 'cambiar',
              tarea: {
                ...tarea,
                texto: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setEstaEditando(false)}>Guardar</button>
      </>
    );
  } else {
    contenidoTarea = (
      <>
        {tarea.texto}<> </>
        <button onClick={() => setEstaEditando(true)}>Modificar</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={tarea.hecho}
        onChange={(e) => {
          dispatch({
            type: 'cambiar',
            tarea: {
              ...tarea,
              hecho: e.target.checked,
            },
          });
        }}
      />
      {contenidoTarea}<> </>
      <button onClick={() => dispatch({ type: 'eliminar', tareaId: tarea.id })}>Eliminar</button>
    </label>
  );
}

export default function OtraTareasApp() {

const [tareas, dispatch] = useReducer(tareasReducer, tareasIniciales);

function tareasReducer(tareas, accion){
  switch(accion.type){
    case 'anadir': {
      return [
        ...tareas,
        {
          id: accion.id,
          texto: accion.texto,
          hecho: false
        }
      ];
    }
    case 'cambiar':{
      return tareas.map((t) => {
        if (t.id === accion.tarea.id){
          return accion.tarea;
        } else{
          return t;
        }
      });
    }
    case 'eliminar':{
      return tareas.filter((t) => t.id !== accion.tareaId);
    }
    default: {
      throw Error('Acción desconocida: ' + accion.type);
    }
  }
}

  return (
    <>
      <ContextoTareas value={tareas}>
      <ContextoDespachoTareas value={dispatch}>
      <h1>Itinerario de Córdoba</h1>
      <AnadirTarea />
      <ListaTareas />
      </ContextoDespachoTareas>
      </ContextoTareas>
    </>
  );
}

const tareasIniciales = [
  {id: 0, texto: 'Puente romano', hecho: true},
  {id: 1, texto: 'Mezquita', hecho: false},
  {id: 2, texto: 'Judería', hecho: false},
];
